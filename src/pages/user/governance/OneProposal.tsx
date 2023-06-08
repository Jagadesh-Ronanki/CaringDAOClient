/* 
state 
proposalDeadline
proposalProposer

enum ProposalState {
  Pending, 0
  Active, 1
  Canceled, 2
  Defeated, 3
  Succeeded, 4
  Queued, 5
  Expired, 6
  Executed 7
}
*/

// @ts-nocheck
import React, {useState, useEffect} from 'react'
import { Governor } from '../../../components/contracts'
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { client } from '../../../utils/client'
import { Button } from '@material-tailwind/react'

export const OneProposal = ({ proposalId, showBlocks, canVote}) => {
  const {address} = useAccount()
  const [description, setDescription] = useState('')
  const [state, setState] = useState(1)
  const [hasVoted, setHasVoted] = useState(false)
  const [voteData, setVoteData] = useState({
    id: '',
    option: '',
  })


  const { config: configVote, error: errorVote } = usePrepareContractWrite({
    ...Governor,
    enabled: canVote && voteData?.id.toString().length > 0,
    functionName: 'castVote',
    args: [voteData?.id, voteData?.option]
  })

  const { data: voteTxData, write: voteWrite, status: voteStatus } = useContractWrite({
    ...configVote,
    onSuccess: ({ hash }) => {
      console.log('vote hash: ', hash)
    },
    onError: ({ message }) => {
      resetForm()
      console.log('onError message', message)
    },
  })

  useWaitForTransaction({
    hash: voteTxData?.hash,
    onError: error => {
      console.log('vote: is err', error)
      resetForm()
    },
    onSuccess: data => {
      if (data) {
        resetForm()
        console.log('vote: update info...')
      }
    },
  })

  const resetForm = () => {
    setVoteData({
      id: '',
      option: '',
    })
  }

  useEffect(() => {
    const fetchProposal = async () => {
      const desc = await client.readContract({
        ...Governor,
        functionName: 'getProposalDetails',
        args: [proposalId]
      })

      const s = await client.readContract({
        ...Governor,
        functionName: 'state',
        args: [proposalId],
        watch: true
      })

      const voted = await client.readContract({
        ...Governor,
        functionName: 'hasVoted',
        args: [proposalId, address], // Assuming `address` is the user's address
      })


      setState(s)
      setDescription(desc[3])
      setHasVoted(voted)
    }
    fetchProposal()
  },[])

  useEffect(() => {
    if (voteWrite && voteStatus !== 'loading') {
      voteWrite()
    }
  }, [voteWrite])

  useEffect(() => {
    console.log('errorVote', errorVote)
  }, [errorVote])

  const handleVote = (option) => {
    setVoteData({ id: proposalId, option })
  }

  return (
    <div
      className={'text-white relative break-words bg-[#100f1c] rounded-lg shadow-[#212031] shadow-md px-8 py-6 mb-4'}>
      <div className={'font-medium text-base'}>{description}</div>
      {canVote && !hasVoted && (
        <div className={'pt-4 mt-4 border-t border-dashed border-gray-300 text-center text-gray-600'}>
          {(state === 1) && (
            <>
              <button className={'vote-r mx-3 text-sm text-red-300 outline bg-transparent hover:bg-red-300 hover:text-black hover: caret-transparent'} onClick={() => handleVote(0)}>
                Against
              </button>
              <button className={'vote-s mx-3 text-sm text-slate-300 outline bg-transparent hover:bg-slate-300 hover:text-black hover: caret-transparent'} onClick={() => handleVote(2)}>
                Abstain
              </button>
              <button className={'vote-g mx-3 text-sm text-green-300 outline bg-transparent hover:bg-green-300 hover:text-black hover: caret-transparent'} onClick={() => handleVote(1)}>
                Agree
              </button>
            </>
          )}
        </div>
      )}

      {canVote && hasVoted && (
        <div className={'pt-4 mt-4 border-t border-dashed border-gray-300 text-center'}>
          <span className='text-3xl font-mono animate-spin'>Voted</span>
        </div>
      )}

      {showBlocks && (
        <div className={'pt-4 mt-4 border-t border-dashed border-gray-300 text-gray-600'}>
          {/* <span>Start Block: {proposal.startBlock}</span>
          <span className={'mx-5'}>End Block: {proposal.endBlock}</span> */}

          {(state === 0) && (
            <span className={'font-semibold text-gray-400'}>Voting not Started</span>
          )}
          {(state === 5) && (
            <span className={'font-semibold text-red-600'}>Voting End</span>
          )}
          {(state === 1) && (
            <span className={'font-semibold text-green-600'}>Active Voting</span>
          )}
        </div>
      )}
    </div>
  )
}