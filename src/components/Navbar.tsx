import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  useEffect(() => {
    const handleMouseEnter = (e) => {
      const cursor = document.querySelector('.cursor')
      cursor.style.transform = 'scale(5)' // Adjust the scale factor as desired
      cursor.style.background = 'black'
      cursor.style.boxShadow = '0 0 0 100vh #FAF3F3'
    }

    const handleMouseLeave = (e) => {
      const cursor = document.querySelector('.cursor')
      cursor.style.transform = 'scale(1)'
      cursor.style.background = '#FAF3F3'
      cursor.style.boxShadow = 'none'
    }

    const navItems = document.querySelectorAll('.nav')
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
    <div className='text-white h-auto flex flex-row justify-center space-x-32 pt-12'>
      <NavLink to='/user/dashboard' className='nav'>
        Dashboard
      </NavLink>
      <NavLink to='/user/feed' className='nav'>
        Feed
      </NavLink>
      <NavLink to='/user/governance' className='nav'>
        Governance
      </NavLink>
    </div>
  )
}
