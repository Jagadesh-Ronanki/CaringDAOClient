import React, { useEffect, useState } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import '../assets/css/Landing.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useContractRead } from 'wagmi'
import { UserRegistry } from '../components/contracts'
import Button from '../components/Button'
import { client } from '../utils/client'
import {handleFormSubmit} from '../utils/upload'

const Landing = () => {
  const navigate = useNavigate()
  const [ready, setReady] = useState(false)
  const { isConnected, address, onDisconnect } = useAccount()
  const [isRegistered, setIsRegistered] = useState<boolean>(false)

  useAccount({
    onDisconnect() {
      setIsRegistered(false)
    }
  })

  useEffect(() => {
    const fetchUserStatus = async () => {
      const status = await client.readContract({
        ...UserRegistry,
        functionName: 'isRegistered',
        args: [address!]
      })
      setIsRegistered(status)
      setReady(true)
    }
    fetchUserStatus()
  },[isConnected, address])

  console.log(isRegistered)

  const handleGetStartedClick = () => {
    if(ready) { 
      console.log(isConnected, isRegistered)
      if (isConnected && isRegistered) {
        navigate('/user/dashboard')
      } else if (isConnected && !isRegistered){
        navigate('/register')
      }
    }
  }

  /* Styles */
  useEffect(() => {
    const cursor = document.querySelector('.cursor')

    const handleMouseMove = (e) => {
      cursor.style.left = e.pageX + 'px'
      cursor.style.top = e.pageY + 'px'
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div className=' landing flex flex-col justify-center items-center h-screen w-screen bg-black'>
        <div className='brand text-blue-100 font-mono tracking-wide mr-8'>
          by e<span className='text-green-400'>ll</span>even
        </div>
        <div className=' title flex flex-row'>
          <div className=' text-[130px] font-light text-[#FAF3F3]'>
            CARING
          </div>
          <div className= 'text-[60px] my-20 font-light text-[#354259]'>
            DAO
          </div>
        </div>
        {!isConnected ? (<div className="text-[#FAF3F3">
          <ConnectButton />
        </div>) : ( 
          <button
            className=" button cursor-none h-10 px-4 font-light font-mono rounded-md bg-black text-[#F05945] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}"
            type="submit"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        )}
        <div className={'cursor'}></div>
      </div>
    </>
  )
}

export default Landing
