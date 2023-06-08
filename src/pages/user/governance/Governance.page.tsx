import React, { useState, useEffect } from 'react'

import { UserRegistry, Governor } from '../../../components/contracts'
import { InnerBlock, InnerTransparentBlock } from '../../../assets/css/common.style'
import { isContractAddress } from '../../../utils/format'
import { useBlockNumber, useContract, useContractRead, useProvider, useAccount } from 'wagmi'
import { client } from '../../../utils/client'
import { Button } from '@material-tailwind/react'
import { Loader } from './Loader'
import { OneProposal } from './OneProposal'


const Governance = () => {

  const [vDelay, setVotingDelay] = useState(0)
  const [vPeriod, setVotingPeriod] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const [proposalIds, setProposalIds] = useState()
  const [canVote, setCanVote] = useState(false)
  const { address } = useAccount()

  useEffect(() => {
    const fetchDAO = async () => {
      const votingDelay = await client.readContract({
        ...Governor,
        functionName: 'votingDelay',
      })
    
      const votingPeriod = await client.readContract({
        ...Governor,
        functionName: 'votingPeriod',
      })

      const proposalIds = await client.readContract({
        ...Governor,
        functionName: 'getProposalIds',
      })

      const userDetails = await client.readContract({
        ...UserRegistry,
        functionName: 'getUserDetails',
        args: [address]
      })

      console.log('UserDetails: ', userDetails)
      console.log('proposal Ids: ', proposalIds)
      
      setCanVote(userDetails.tokenHolder)
      setProposalIds(proposalIds)
      setVotingDelay(votingDelay)
      setVotingPeriod(votingPeriod)

      if(proposalIds){
        setIsReady(true)
      }
    }
    fetchDAO()
  },[])

  return (
      <div className="p-10 h-full text-[#f3f3f3]">
        <>
          <InnerTransparentBlock>
          <InnerBlock.Header className="flex justify-between text-[#f3f3f3]">
            <span className="text-[#f3f3f3] mb-5">DAO</span>
          </InnerBlock.Header>

          <div>
            {isContractAddress(Governor.address) ? (
              <>
                <div className="flex justify-between text-sm mb-3 -mt-1">
                  <div className="mr-10">
                    <span className={'mr-4'}>Delay: {parseInt(vDelay)} blocks</span>
                    <span>Period: {parseInt(vPeriod)} blocks</span>
                  </div>
                  <span className="text-sm font-normal text-slate-300">
                    <span className="font-medium mr-1">Contract:</span>
                    <small className="opacity-80">{Governor.address}</small>
                  </span>
                </div>

                <hr className="mb-6"/>
                <div className="text-sm mb-4">
                  {isReady ? (
                    <>
                      <div className={'flex justify-between'}>
                        {(!proposalIds.length) ? (
                          <span className={'opacity-60'}>*No Proposals for voting</span>
                        ) : (
                          <div className="pt-1">
                            <span className="opacity-80">Total Proposals:</span>
                            <b className="ml-1">{proposalIds.length}</b>
                          </div>
                        )}

                        {/* <div className="-mt-3 justify-end">
                          <Button className=" bg-cyan-300" onClick={() => console.log('create proposal') set popup visible to true}>
                            Create new Proposal
                          </Button>
                        </div> */}
                      </div>

                      <div className={'mt-4'}>
                        {proposalIds.map(proposalId => (
                          <OneProposal key={proposalId}
                            canVote={canVote}
                            showBlocks={true}
                            proposalId={proposalId}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="w-12 mb-3 mx-auto">
                      <Loader/>
                    </div>
                  )} 
                </div>
              </>
            ) : (
              <>
                console.log(other)
                {/* <DeployDAOContract reloadCommunityList={reloadCommunityList}/> */}
              </>
            )}
          </div> 
          </InnerTransparentBlock>

          {/* <NewProposalPopup 
            currentCommunity={currentCommunity}
            setPopupVisible={setCreateProposalPopupVisible}
            popupVisible={createProposalPopupVisible}
            handleSuccess={loadAllProposals}
          /> */}
        </>
      </div>
  )
}

export default Governance