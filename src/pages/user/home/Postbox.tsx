// @ts-nocheck
import React, { useState, useEffect } from 'react'
import user from '../../../assets/images/user.png'
import { useContractWrite, useAccount, useWaitForTransaction } from 'wagmi'
import { UserRegistry, PostRegistry } from '../../../components/contracts'
import {useNavigate} from 'react-router-dom'
import { client } from '../../../utils/client'

const style = {
  wrapper: 'px-4 flex flex-row',
  tweetBoxLeft: 'p-4 flex flex-col items-center',
  tweetBoxRight: 'flex-1',
  profileImage: 'height-12 w-12 rounded-full',
  inputField: 'w-full h-full outline-none bg-transparent text-lg text-[#FAF3F3] font-mono cursor-none',
  formLowerContainer: 'flex pt-2',
  iconsContainer: 'text-[#1d9bf0] flex flex-1 items-center',
  icon: 'mr-2',
  submitGeneral: 'px-6 py-2 rounded-md font-bold',
  inactiveSubmit: 'bg-[#95999e] text-black',
  activeSubmit: 'bg-[#FAF3F3] text-black',
  name: ' font-md'
}

const Postbox = () => {
  const [postMessage, setPostMessage] = useState('')
  const navigate = useNavigate()
  const [creator, setCreator] = useState('')
  const {address} = useAccount()

  const { data: postTx, write: Post, isLoading: LPost, status: postStatus} = useContractWrite({
    ...PostRegistry,
    functionName: 'createPost',
    args: [postMessage],
  })

  const submitPost = (e) => {
    e.preventDefault()
    if (Post && postStatus !== 'loading'){
      Post()
    }
    setPostMessage('')
  }

  const {
    data: txData,
    isSuccess: txSuccess,
    error: txError,
  } = useWaitForTransaction({
    hash: postTx?.hash,
    onError: error => {
      console.log('Post error: ', error)
      (<Error404 />)
    },
    onSuccess: data => {
      if (data) {
        navigate('/user/feed')
        console.log('Posted: ', data)
      }
    }
  })

  useEffect(() => {
    const fetchUser = async () => {
      const creatorDetails = await client.readContract({
        ...UserRegistry,
        functionName: 'getUserDetails',
        args: [address],
      })
      setCreator(creatorDetails)
    }
    fetchUser()
  }, [])

  useEffect(() => {
    if (txSuccess) {
      /* window.location.reload() */
      console.log('Posted')
    }
  }, [txSuccess, navigate])

  useEffect(() => {
    const handleMouseEnter = (e) => {
      const cursor = document.querySelector('.cursor')
      cursor.style.transform = 'scale(5)' // Adjust the scale factor as desired
    }
  
    const handleMouseLeave = (e) => {
      const cursor = document.querySelector('.cursor')
      cursor.style.transform = 'scale(1)'
    }
  
    const navItems = document.querySelectorAll('.post')
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
    <div className={style.wrapper}>
      <div className={style.tweetBoxLeft}>
        <img
          src={creator.profileCID}
          className={
            style.profileImage
          }
          style={{
            aspectRatio: '1/1', // Maintain a square aspect ratio
            objectFit: 'cover', // Crop the image to fit within the circular shape
            objectPosition: 'center', // Center the image within the circular shape
          }}
        />
        <span className={`${style.name} text-cyan-50`}>{creator.name}</span>
      </div>
      <div className={style.tweetBoxRight}>
        <form>
          <textarea
            onChange={e => setPostMessage(e.target.value)}
            value={postMessage}
            placeholder="What's happening?"
            className={style.inputField}
          />
          <div className={`post ${style.formLowerContainer}`}>
            {postStatus === 'loading' ? (
              <button
                type='submit'
                disabled={!postMessage}
                className={`${style.submitGeneral} ${
                  postMessage && style.inactiveSubmit
                } animate-pulse`}
              >
                Posting
              </button>
            ) : postStatus === 'success' && !txSuccess ? (<button
              type='submit'
              onClick={event => submitPost(event)}
              disabled={!postMessage}
              className={`${style.submitGeneral} ${
                postMessage && style.inactiveSubmit
              }`}
            >
              Posting
            </button>) : (
              <button
                type='submit'
                onClick={event => submitPost(event)}
                disabled={!postMessage}
                className={`${style.submitGeneral} ${
                  postMessage ? style.activeSubmit : style.inactiveSubmit
                }`}
              >
                Post
              </button>
            )
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default Postbox