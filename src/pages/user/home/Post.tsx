import React, { useState, useEffect } from 'react'
import { format } from 'timeago.js'
import { customStyles } from '../../../assets/css/customStyles'
import Modal from 'react-modal'
import AppreciateHandler from './appreciate/AppreciateHandler'
import { paginatedIndexesConfig, useContractInfiniteReads, useContractRead } from 'wagmi'
import { PostRegistry } from '../../../components/contracts'
import { stringify } from '../../../utils/stringify';


const style = {
  wrapper: `flex p-3 border-b border-[#38444d]`,
  profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
  postMain: `flex-1 px-4`,
  headerDetails: `flex items-center`,
  name: `font-bold mr-1 text-blue-200`,
  verified: `text-[0.8rem]`,
  handleAndTimeAgo: `text-[#8899a6] ml-1`,
  tweet: `my-2 text-blue-100`,
  image: `rounded-3xl`,
  footer: `flex flex-col md:flex-row justify-between mt-4 text-[#8899a6]`,
  footerIcon: `rounded-lg text-lg p-2 md:mr-8 lg:mr-16`,
  footerStats: `flex flex-row justify-center items-center`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  activeSubmit: `bg-[#F1F6F9] text-black hover:bg-[#9BA4B5]`,
}

const PostOutline = ({id, timestamp, content} : {id: string, timestamp: string, content:string}) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="max-h-124 rounded bg-gray-50 dark:bg-black inset-0 p-5">
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
      <div className={style.footer}>
        <button
          type='submit'
          onClick={() => {
            setModalOpen(true)
          }}
          className={`${style.footerIcon} hover:text-[#1d9bf0] hover:bg-[#1e364a] px-4`}
        >
          Appreciate 
        </button>
        <div className={style.footerStats}>
          <div
            className={`${style.footerIcon} hover:text-[#f91c4f] hover:bg-[#39243c]`}
          >
            Lv•1 {/* userlevel */}
          </div>
          <div
            className={`${style.footerIcon} hover:text-[#03ba7c] hover:bg-[#1b393b]`}
          >
            1/100 {/* curruent/threshold */}
          </div>
          <div
            className={`${style.footerIcon} hover:text-[#1d9bf0] hover:bg-[#1e364a]`}
          >
            100.3 {/* contributions amt */}
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
        <AppreciateHandler postId={1} setModalOpen={setModalOpen}/>
      </Modal>
    </div>
  )
}

const Post = () => {
  const [postCount, setPostCount] = useState(0)

  const { data: GPostCount, isLoading: LPostCount, isSuccess: SPostCount, isError: EPostCount } = useContractRead({
    ...PostRegistry,
    functionName: 'postCount',
    watch: true,
  })

  const { data: GPosts, isLoading: LPosts, isSuccess: SPosts, isError: EPosts, fetchNextPage } = useContractInfiniteReads({
    cacheKey: 'postsCache',
    ...paginatedIndexesConfig(
      (index: number) => [
        {
          ...PostRegistry,
          functionName: 'getPost',
          args: [BigInt(index)] as const,
        },
      ],
      {start: 0, perPage: 10, direction: 'increment'},
    ),
  })

  const fetchPosts = () => {
    (SPostCount && (
      GPosts
    ))
  }

  useEffect(() => {
    if(GPostCount){
      // fetchPosts()
      setPostCount(Number(GPostCount))
    }
  }, [GPostCount])

  return (
    <div className="bg-black text-white">
      {LPosts && <div>Loading</div>}
      {SPosts && (
        <div>
          Hi
        </div>
      )}
      {EPosts && <div>Error</div>}
    </div>
  )
}

export default Post