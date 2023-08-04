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
                <Image src="@/mei1.jpg" fill className=' object-cover'/>
                </div>
            <div id='imgcontainer' className='min-w-full h-full  relative flex  bg-violet-400'>
                <Image src="@/mei2.jpg" fill className=' object-cover'/>
                </div>  
            <div id='imgcontainer' className='min-w-full h-full  relative flex  bg-violet-400'>
                <Image src="@/mei3.jpg" fill className=' object-cover'/>
                </div>  
            <div id='imgcontainer' className='min-w-full h-full  relative flex  bg-violet-400'>
                <Image src="@/mei4.jpg" fill className=' object-cover'/>
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
