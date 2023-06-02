import React from 'react'
import { GiEarthAmerica } from 'react-icons/gi'

const style = {
  wrapper: `h-[25rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col`,
  inputFieldsContainer: `flex-1 p-[60px] pt-[80px] text-lg`,
  label: `font-bold text-grey-100`,
  item: `flex flex-row justify-between p-2`,
  lower: `flex justify-between items-center`,
  visibility: `flex items-center text-[#1d9bf0] text-sm font-bold`,
  visibilityText: `ml-2`,
  mintButton: `bg-white text-black text-center font-bold px-3 py-2 w-[100%] rounded-full hover:bg-[#8899a6] cursor-pointer`,
}

const ConfirmState = ({handleTransact}) => {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.inputFieldsContainer}>
          <div className={style.item}>
            <div className={style.label}>Price</div>
            <div>1 ETH = 1877.89 USD</div>
          </div>
          <div className={style.item}>
            <div className={style.label}>Amount</div>
            <div>0.00898 ETH</div>
          </div>
        </div>
        <div className={style.lower}>
          <div
            className={style.mintButton}
            onClick={() => {
                handleTransact()
            }}
          >
            Appreciate
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmState