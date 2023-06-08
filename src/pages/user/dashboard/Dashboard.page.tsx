import React, { useState, useEffect } from 'react'
import { useContractRead, useContractWrite, useAccount, useWaitForTransaction, usePrepareContractWrite } from 'wagmi'
import { UserRegistry, PriceConversion, Handler, Variables, GovernanceToken } from '../../../components/contracts'
import jrnet from '../../../assets/images/Jrnet.png'
import './Dashboard.css'
import {ClipLoader} from 'react-spinners'
import { client } from '../../../utils/client'
import { precision } from '../../../utils/precision'

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

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    profileCID: '',
    appreciationBalance: 0,
    appreciationsGiven: 0,
    appreciationsTaken: 0,
    contributionBalance: 0,
    givenAmt: 0,
    level: 0,
    registered: 0,
    takenAmt: 0,
    tokenHolder: false,
    tokenId: 0,
  })
  const [usd, setUsd] = useState<number>(0)
  const { address } = useAccount()
  const [value, setValue] = useState(0)
  const [conversionPrice, setConversionPrice] = useState(0)
  const [withdrawalThreshold, setWithdrawalThreshold] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [levelToGovern, setLevelToGovern] = useState(9999)

  const { data: GUSD, isSuccess:SUSD } = useContractRead({
    ...PriceConversion,
    functionName: 'getLatestPrice',
    watch: true,
  })

  useEffect(() => {
    SUSD && (
      setUsd(Number(GUSD[0])/(10**GUSD[1]))
    )
  }, [GUSD])

  const {data: depositTx, write: deposit, status: depositStatus} = useContractWrite({
    ...UserRegistry,
    functionName: 'addContributionBal',
  })

  useWaitForTransaction({
    hash: depositTx?.hash,
    onError: error => {
      console.log('Deposit error: ', error)
    },
    onSuccess: data => {
      if (data) {
        console.log('Updating info', data)
      }
    }
  })

  const handleDeposit = () => {
    console.log(conversionPrice, value)
    deposit({
      args: [address],
      value: conversionPrice
    })
  }

  const { data: withdrawTx, write: withdraw, status: withdrawStatus} = useContractWrite({
    ...Handler,
    functionName: 'withdraw',
  })

  const handleWithdraw = async () => {
    if(!address) return
    await withdraw({
      args: [address]
    })
  }

  const contractConfig = {
    ...GovernanceToken,
  }

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

  useEffect(() => {
    const fetchConversionPrice = async () => {
      const conversion = await client.readContract({
        ...PriceConversion,
        functionName: 'UsdtoEth',
        args: [value],
        watch: true,
      })

      console.log('conversionInvoked', conversion)
      setConversionPrice(Number(conversion))
    }

    fetchConversionPrice()
  }, [value])

  useEffect(() => {
    const fetch = async () => {
      const userData = await client.readContract({
        ...UserRegistry,
        functionName: 'getUserDetails',
        args: [address],
        watch: true
      })

      setUserDetails({
        name: userData.name,
        profileCID: userData.profileCID,
        appreciationBalance: Number(userData.appreciationBalance)/(10**18),
        appreciationsGiven: Number(userData.appreciationsGiven),
        appreciationsTaken: Number(userData.appreciationsTaken),
        contributionBalance: Number(userData.contributionBalance)/(10**18),
        givenAmt: Number(userData.givenAmt)/(10**18),
        level: Number(userData.level),
        registered: userData.registered,
        takenAmt: Number(userData.takenAmt)/(10**18),
        tokenHolder: userData.tokenHolder,
        tokenId: userData.tokenId.toString(),
      })

      console.log(userData)
      console.log(userDetails)
    }
    fetch()
  }, [depositTx, depositStatus, withdraw, withdrawTx, txSuccess, txData])

  useEffect(() => {
    const fetchThreshold = async () => {
      const threshold = await client.readContract({
        ...Handler,
        functionName: 'calculateWithdrawalThreshold',
        args: [userDetails.level]
      })

      const level = await client.readContract({
        ...Variables,
        functionName: 'retriveLevelToGovern',
      })

      setWithdrawalThreshold(threshold)
      setLevelToGovern(level)
    }

    fetchThreshold()
  }, [userDetails, withdrawTx, withdraw])

  const shortAddress = (address) => {
    return address.slice(0, 5) + '...' + address.slice(38, 42)
  }

