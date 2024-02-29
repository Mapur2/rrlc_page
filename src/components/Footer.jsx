import React from 'react'

function Footer() {
  return (
    <div className=' bg-slate-900 flex items-center justify-evenly h-72 text-white align-middle'>
      <div className=' flex flex-col '>
        <h1>CATEGORIES</h1>
        <ul className=' listFooter'>
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic Automation</li>
            <li> </li>
        </ul>
      </div>
      <div>
      <h1>CONTACT</h1>
        <ul className=' listFooter'>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of service</li>
            <li>Categories</li>
            <li>About</li>
        </ul>
      </div>
      <div>
      <h1>United States v</h1>
      </div>
    </div>
  )
}

export default Footer
