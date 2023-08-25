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
             <div id='imgcontainer' className=' cursor-pointer flex-1 w-32 h-24 md:w-64 md:h-48 lg:w-64 lg:h-48 xl:w-80 xl:h-60 2xl:w-full 2xl:h-72  relative flex  basis-52 bg-violet-400' onClick={()=>{modalsetimg('https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%943.png?alt=media&token=0cdb6861-5c23-4841-a99e-3245824dc553')}}>
                <Image src="https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%943.png?alt=media&token=0cdb6861-5c23-4841-a99e-3245824dc553" fill className=' object-cover'/>
             </div>
             <div id='imgcontainer' className=' cursor-pointer flex-1 w-32 h-24 md:w-64 md:h-48 lg:w-64 lg:h-48 xl:w-80 xl:h-60 2xl:w-full  2xl:h-72   relative flex  basis-52 bg-violet-400' onClick={()=>{modalsetimg('https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%941.png?alt=media&token=4ddb44d5-0415-4d8c-aed7-7a917a8e0e65')}}>
                <Image src="https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%941.png?alt=media&token=4ddb44d5-0415-4d8c-aed7-7a917a8e0e65" fill className=' object-cover'/>
             </div> 
             <div id='imgcontainer' className=' cursor-pointer flex-1 w-32 h-24 md:w-64 md:h-48 lg:w-64 lg:h-48 xl:w-80 xl:h-60 2xl:w-full  2xl:h-72    relative flex  basis-52 bg-violet-400' onClick={()=>{modalsetimg('https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%A71.png?alt=media&token=6f6a2985-0179-49fc-97a8-b6f7aa8c19b5')}}>
                <Image src="https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%A71.png?alt=media&token=6f6a2985-0179-49fc-97a8-b6f7aa8c19b5" fill className=' object-cover'/>
             </div>
             <div id='imgcontainer' className=' cursor-pointer flex-1 w-32 h-24 md:w-64 md:h-48 lg:w-64 lg:h-48 xl:w-80 xl:h-60 2xl:w-full  2xl:h-72   relative flex  basis-52 bg-violet-400' onClick={()=>{modalsetimg('https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%A71.png?alt=media&token=6f6a2985-0179-49fc-97a8-b6f7aa8c19b5')}}>
                <Image src="https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%A71.png?alt=media&token=6f6a2985-0179-49fc-97a8-b6f7aa8c19b5" fill className=' object-cover'/>
             </div>
             <div id='imgcontainer' className=' cursor-pointer flex-1 w-32 h-24 md:w-64 md:h-48 lg:w-64 lg:h-48 xl:w-80 xl:h-60 2xl:w-full 2xl:h-72  relative flex  basis-52 bg-violet-400' onClick={()=>{modalsetimg('https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%A72.png?alt=media&token=fdd748ea-38bf-4164-ae3e-7facb46e4f3a')}}>
                <Image src="https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%A72.png?alt=media&token=fdd748ea-38bf-4164-ae3e-7facb46e4f3a" fill className=' object-cover'/>
             </div>
             <div id='imgcontainer' className=' cursor-pointer flex-1 w-32 h-24 md:w-64 md:h-48 lg:w-64 lg:h-48 xl:w-80 xl:h-60 2xl:w-full  2xl:h-72   relative flex  basis-52 bg-violet-400' onClick={()=>{modalsetimg('https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%AA%E0%B8%B0%E0%B8%9E%E0%B8%B2%E0%B8%990.png?alt=media&token=f6c7241c-9e57-47e6-b021-501e980ce080')}}>
                <Image src="https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%AA%E0%B8%B0%E0%B8%9E%E0%B8%B2%E0%B8%990.png?alt=media&token=f6c7241c-9e57-47e6-b021-501e980ce080" fill className=' object-cover'/>
             </div> 
             <div id='imgcontainer' className=' cursor-pointer flex-1 w-32 h-24 md:w-64 md:h-48 lg:w-64 lg:h-48 xl:w-80 xl:h-60 2xl:w-full  2xl:h-72    relative flex  basis-52 bg-violet-400' onClick={()=>{modalsetimg('https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%AA%E0%B8%B0%E0%B8%9E%E0%B8%B2%E0%B8%991.png?alt=media&token=79113c2b-0f4b-481d-9c35-363d3b56b21e')}}>
                <Image src="https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%AA%E0%B8%B0%E0%B8%9E%E0%B8%B2%E0%B8%991.png?alt=media&token=79113c2b-0f4b-481d-9c35-363d3b56b21e" fill className=' object-cover'/>
             </div>
             <div id='imgcontainer' className=' cursor-pointer flex-1 w-32 h-24 md:w-64 md:h-48 lg:w-64 lg:h-48 xl:w-80 xl:h-60 2xl:w-full  2xl:h-72   relative flex  basis-52 bg-violet-400' onClick={()=>{modalsetimg('https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%AA%E0%B8%B0%E0%B8%9E%E0%B8%B2%E0%B8%992.png?alt=media&token=01b38b0f-d4db-4cdf-ac79-29a753998ccd')}}>
                <Image src="https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%AA%E0%B8%B0%E0%B8%9E%E0%B8%B2%E0%B8%992.png?alt=media&token=01b38b0f-d4db-4cdf-ac79-29a753998ccd" fill className=' object-cover'/>
             </div>
         </div>
         
        </>
    )
}