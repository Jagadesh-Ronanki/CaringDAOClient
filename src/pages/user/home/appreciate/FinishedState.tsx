// @ts-nocheck
import React from 'react'
import appreciated from '../../../../assets/images/appreciated.png'

const style = {
  wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col items-center justify-center`,
  title: `font-semibold text-xl mb-6`,
  closeButton: `mt-6 bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
}

const FinishedState = ({setModalOpen}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>We appreciate it 🤍</div>
      <img src={appreciated} alt='appreciated' height={150} width={150} />
      <div onClick={() => { 
        setModalOpen(false)
      }} className={style.closeButton}>
        Close
      </div>
    </div>
  )
}

export default FinishedState