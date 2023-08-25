"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import Listbanner from '@/component/listbanner/Listbanner'
import Gallery from '@/component/gallery/Gallery'
import Imgmodal from '@/component/imagemodal/modal'


export default function Home() {
const [carousel,setCarousel] = useState(0)
useEffect(()=>{
  const interval = setInterval(()=>{
    carousel === 3 ?  setCarousel(0) : setCarousel(carousel + 1)
  },5000)
  return () => clearInterval(interval)
},[carousel])
const carouselfunc=()=>{
  if(carousel < 3){
    setCarousel(carousel + 1)
  }else{
    setCarousel(0)
  }
}

  return (
    <main className='w-full min-h-[100vh] flex-col flex items-center  '>
       <div id='headbanner' onClick={()=>{carouselfunc()}} className=' bg-slate-500 flex w-full overflow-x-hidden justify-center   flex-nowrap h-[20vw]'>
        <div className=' flex w-full flex-nowrap transition-all  brightness-75   '  style={{transform:`translateX(-${carousel * 100}%)`}}>
            <div id='imgcontainer' className='min-w-full h-full  relative flex  bg-violet-400'>
                <Image src="https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%9E%E0%B8%B4%E0%B8%9E%E0%B8%B4%E0%B8%981.png?alt=media&token=df2e1b83-76ea-42c0-8cef-1ce2e024754a" fill className=' object-cover'/>
                </div>
            <div id='imgcontainer' className='min-w-full h-full  relative flex  bg-violet-400'>
                <Image src="https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%9E%E0%B8%B4%E0%B8%9E%E0%B8%B4%E0%B8%983.png?alt=media&token=37d524b6-b8ba-47b6-8892-8168b55b2d83" fill className=' object-cover'/>
                </div>  
            <div id='imgcontainer' className='min-w-full h-full  relative flex  bg-violet-400'>
                <Image src="https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%AA%E0%B8%B0%E0%B8%9E%E0%B8%B2%E0%B8%991.png?alt=media&token=79113c2b-0f4b-481d-9c35-363d3b56b21e" fill className=' object-cover'/>
                </div>  
            <div id='imgcontainer' className='min-w-full h-full  relative flex  bg-violet-400'>
                <Image src="https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%941.png?alt=media&token=4ddb44d5-0415-4d8c-aed7-7a917a8e0e65" fill className=' object-cover'/>
                </div>  
        </div>
        <h1 className='z-10 absolute top-7 text-xl sm:top-14 sm:text-2xl md:top-16 md:text-4xl lg:top-18 lg:text-5xl lg:top-16 xl:text-6xl xl:top-20 2xl:text-7xl 2xl:top-20 drop-shadow  text-white '>
          จังหวัด กาฬสินธุ์
          </h1>   
       </div>
       <section id="gallery" className=' mt-2 sm:mt-4 md:mt-8 lg:mt-16 xl:mt-32 2xl:mt-40 w-full h-fit flex flex-col items-center justify-center relative '>
          <Gallery/>
          <Imgmodal/>
      </section>
       <section id="explore" className=' mt-2 sm:mt-4 md:mt-8 lg:mt-16 xl:mt-32 2xl:mt-40 w-full flex flex-col items-center '>
        <Listbanner/>
      </section> 
      <section id="location" className=' mt-2 sm:mt-4 md:mt-8 lg:mt-16 xl:mt-32 2xl:mt-40 w-full flex flex-col items-center '>
          <div id="maps" className=''>
               
          </div>
      </section>

    </main>
  )
}
