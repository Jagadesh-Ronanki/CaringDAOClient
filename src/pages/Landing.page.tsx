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
        <div className=' title flex flex-row'>
          <div className=' text-[130px] font-light text-[#FAF3F3]'>
            CARING
          </div>
          <div className= 'text-[60px] my-20 font-light text-[#354259]'>
            DAO
          </div>
        </div>
        {!isConnected ? (<div>
          <ConnectButton />
        </div>) : ( 
          <button
            className=" button h-10 px-4 font-light font-mono rounded-md bg-black text-[#F05945] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}"
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

const temp = () => {
  return (
    <div className="bg-white h-screen w-screen overflow-hidden">
      <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
        {/* image holder */}
        <button
          className="h-10 px-4 font-light font-mono rounded-md bg-black text-[#F05945] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}"
          type="submit"
          onClick={handleAuthClick}
          disabled={authenticate}
        >
          Authenticate
        </button>
        <div>
          <img src={logo} alt="logo" className="scale-[150%] pt-[80px] md:scale-[250%]" />
        </div>
        <div>
          <ConnectButton />
        </div>
        <div className="m-10">
          {isConnected && isRegistered ? (
            <div>
              <NavLink to="/user">
                <Button label={'Dashboard'} width="14rem" func={(() => {})}/>
              </NavLink>
            </div>
          ) : (
            <div>
              {isConnected && !authenticate && (
                <Button label={'Authenticate'} width="14rem" func={handleAuthClick} disabled={authenticate}/>
              )}
            </div>
          )}
          <Outlet />
        </div>
      </div>
    </div>
  )
}