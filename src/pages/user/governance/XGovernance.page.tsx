/* import React from 'react'

const style = {
  wrapper: 'h-[25rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col',
  inputFieldsContainer: 'flex-1',
  inputContainer: 'mb-4',
  fileInput: 'hidden',
  dropdown: 'bg-transparent border-2 border-[#404551] outline-none p-4 pr-8 text-xl w-full',
  input: 'bg-transparent border-2 border-[#404551] outline-none p-4 text-xl w-full',
  customInput: 'bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer',
  fileSelected: 'bg-[#2b6127] text-white px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer',
  lower: 'flex justify-between items-center',
  visibility: 'flex items-center text-[#1d9bf0] text-sm font-bold',
  visibilityText: 'ml-2',
  mintButton: 'bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer',
  inactiveMintButton: 'text-black px-3 py-1 rounded-full bg-[#8899a6]',
  label: 'font-bold text-grey pb-4'
}

// mint governance token. 
const Governance = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-9">
        <div className="w-full h-48 rounded bg-gray-100 inset-0 p-5">
          <button
            type='submit'
            onClick={() => {
              console.log('mint')
            }}
            className={`${style.footerIcon} hover:text-cyan-200 hover:bg-[#0e0f10] px-4`}
          >
            Withdraw 
          </button>
        </div>
      </div>
    </div>
    )
}

export default Governance */

import React, { useState, useEffect } from 'react'
import './styles.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import { UserRegistry, GovernanceToken } from '../../../components/contracts'
import FlipCard, { BackCard, FrontCard } from '../../../components/FlipCard'

const contractConfig = {
  ...GovernanceToken,
}

const Governance = () => {
  const [mounted, setMounted] = useState(false)
  const [userDetails, setUserDetails] = useState()

  useEffect(() => {
    setMounted(true)
  }, [])

  const { isConnected, address } = useAccount()

  const {
    data: GUser, 
    isLoading: LUser,
    isSuccess: SUser,
    error: EUser
  } = useContractRead({
    ...UserRegistry,
    functionName: 'getUserDetails',
    args: [address]
  })

  const {
    data: txUserData,
    isSuccess: txUserSuccess,
    error: txUserError,
  } = useWaitForTransaction({
    hash: GUser?.hash,
  })

  const { config: contractWriteConfig } = usePrepareContractWrite({
    ...contractConfig,
    functionName: 'safeMint',
    args: [address]
  })

  const {
    data: mintData,
    write: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
    error: mintError,
  } = useContractWrite(contractWriteConfig)


  const {
    data: txData,
    isSuccess: txSuccess,
    error: txError,
  } = useWaitForTransaction({
    hash: mintData?.hash,
  })


  const isMinted = txSuccess
  const isTokenHolder = GUser.tokenHolder

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 flex flex-col justify-center items-center h-screen">
        { !isTokenHolder ? (<>
          <div >
            <div style={{ padding: '24px 24px 24px 0' }}>
              <h1>Mint your token</h1>
              <ConnectButton />

              {mintError && (
                <p style={{ marginTop: 24, color: '#FF6257' }}>
                  Error: {mintError.message}
                </p>
              )}
              {txError && (
                <p style={{ marginTop: 24, color: '#FF6257' }}>
                  Error: {txError.message}
                </p>
              )}

              {mounted && isConnected && !isMinted && (
                <button
                  style={{ marginTop: 24 }}
                  disabled={!mint || isMintLoading || isMintStarted}
                  className="button"
                  data-mint-loading={isMintLoading}
                  data-mint-started={isMintStarted}
                  onClick={() => mint?.()}
                >
                  {isMintLoading && 'Waiting for approval'}
                  {isMintStarted && 'Minting...'}
                  {!isMintLoading && !isMintStarted && 'Mint'}
                </button>
              )}
            </div>
          </div>

          <div style={{ flex: '0 0 auto' }}>
            <FlipCard>
              <FrontCard isCardFlipped={isMinted}>
                <img
                  layout="responsive"
                  src="https://caringcoin.infura-ipfs.io/ipfs/QmW34D3jAFJYLbzK2wub7pCRh361JavXbQMk1o9dzYdDT8"
                  width={500}
                  height={500}
                  alt="RainbowKit Demo NFT"
                />
                <h1 style={{ marginTop: 24 }}>caring token</h1>
              </FrontCard>
              <BackCard isCardFlipped={isMinted}>
                <div style={{ padding: 24 }}>
                  <img
                    src="https://caringcoin.infura-ipfs.io/ipfs/QmW34D3jAFJYLbzK2wub7pCRh361JavXbQMk1o9dzYdDT8"
                    width={80}
                    height={80}
                    alt="RainbowKit Demo NFT"
                    style={{ borderRadius: 8 }}
                  />
                  <h2 style={{ marginTop: 24, marginBottom: 6 }}>NFT Minted!</h2>
                  <p style={{ marginBottom: 24 }}>
                    Your NFT will show up in your wallet in the next few minutes.
                  </p>
                  <p style={{ marginBottom: 6 }}>
                    View on{' '}
                    <a href={`https://rinkeby.etherscan.io/tx/${mintData?.hash}`}>
                      Etherscan
                    </a>
                  </p>
                  <p>
                    View on{' '}
                    <a
                      href={`https://testnets.opensea.io/assets/rinkeby/${txData?.to}/1`}
                    >
                      Opensea
                    </a>
                  </p>
                </div>
              </BackCard>
            </FlipCard>
          </div>
        </>) : (
          <div>Attained your token 😏 Start ruling</div>
        )}
      </div>
    </div>

  )
}

export default Governance
