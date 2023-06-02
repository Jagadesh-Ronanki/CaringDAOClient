// @ts-nocheck
import React, { useContext, useEffect } from 'react'
import { Dispatch, SetStateAction, useState } from 'react'
import { GiEarthAmerica } from 'react-icons/gi'

const style = {
  wrapper: `h-[25rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col`,
  inputFieldsContainer: `flex-1`,
  inputContainer: `mb-4`,
  fileInput: `hidden`,
  dropdown: `bg-transparent border-2 border-[#404551] outline-none p-4 pr-8 text-xl w-full`,
  input: `bg-transparent border-2 border-[#404551] outline-none p-4 text-xl w-full`,
  customInput: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  fileSelected: `bg-[#2b6127] text-white px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  lower: `flex justify-between items-center`,
  visibility: `flex items-center text-[#1d9bf0] text-sm font-bold`,
  visibilityText: `ml-2`,
  mintButton: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  inactiveMintButton: `text-black px-3 py-1 rounded-full bg-[#8899a6]`,
  label: `font-bold text-grey pb-4`
}

const InitialState = ({postId, value, setValue, handleConfirm, setModalOpen}) => {
  const [latestPrice, setLatestPrice] = useState(84)
  
  return (
    <div className={style.wrapper}>
      <div className={style.inputFieldsContainer}>
        <div className={style.inputContainer}>
          <div className={style.label}>Currency</div>
          <select className={style.dropdown}>
            <option name="USD/ETH"> USD/ETH</option>
          </select>
          <div className={`${style.label} font-medium text-[#8892aa] pt-2`}>{`1 Ether = ${latestPrice} USD`}</div>
        </div>
        <div className={style.inputContainer}>
          <input
            type='text'
            className={style.input}
            placeholder='USD'
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>
      </div>
      <div className={style.lower}>
        <div className={style.visibility}>
          <GiEarthAmerica />
          <span className={style.visibilityText}>Everyone can see this</span>
        </div>
        <div
          className={
            value
              ? style.mintButton
              : style.inactiveMintButton
          }
          onClick={() => {
            if (value) {
              handleConfirm()
            }
          }}
        >
          Confirm
        </div>
      </div>
    </div>
  )
}

export default InitialState