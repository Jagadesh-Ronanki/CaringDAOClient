// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { format } from 'timeago.js'
import { customStyles } from '../../../assets/css/customStyles'
import Modal from 'react-modal'
import AppreciateHandler from './appreciate/AppreciateHandler'
import { useWaitForTransaction, useWalletClient, useContractRead } from 'wagmi'
import { getContract } from 'wagmi/actions'
import { UserRegistry, PostRegistry, PriceConversion, Handler } from '../../../components/contracts'
import { stringify } from '../../../utils/stringify'
import Error404 from '../../Error404.page'
import { getPublicClient } from '@wagmi/core'
import { client } from '../../../utils/client'
import { inUsd } from '../../../utils/inUsd'
import { precision } from '../../../utils/precision'
 
const style = {
  wrapper: 'flex p-3 border-b border-[#38444d]',
  profileImage: 'rounded-full h-[40px] w-[40px] object-cover',
  postMain: 'flex-1 px-4',
  headerDetails: 'flex items-center',
  name: 'font-bold mr-1 text-blue-200',
  verified: 'text-[0.8rem]',
  handleAndTimeAgo: 'text-[#8899a6] ml-1',
  tweet: 'my-2 text-blue-100',
  image: 'rounded-3xl',
  footer: 'flex flex-col md:flex-row justify-between mt-4 text-[#8899a6]',
  footerIcon: 'rounded-lg text-lg p-2 md:mr-8 lg:mr-16',
  footerStats: 'flex flex-row justify-center items-center',
  submitGeneral: 'px-6 py-2 rounded-3xl font-bold',
  activeSubmit: 'bg-[#F1F6F9] text-black hover:bg-[#9BA4B5]',
}

const PostOutline = ({postId, id, timestamp, content, level, givenAmt, withdrawalThreshold, appreciationBal}) => {
  const [modalOpen, setModalOpen] = useState(false)


  /* styles */
  useEffect(() => {
    const handleMouseEnter = (e) => {
      const cursor = document.querySelector('.cursor')
      cursor.style.transform = 'scale(0.1)' // Adjust the scale factor as desired
    }
  
    const handleMouseLeave = (e) => {
      const cursor = document.querySelector('.cursor')
      cursor.style.transform = 'scale(1)'
    }
  
    const navItems = document.querySelectorAll('.footer')
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
    <div className="max-full rounded bg-transparent border-b-2 bg-opacity-70 border-[#121212] inset-0 p-5 mb-10">
      <div>
        <span className={style.headerDetails}>
          <span className={style.name}>{id}</span> {/*  name */}
          <span className={style.handleAndTimeAgo}> {/* timestamp */}
            • {format(new Date(timestamp).getTime())}
          </span>
        </span>
        <div className={style.tweet}> {/* tweet */} 
          {content}
        </div>
      </div>
      <div className={` cursor-none ${style.footer}`}>
        <button
          type='submit'
          onClick={() => {
            setModalOpen(true)
          }}
          className={`footer cursor-none ${style.footerIcon} hover:text-[#1d9bf0] hover:bg-[#1e364a] px-4`}
        >
          Appreciate 
        </button>
        <div className={style.footerStats}>
          <div
            className={`footer ${style.footerIcon} hover:text-[#f91c4f] hover:bg-[#39243c]`}
          >
            Lv•{level} {/* userlevel */}
          </div>
          <div
            className={`footer ${style.footerIcon} hover:text-[#03ba7c] hover:bg-[#1b393b]`}
          >
            {precision(appreciationBal)}/{withdrawalThreshold} {/* curruent/threshold */}
          </div>
          <div
            className={`footer ${style.footerIcon} hover:text-[#1d9bf0] hover:bg-[#1e364a]`}
          >
            {givenAmt.toFixed(2)} {/* contributions amt */}
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onRequestClose={() => {
          setModalOpen(false)
        }}
        style={customStyles}
        ariaHideApp={false}
      >
        <AppreciateHandler postId={postId} setModalOpen={setModalOpen}/>
      </Modal>
    </div>
  )
}

const Post = () => {
  const [cnt, setCnt] = useState(0)
  const [posts, setPosts] = useState([])
  const [lPrice, setLPrice] = useState(0)

  useEffect(() => {
    const fetchPosts = async () => {
      const postCount = await client.readContract({
        ...PostRegistry,
        functionName: 'postCount',
        watch: true,
      })
  
      const postPromises = []
      for (let i = postCount; i > 0; i--) {
        const postPromise = client.readContract({
          ...PostRegistry,
          functionName: 'getPost',
          args: [i],
        })
        postPromises.push(postPromise)
      }
  
      const fetchedPosts = await Promise.all(postPromises)
  
      const creatorPromises = fetchedPosts.map((post) =>
        client.readContract({
          ...UserRegistry,
          functionName: 'getUserDetails',
          args: [post.creator],
        })
      )
  
      const creatorDetails = await Promise.all(creatorPromises)
  
      const withdrawalThresholdPromises = creatorDetails.map((creator) =>
        client.readContract({
          ...Handler,
          functionName: 'calculateWithdrawalThreshold',
          args: [creator.level],
        })
      )
  
      const withdrawalThresholds = await Promise.all(withdrawalThresholdPromises)
  
      const postsWithCreator = fetchedPosts.map((post, index) => ({
        ...post,
        creatorDetails: creatorDetails[index],
        withdrawalThreshold: withdrawalThresholds[index],
      }))
  
      const latestPrice = await client.readContract({
        ...PriceConversion,
        functionName: 'getLatestPrice',
        watch: true,
      })
  
      setCnt(postCount)
      setPosts(postsWithCreator)
      setLPrice(latestPrice)

      console.log(posts)
    }
  
    fetchPosts()
  }, [])
  

  return (
    <>
      {/* PostCount: {cnt.toString()} <br /> */}
      {posts.length > 0 ? (
        posts.map((post) => 
          <PostOutline
            key={post.id}
            postId={post.id}
            id={post.creatorDetails.name}
            timestamp={post.timeStamp}
            content={post.content}
            level={Number(post.creatorDetails.level)}
            givenAmt={inUsd(post.creatorDetails.givenAmt, lPrice)}
            withdrawalThreshold={Number(post.withdrawalThreshold)}
            appreciationBal={inUsd(post.creatorDetails.appreciationBalance, lPrice)}
          />
        )
      ) : (
        <div>No posts found.</div>
      )}
    </>
  )
}

export default Post