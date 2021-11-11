import React from 'react'
import Image from 'next/image'
import logo from '/public/images/logo.webp'
import logo1 from '/public/images/1.jpg'
import logo2 from '/public/images/2.jpg'
import logo3 from '/public/images/3.jpg'
import logo4 from '/public/images/4.jpg'
import logo5 from '/public/images/5.jpg'
import logo6 from '/public/images/6.jpg'
import videobg from '/public/images/video-bg-image.jpg'

function Index() {
  return (
    <>
      <header className="header relative lg:overflow-hidden">
        <div className="absolute inset-0 z-negative lg:opacity-100 opacity-50">
          <video src="/public/images/video.mp4" autoPlay muted loop className="object-cover w-full h-full"></video>
        </div>

        <nav className="md:p-3 py-2 px-3 z-10">
          <div className="container mx-auto md:flex block flex-wrap items-center justify-start">
            <div className="flex-1 flex items-center justify-between">
              <a href="#">
                <Image src={logo} alt="GSL Logo" />
              </a>
              <button data-menu-toggle className="md:hidden block pr-1">
                <svg
                  className="fill-current text-white w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <title>menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <ul data-menu className="md:flex hidden flex-wrap items-center justify-start text-white">
              <li className="md:px-6 py-2">
                <a href="#" className="text-brand">
                  Home
                </a>
              </li>
              <li className="md:px-6 py-2">
                <a href="#">Stream/Buy</a>
              </li>
              <li className="md:px-6 py-2">
                <a href="#">Coming Soon</a>
              </li>
              <li className="md:px-6 py-2">
                <a href="#">Catalog</a>
              </li>
              <li className="md:px-6 py-2">
                <a href="#">About Us</a>
              </li>
              <li className="md:px-6 py-2">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container mx-auto lg:mt-56 lg:px-16 px-4 py-4">
          <div className="md:pl-8 md:border-l border-white">
            <p className="text-white tracking-wide text-base font-light leading-none">Out now</p>
            <h1 className="text-white md:text-6xl text-2xl font-bold font-sans m-0 md:leading-none">
              Knights of Wales
            </h1>
            <p className="text-white text-lg md:max-w-lg w-full md:my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laboriosam quae mollitia voluptatibus
              placeat. Libero adipisci ipsam, nobis, corrupti nesciunt id beatae laudantium quis dolorum aliquam impedit
              quae recusandae ad.
            </p>
            <a href="#" className="inline-flex item-center justify-center text-white w-auto hover:opacity-75">
              <svg
                className="fill-current text-white w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <title>ic_play_circle_outline_48px</title>
                <path d="M20 33l12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path>
              </svg>
              <span className="ml-2 pb-1 border-b border-white">Play Video</span>
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto my-6 lg:px-16 px-4">
        <ul className="flex items-center leading-normal text-gray-500 font-alt">
          <li className="text-gray-300 pr-2">Our latest releases</li>
          <li className="pr-2">|</li>
          <li className="pr-2">
            <a href="#" className="text-brand">
              Watch all
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-stretch justify-start mb-10 px-4 overflow-hidden relative ">
        <a href="#" className="relative group block mr-4 flex-shrink-0">
          <div className="absolute inset-0 bg-black opacity-75  group-hover:flex  flex-col justify-end text-white px-4 py-4 cursor-pointer">
            <div>
              <h3 className="text-lg mb-2">30 Yards</h3>
              <p className="leading-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus error ducimus necessitatibus
                eius excepturi nemo exercitationem distinctio minus ipsum! Delectus beatae ducimus eos repellendus. Sit
                consectetur ad expedita provident.
              </p>
            </div>
          </div>
          <Image src={logo1} alt="#" />
        </a>

        <a href="#" className="relative group block mr-4 flex-shrink-0">
          <div className="absolute inset-0 bg-black opacity-75 hidden group-hover:flex flex-col justify-end text-white px-4 py-4 cursor-pointer">
            <div>
              <h3 className="text-lg mb-2">Utah</h3>
              <p className="leading-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus error ducimus necessitatibus
                eius excepturi nemo exercitationem distinctio minus ipsum! Delectus beatae ducimus eos repellendus. Sit
                consectetur ad expedita provident.
              </p>
            </div>
          </div>
          <Image src={logo2} alt="#" />
        </a>

        <a href="#" className="relative group block mr-4 flex-shrink-0">
          <div className="absolute inset-0 bg-black opacity-75 hidden group-hover:flex flex-col justify-end text-white px-4 py-4 cursor-pointer">
            <div>
              <h3 className="text-lg mb-2">Her Majesty</h3>
              <p className="leading-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus error ducimus necessitatibus
                eius excepturi nemo exercitationem distinctio minus ipsum! Delectus beatae ducimus eos repellendus. Sit
                consectetur ad expedita provident.
              </p>
            </div>
          </div>
          <Image src={logo3} alt="#" />
        </a>

        <a href="#" className="relative group block mr-4 flex-shrink-0">
          <div className="absolute inset-0 bg-black opacity-75 hidden group-hover:flex flex-col justify-end text-white px-4 py-4 cursor-pointer">
            <div>
              <h3 className="text-lg mb-2">The Rumor</h3>
              <p className="leading-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus error ducimus necessitatibus
                eius excepturi nemo exercitationem distinctio minus ipsum! Delectus beatae ducimus eos repellendus. Sit
                consectetur ad expedita provident.
              </p>
            </div>
          </div>
          <Image src={logo4} alt="#" />
        </a>

        <a href="#" className="relative group block mr-4 flex-shrink-0">
          <div className="absolute inset-0 bg-black opacity-75 hidden group-hover:flex flex-col justify-end text-white px-4 py-4 cursor-pointer">
            <div>
              <h3 className="text-lg mb-2">White Smoke</h3>
              <p className="leading-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus error ducimus necessitatibus
                eius excepturi nemo exercitationem distinctio minus ipsum! Delectus beatae ducimus eos repellendus. Sit
                consectetur ad expedita provident.
              </p>
            </div>
          </div>
          <Image src={logo5} alt="#" />
        </a>

        <a href="#" className="relative group block mr-4 flex-shrink-0">
          <div className="absolute inset-0 bg-black opacity-75 hidden group-hover:flex flex-col justify-end text-white px-4 py-4 cursor-pointer">
            <div>
              <h3 className="text-lg mb-2">Mr. Brooklyn 2</h3>
              <p className="leading-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus error ducimus necessitatibus
                eius excepturi nemo exercitationem distinctio minus ipsum! Delectus beatae ducimus eos repellendus. Sit
                consectetur ad expedita provident.
              </p>
            </div>
          </div>
          <Image src={logo6} alt="#" />
        </a>

        <button className="absolute z-10 p-2 rounded-full block right-0 inset-y-0 mr-1">
          <svg
            className="fill-current text-white w-6 h-6 hover:text-brand"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>arrow-right</title>
            <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"></path>
          </svg>
        </button>
      </div>

      <div className="container mx-auto py-8 font-alt text-white text-center md:px-0 px-4">
        <div className="text-gray-600 mb-4 md:text-lg text-base">
          Films <span className="px-1">|</span> TV Shows <span className="px-1">|</span> Creative Development
        </div>
        <h2 className="md:text-5xl text-2xl font-sans font-bold mb-4">About GSL Productions</h2>
        <p className="opacity-75 max-w-md mx-auto font-alt">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum nulla, suscipit quibusdam nemo quod
          veniam saepe perferendis enim, delectus provident ea beatae! Impedit molestiae debitis sint libero porro unde.
        </p>

        <a href="#" className="text-brand my-2 inline-block">
          More info +
        </a>

        <div className="relative flex flex-wrap items-center justify-center video-cta md:py-0 py-10 px-4">
          <div className="absolute inset-0 w-full h-full z-negative opacity-75">
            <Image src={videobg} alt="#" className="object-cover w-full max-w-full h-full" />
          </div>

          <div className="container mx-auto text-center text-white w-full flex flex-wrap">
            <h3 className="md:text-5xl text-3xl font-sans font-bold tracking-widge mb-4 w-full leading-tight">
              Releases Coming Soon
            </h3>

            <div className="w-full md:mb-16 mb-6">
              <a href="#" className="inline-flex item-center justify-center text-white w-auto hover:opacity-75">
                <svg
                  className="fill-current text-white w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <title>ic_play_circle_outline_48px</title>
                  <path d="M20 33l12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path>
                </svg>
                <span className="ml-2 pb-1 border-b border-white">Play Video</span>
              </a>
            </div>

            <div className="w-full">
              <a
                href="#"
                className="inline-flex items-center justify-center text-white border bg-transparent px-8 py-3 hover:bg-white hover:text-black md:mt-0 mt-4 rounded"
              >
                All Videos +
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
