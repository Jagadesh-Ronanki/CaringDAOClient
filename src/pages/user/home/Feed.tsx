import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { format } from 'timeago.js'
import Modal from 'react-modal'
import { customStyles } from '../../../assets/css/customStyles'
import Postbox from './Postbox'
import Post from './Post'

const Feed = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-9">
        <div className="w-full h-48 rounded bg-gray-100 inset-0 p-5">
          <Postbox />
        </div>
      </div>
      <div className="p-9">
        <Post/>
      </div>
    </div>
  )
}

export default Feed