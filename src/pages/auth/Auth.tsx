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
import { Web3Storage } from 'web3.storage'
import jrnet from '../../assets/images/Jrnet.png'

const Auth = () => {
  const navigate = useNavigate()
  const [CID, setCID] = useState('')
  const { isConnected, address } = useAccount()
  const [name, setName] = useState('')
  const [file, setFile] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [imageURI, setImageURI] = useState('')
  const [outputText, setOutputText] = useState('')
  const [linkUrl, setLinkUrl] = useState('')
  const [registerClicked, setRegisterClicked] = useState(false)
  const [store, setStore] = useState(false)

  const { config: registerConfig, error: registerError} = usePrepareContractWrite({
    ...UserRegistry,
    enabled: name.toString().length > 0 && imageURI.toString().length > 0,
    functionName: 'registerUser', 
    args: [name, imageURI],
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

  const uploadFile = async () => {
    setIsUploading(true)
    const fileToUpload = new File([file], address.toString(), {
        type: file.type,
    })
    const cid = await client.put([fileToUpload], {
        name: file.name,
    })
    setImageURI(
        `https://${cid}.ipfs.w3s.link/${address.toString()}`
    )
    setIsUploading(false)
    setStore(false)
  }
  
  const registerHandler = async () => {
    setStore(true)
    console.log('entered handleRegister')
    await uploadFile()
    setRegisterClicked(true)
  }
  
  useEffect(() => {
    if (!isUploading && register && registerStatus !== 'loading') {
      console.log('Register call')
      register()
    }
  }, [registerClicked])

  const client = new Web3Storage({ token: import.meta.env.VITE_WEB3_STORAGE_TOKEN })
  const handleFileChange = (e) => {
    e.preventDefault()
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  useEffect(() => {
    console.log('ImageURI: ',imageURI)
  }, [imageURI])

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

    const navItems = document.querySelectorAll('.top-card')
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
      cursor.style.transform = 'scale(4)' // Adjust the scale factor as desired
      cursor.style.background = '#F05945'
    }

    const handleMouseLeave = (e) => {
      const cursor = document.querySelector('.cursor')
      cursor.style.transform = 'scale(1)'
      cursor.style.background = '#F3F3F3'
    }

    const navItems = document.querySelectorAll('.register')
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
    <div className='landing bg-black h-screen w-screen flex flex-col justify-between'> 
      <Header />
      <div className="flex flex-col justify-center items-center w-screen h-screen text-white">
        <div className='top-card'>
        <div className={'flex flex-row relative w-[300px] h-[400px]'}>
          <div className="w-full h-full border-[1px] border-dashed border-[#3a3b3b]">
            {file ? (
              <img src={URL.createObjectURL(file)} alt="" className='top-0 left-0 object-cover w-full h-full' />
            ) : (
              <label htmlFor="imageInput" className='top-0 left-0 w-full h-full flex items-center justify-center'>
                <span className="text-6xl text-gray-300">+</span>
              </label>
            )}
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
        </div> 
        <div className="mt-10 ml-0 bottom-card ">
          <div className="flex flex-col justify-center items-center w-[300px]">
            <input 
              className="bg-black outline-1 w-full text-white placeholder-[#7f7f80] border-solid border-[1px] border-[#3a3b3b]"
              type="text"
              aria-label="Username"
              placeholder="username"
              onChange={e => setName(e.target.value)}
              required="required"
            />
            <button
                className={` register mt-10 font-light font-mono rounded-md bg-black text-[#F05945] ${registerStatus === 'loading' || store && 'animate-pulse'}`}
                type="submit"
                onClick={registerHandler}
              >
                {registerStatus === 'loading' && 'Registering'}
                {registerStatus !== 'loading' && store && 'uploading...'}
                {registerStatus !== 'loading' && !store && 'Register'}
            </button>
          </div>
        </div>
      </div>
      <div className={'cursor'}></div>
    </div>
  )
 
}

export default Auth