import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { format } from 'timeago.js'
import Modal from 'react-modal'
import { customStyles } from '../../../assets/css/customStyles'
import Postbox from './Postbox'
import Post from './Post'



const Feed = () => {
  
  return (
    <div className="p-10 h-full">
      <div className="sticky top-0 w-full h-48 rounded bg-[#121212] inset-0 p-5">
        <Postbox />
      </div>
      <div className="mt-20">
        <Post/>
      </div>
    </div>
  )
}

export default Feed