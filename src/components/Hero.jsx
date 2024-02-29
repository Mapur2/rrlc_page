import React from 'react'
import Cards from './Cards'
import Card2 from './Card2'

function Hero() {

  const builds = [
    {

      name: "Builder 1",
      rating: 9.8,
      ratingText: "Exceptional",
      choice: "🏆Best Choice",
      num: 1,
      head: "WixPro 72-Inch Responsive Website Builder- ",
      intro: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
      , highlight: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
    },
    {
      name: "Builder",
      rating: 9.5,
      ratingText: "Excellent",
      choice: "💎Best Value",
      num: 2,
      head: "SiteCraft 68-Inch Ultimate Web Design Studio",
      highlight: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
      , intro: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
    }
    ,
    {
      name: "Builder 1",
      rating: 9.3,
      ratingText: "Exceptional",
      num: 3,
      head: "WixPro 72-Inch Responsive Website Builder- ",
      intro: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
      , highlight: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
    }
    , {
      name: "CDK",
      rating: 9.1,
      ratingText: "Very Good",
      discount: "26%",
      num: 4,
      head: "CDK Resposive Builder:",
      intro: "An extensive library of widgets and apps, and detailed step-by-step guides",
      highlight: "9.9 Building Responsive   8.9 Cool   8.9 Docs Why we love it? ✔️Documentation ✔️Easy Use ✔️Out of box"
    }

  ]

  return (
    <div className=' mx-auto px-52 m-6 widthHero'>
      <h1 className='  text-5xl'>Best Website builders in the US</h1>
      <hr className=' my-4 h-1 bg-slate-300' />
      <p className='flex flex-wrap'><span>✅ Last Updated - February 22, 2020
      </span> <span className=' rounded-lg'> ℹ️ Advertising Disclosure</span> <span className=' ml-24 pl-24'>Top Relevant v</span></p>
      <hr className=' my-4 h-1 bg-slate-300' />
      <ul className=' hero-ul flex flex-wrap'>
        <li>Tools</li>
        <li>AWS Builder</li>
        <li>Start Build</li>
        <li>Build Supplies</li>
        <li>Tooling</li>
        <li>Blue Hosting</li>
      </ul>
      <ul className=' hero-ul1 flex flex-wrap'>
        <li>Home > </li>
        <li>Hosting for all ></li>
        <li>Hosting > </li>
        <li>Hosting6 > </li>
        <li>Hosting5</li>
      </ul>
      <div>
        {builds.map(data => (<Cards num={data.num} choice={data.choice} head={data.head} intro={data.intro}
          highlight={data.highlight} rating={data.rating} discount={data.discount} ratingText={data.ratingText}
          name={data.name} />))}
      </div>
      <h1 className=' m-5 text-4xl'>Related deals you might like for</h1>
      <div className=' flex flex-wrap'>
        <Card2 />
        <Card2 />
        <Card2 />
      </div>

      <div className=' flex justify-between items-center'>
        <h1 className=' m-5 text-4xl'>Sign up and get exclusive special deals</h1>
        <button className=' bg-blue-600 text-white text-center w-36 my-9 h-10 rounded-e-lg'> Sign Up</button>
      </div>
    </div>
  )
}

export default Hero
