import styled from 'styled-components'
import * as Scroll from 'react-scroll'
import { Link as ReactLink, NavLink as ReactNavLink } from 'react-router-dom'

export const Wrapper = styled.section.attrs({
  className: `
  relative
  mb-auto
  text-gray-600`,
})``

export const InnerPageWrapper = styled.section.attrs({
  className: `
  flex 
  flex-col 
  min-h-screen 
  justify-between
  bg-[#f9fafc] 
  text-gray-600`,
})``

export const Btn = styled.button.attrs({
  className: `
    py-4
    px-6
    sm:px-10
    inline-flex
    items-center
    justify-center
    bg-white
    font-medium
    rounded-lg
    transition
    duration-300
    ease-in-out
    text-center text-dark text-base
    hover:text-primary hover:shadow-lg`
})``

export const BtnSmall = styled.button.attrs({
  className: `
    px-3.5
    h-10
    rounded-xl
    flex
    items-center
    justify-center
    bg-white
    whitespace-nowrap
    font-medium
    transition
    duration-300
    ease-in-out
    text-center 
    text-gray-800
    hover:text-primary 
    hover:bg-gray-100
    hover:shadow-lg`
})``

export const Container = styled.div.attrs({
  className: `
    mx-auto
    container`,
})``

export const Link = styled(ReactLink).attrs(() => ({
  className: `
    transition
    ease-in-out
    duration-200
    hover:underline
    `,
}))``

export const NavLink = styled(ReactNavLink).attrs(() => ({
  className: `
    ud-menu-scroll
    text-base 
    text-dark
    flex
    py-2
    px-6
    cursor-pointer
    lg:mr-0 lg:hover:opacity-70 lg:py-6 lg:inline-flex 
    `,
}))``

export const ScrollLink = styled(Scroll.Link).attrs(() => ({
  className: `
    ud-menu-scroll
    text-base 
    text-dark
    flex
    py-2
    px-6
    lg:mr-0
    cursor-pointer
    lg:py-6 lg:inline-flex lg:hover:opacity-70
    `,
}))``

export const InnerBlock = styled.section.attrs({
  className: `
  w-full 
  relative 
  flex 
  break-words 
  bg-white 
  rounded-xl 
  shadow-gray-300/50 
  shadow-lg 
  px-8 
  py-6`,
})``

export const InnerSmallBlock = styled.section.attrs({
  className: `
  w-full 
  relative 
  flex 
  break-words 
  bg-white 
  rounded-xl 
  shadow-gray-300/50 
  shadow-md 
  p-4`,
})``

export const InnerTransparentBlock = styled.section.attrs({
  className: `
  w-full 
  relative 
  flex 
  flex-col 
  break-words 
  mt-4`,
})``

InnerBlock.Header = styled.div.attrs({
  className: `
  text-xl 
  font-semibold 
  mb-2
  text-gray-800`,
})``

InnerSmallBlock.Header = styled.div.attrs({
  className: `
  text-base
  font-medium
  mb-2
  text-gray-600`,
})``


export const Badge = styled.div.attrs({
  className: `
  text-sm 
  bg-gray-100 
  text-gray-500 
  rounded 
  px-2 
  py-0.5 
  ml-2`,
})``

export const TableTh = styled.td.attrs({
  className: `
  border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-2 text-slate-400 dark:text-slate-200 text-left
  `
})``
export const TableTd = styled.td.attrs({
  className: `
  border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400
  `
})``