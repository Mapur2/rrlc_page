import React from 'react'

function Header() {
  return (
    <>
      <header className=' flex justify-center bg-slate-800 text-white h-16 text-xl flex-wrap '>
        <div className=' m-2  mx-5 my-auto'>
            <input className=' rounded-md h-8 text-black' type="search" placeholder='🔍'/>
        </div>
        <a href='#' className=' m-2 mx-5 my-auto'>Categories</a>
        <a href='#' className=' m-2 mx-5 my-auto'>Website Builders</a>
        <a href="#" className=' m-2 mx-5 my-auto'>Today's Deals</a>
      </header>
    </>
  )
}

export default Header
