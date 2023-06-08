import React, {useState, useEffect} from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import '../assets/css/Landing.css'

const Header = (showBalance, chainStatus) => {
  const [chain, setChain] = useState('none')
  useEffect(() => {
    if(!chainStatus){
      setChain('none')
    }
  }, [chainStatus])

  return (
    
    <div className='header flex flex-row justify-between mx-8'>
      <div className='title flex flex-row'>
        <div className='text-[30px] font-light text-[#FAF3F3]'>
          CARING
        </div>
        <div className='text-[20px] my-3 pl-1 font-light text-[#354259]'>
          DAO
        </div>
      </div>
      <ConnectButton showBalance={showBalance.showBalance} chainStatus={chain}/>
    </div>
  )
}

export default Header