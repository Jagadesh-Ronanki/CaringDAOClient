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
import React, { useState } from 'react';
import Sidebar, { SidebarToggleButton } from './Siderbar';
import { Outlet } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className='h-screen w-screen'>
      <Sidebar/>
      <SidebarToggleButton/>
      <Outlet/>
    </div>
  );
};

export default Home;