/* styles */
  useEffect(() => {
    const handleMouseEnter = (e) => {
      const cursor = document.querySelector('.cursor')
      cursor.style.transform = 'scale(7)' // Adjust the scale factor as desired
    }

    const handleMouseLeave = (e) => {
      const cursor = document.querySelector('.cursor')
      cursor.style.transform = 'scale(1)'
    }

    const navItems = document.querySelectorAll('.details')
    navItems.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter)
      item.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      navItems.forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter)
        item.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  useEffect(() => {
    const handleMouseEnter = (e) => {
      const cursor = document.querySelector('.cursor')
      cursor.style.transform = 'scale(3)' // Adjust the scale factor as 
      cursor.style.background = 'yellow'
    }

    const handleMouseLeave = (e) => {
      const cursor = document.querySelector('.cursor')
      cursor.style.transform = 'scale(1)'
      cursor.style.background = '#FAF3F3'
      cursor.style.boxShadow = 'none'
    }

    const navItems = document.querySelectorAll('.txbutton')
    navItems.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter)
      item.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      navItems.forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter)
        item.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  useEffect(() => {
    const handleMouseEnter = (e) => {
      const cursor = document.querySelector('.cursor')
      cursor.style.transform = 'scale(7)' // Adjust the scale factor as desired
    }

    const handleMouseLeave = (e) => {
      const cursor = document.querySelector('.cursor')
      cursor.style.transform = 'scale(1)'
    }

    const navItems = document.querySelectorAll('.details')
    navItems.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter)
      item.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      navItems.forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter)
        item.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div className='flex flex-col justify-center items-center h-[550px]'>
        {!userDetails.tokenHolder && userDetails.level > levelToGovern && (
        <button 
          type='submit'
          data-mint-loading={isMintLoading}
          data-mint-started={isMintStarted}
          onClick={() => mint?.()}
          className='txbutton text-[#ffe347] w-[300px] font-mono font-md mt-7 mb-6'
        >
          {isMintLoading && 'Waiting for approval'}
          {isMintStarted && 'Minting...'}
          {!isMintLoading && !isMintStarted && '🎉 Mint Governance Token'}
        </button>)}
        <div className={`card relative w-[300px] h-[400px] bg-slate-100 
          ${userDetails.tokenHolder} && ring-2 ring-yellow-500 ring-opacity-50 ring-offset-3 
          transition duration-300 
          hover:ring-opacity-0`}>
          <div className="imgbox">
            <img src={jrnet} alt="" />
            <img src={jrnet} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 className=' text-black text-lg'>
                <span>{userDetails.name}</span> <br/>
                <span className='font-normal font-mono text-sm'>{shortAddress(address)}</span> <br/>
              </h2>
              <hr className='w-80% h-1 bg-black'/>
              <div className='flex flex-col justify-between'>
                <div className=' pt-4 flex flex-row justify-between w-full'>
                  <span>Level</span> <br/>
                  <span>{userDetails.level} </span>
                </div>
                <div className=' flex flex-row justify-between w-full'>
                  <span>Taken</span> <br/>
                  <span>{userDetails.appreciationsTaken} </span>
                </div>
                <div className=' flex flex-row justify-between w-full'>
                  <span>Given</span> <br/>
                  <span>{userDetails.appreciationsGiven} </span>
                </div>
                <hr className="mt-8 mb-8 w-full h-1 bg-black"/>
                <div className=' flex flex-col justify-between items-center w-full'>
                  <span>Appreciation Balance</span>
                  <span>{precision((userDetails.appreciationBalance)*usd)} </span>
                </div>
                <div className=' flex flex-col justify-between items-center w-full'>
                  <span>Contribution Balance</span>
                  <span>{precision((userDetails.contributionBalance)*usd)} </span>
                </div> 
              </div>
              <button
                type="submit"
                onClick={handleWithdraw}
                className={'bg-slate-100 text-[#000000] w-[240px] border-none font-mono font-md mt-4'}
                style={{ 
                  textDecoration: withdrawalThreshold <= userDetails.appreciationBalance * usd ?  'none' : !isHovered && 'line-through',
                  transition: 'text 0.3s ease'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered ? `Get $ ${withdrawalThreshold}` : 'Withdraw Amount'}
              </button>
            </div>
          </div>
        </div>
      </div>   
      <div className=' tx flex flex-col justify-center items-center space-y-4 '>
        <div className='border-b border-cyan-100 py-2'>
          <input 
            className=" appearance-none bg-transparent border-none w-[300px] text-white leading-tight focus:outline-none" 
            type="text" 
            placeholder="USD" 
            aria-label="Full name" 
            onChange={e => setValue(e.target.value)}
          />
        </div>
        <button 
          type='submit'
          onClick={handleDeposit}
          className=' txbutton text-[#ffe347] w-[300px] font-mono font-md'
        >
          Deposit Amount
        </button>
      </div>
    </>
  )

}

export default Dashboard


const temp = () => {
  return (
    <div className="p-4 sm:ml-64">
      {<div className="p-4">
        <div className="flex items-start justify-start h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <div className=" text-2xl text-gray-400 dark:text-gray-500">
            Name: {userDetails.name} <br/>
            Address: address <br/>
            Level: {userDetails.level} <br/>
            Appreciation Balance: {userDetails.appreciationBalance}  <br/>
            Contribution Balance: {userDetails.contributionBalance.toFixed(2)}  <br/>
            appreciationsTaken: {userDetails.appreciationsTaken} <br/>
            appreciationsGiven: {userDetails.appreciationsGiven}  <br/>
            tokenHolder: {userDetails.tokenHolder} <br/>
            
            {/* contribution amount */}
            <span> Add contribution balance </span>
            <input
              type='text'
              className={style.input}
              placeholder='USD'
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <div
              className={
                value
                  ? style.mintButton
                  : style.inactiveMintButton
              }
              onClick={() => {
                if (value) {
                  handleDeposit()
                }
              }}
            >
              Add
            </div>
            <button
              type='submit'
              onClick={() => {
                handleWithdraw()
              }}
              className={`${style.footerIcon} hover:text-cyan-200 hover:bg-[#0e0f10] px-4`}
            >
              Withdraw 
            </button>
          </div>
        </div>
      </div>}
    </div>
  )
}