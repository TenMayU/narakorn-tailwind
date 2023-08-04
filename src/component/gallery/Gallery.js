"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ImgmodalContext } from '@/context/Imgmodalcontext'
export default function Gallery(){

const {setModalimages,setModaltoggle} = useContext(ImgmodalContext)
const modalsetimg=(e)=>{
  setModalimages(e)
  setModaltoggle('flex')
  }

    return(
        <>
          <div id="gallery" className=' w-fit lg:w-full grid container gap-1  grid-cols-2  lg:grid-cols-4 lg:grid-rows-2 justify-center'>
             <div id='imgcontainer' className='flex-1 w-32 h-24 md:w-64 md:h-48 lg:w-64 lg:h-48 xl:w-80 xl:h-60 2xl:w-full 2xl:h-72  relative flex  basis-52 bg-violet-400' onClick={()=>{modalsetimg('mei1.jpg')}}>
                <Image src="/mei1.jpg" fill className=' object-cover'/>
             </div>
             <div id='imgcontainer' className='flex-1 w-32 h-24 md:w-64 md:h-48 lg:w-64 lg:h-48 xl:w-80 xl:h-60 2xl:w-full  2xl:h-72   relative flex  basis-52 bg-violet-400' onClick={()=>{modalsetimg('mei2.jpg')}}>
                <Image src="/mei2.jpg" fill className=' object-cover'/>
             </div> 
             <div id='imgcontainer' className='flex-1 w-32 h-24 md:w-64 md:h-48 lg:w-64 lg:h-48 xl:w-80 xl:h-60 2xl:w-full  2xl:h-72    relative flex  basis-52 bg-violet-400' onClick={()=>{modalsetimg('mei3.jpg')}}>
                <Image src="/mei3.jpg" fill className=' object-cover'/>
             </div>
             <div id='imgcontainer' className='flex-1 w-32 h-24 md:w-64 md:h-48 lg:w-64 lg:h-48 xl:w-80 xl:h-60 2xl:w-full  2xl:h-72   relative flex  basis-52 bg-violet-400' onClick={()=>{modalsetimg('mei4.jpg')}}>
                <Image src="/mei4.jpg" fill className=' object-cover'/>
             </div>
             <div id='imgcontainer' className='flex-1 w-32 h-24 md:w-64 md:h-48 lg:w-64 lg:h-48 xl:w-80 xl:h-60 2xl:w-full 2xl:h-72  relative flex  basis-52 bg-violet-400' onClick={()=>{modalsetimg('mei1.jpg')}}>
                <Image src="/mei1.jpg" fill className=' object-cover'/>
             </div>
             <div id='imgcontainer' className='flex-1 w-32 h-24 md:w-64 md:h-48 lg:w-64 lg:h-48 xl:w-80 xl:h-60 2xl:w-full  2xl:h-72   relative flex  basis-52 bg-violet-400' onClick={()=>{modalsetimg('mei2.jpg')}}>
                <Image src="/mei2.jpg" fill className=' object-cover'/>
             </div> 
             <div id='imgcontainer' className='flex-1 w-32 h-24 md:w-64 md:h-48 lg:w-64 lg:h-48 xl:w-80 xl:h-60 2xl:w-full  2xl:h-72    relative flex  basis-52 bg-violet-400' onClick={()=>{modalsetimg('mei3.jpg')}}>
                <Image src="/mei3.jpg" fill className=' object-cover'/>
             </div>
             <div id='imgcontainer' className='flex-1 w-32 h-24 md:w-64 md:h-48 lg:w-64 lg:h-48 xl:w-80 xl:h-60 2xl:w-full  2xl:h-72   relative flex  basis-52 bg-violet-400' onClick={()=>{modalsetimg('mei4.jpg')}}>
                <Image src="/mei4.jpg" fill className=' object-cover'/>
             </div>
         </div>
         
        </>
    )
}