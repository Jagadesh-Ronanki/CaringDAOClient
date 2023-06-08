/* import React from 'react'
import Sidebar from './Siderbar'
import Feed from './Feed'

const Home = () => {
  return (
    <div className='h-screen w-screen'>
      <Sidebar/>
      <Feed/>
    </div>
  )
}

export default Home
 */
import React, { useState, useEffect } from 'react'
import Sidebar, { SidebarToggleButton } from './Siderbar'
import { Outlet } from 'react-router-dom'
import Header from '../../../components/Header'
import {Navbar} from '../../../components/Navbar'
import '../../../assets/css/Landing.css'


const Home: React.FC = () => {
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
  
  const [chainStatus, setChainStatus] = useState('none')
  return (
    <>
      <div className="landing bg-black min-h-screen max-h-full w-screen overflow-y-auto">
        <div className="z-10">
          <Header showBalance={false} chainStatus={chainStatus} />
          {<Navbar />}
        </div>
        <div className="relative z-0">
          <div
            style={{
              position: 'sticky',
              top: '0',
              zIndex: '-1',
              background: 'inherit',
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
      <div className={'cursor'}></div>
    </>
  )
}

export default Home