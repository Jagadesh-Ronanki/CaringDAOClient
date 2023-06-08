// @ts-nocheck comment
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { UserRegistry } from '../../components/contracts'
import Button from '../../components/Button'
import Header from '../../components/Header'
import '../../assets/css/Landing.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import {PuffLoader} from 'react-spinners'
import { Upload } from '../Upload'

const Auth = () => {
  const navigate = useNavigate()
  const [CID, setCID] = useState('')
  const { isConnected } = useAccount()
  const [name, setName] = useState('')

  const { config: registerConfig, error: registerError} = usePrepareContractWrite({
    ...UserRegistry,
    enabled: name.toString().length > 0 && CID.toString().length > 0,
    functionName: 'registerUser', 
    args: [name, CID],
  })

  const { data: registerTxData, write: register, status: registerStatus } = useContractWrite({
    ...registerConfig,
    onSuccess: ({ hash }) => {
      console.log('register hash: ', hash)
    },
    onError: ({ message }) => {
      console.log('onError message', message)
    },
  })

  useWaitForTransaction({
    hash: registerTxData?.hash,
    onError: error => {
      console.log('register: is err', error)
    },
    onSuccess: data => {
      if (data) {
        console.log('register: update info...')
        navigate('/user/dashboard')
      }
    },
  })

  const registerHandler = () => {
    if(register && registerStatus !== 'loading')
      register()
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
    <div className='landing bg-black h-screen w-screen flex flex-col justify-between'>
      {/* Upload pic */}
      <Upload setCID={setCID}/>
      {/* Header */}
      <Header />
      {/* body */}
      <div className='flex flex-row justify-center items-center flex-grow'>
        <input
          className="bg-black outline-1 outline-[#47536e] text-white placeholder-[#47536e]"
          type="text"
          aria-label="Username"
          placeholder="username"
          onChange={e => setName(e.target.value)}
          required="required"
        />
        {registerStatus == 'loading' ? (
          <PuffLoader
            className={' m-10'}
            color="#e13453"
            size={5}
          />
        ) : (
          <button
            className=" register ml-8 h-10 px-4 font-light font-mono rounded-md bg-black text-[#F05945] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}"
            type="submit"
            onClick={registerHandler}
          >
            Register
          </button>    
        )}
        <div className='cursor'></div>
      </div>
    </div>
  )
}

export default Auth