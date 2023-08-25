"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import useSWR, { mutate } from 'swr'
export default  function lanmark({params}){
  const fetcher = (...args) => fetch(...args).then((res)=>res.json())
  const {data, error, isLoading} = useSWR(
    `/api/post/${params.id}`,
    fetcher
    )
    
    const [carousel,setCarousel] = useState(0)
    useEffect(()=>{
      const interval = setInterval(()=>{
        carousel === 2 ?  setCarousel(0) : setCarousel(carousel + 1)
      },5000)
      return () => clearInterval(interval)
    },[carousel])
    const carouselfunc=(e)=>{
setCarousel(e)
    }
    return(
        <>
          {isLoading ? "Loading" :   
        <div className=" container w-full h-fit flex flex-col items-center mt-10 mb-10" >
              <h1 className='text-xl  sm:text-2xl  md:text-4xl  lg:text-5xl  xl:text-6xl  2xl:text-7xl '>
          {data?.title}
              </h1>   
         <div className=" flex justify-center container w-full h-fit   mt-10">
               <div id='headbanner' /* onClick={()=>{carouselfunc()}}  */className=' flex w-[510px] h-[160px] md:w-[765px] md:h-[240px] lg:w-[1020px] lg:h-[320px] xl:w-[1275px] xl:h-[400px] 2xl:w-[1530px] 2xl:h-[480px]  overflow-x-hidden justify-center   flex-nowrap '>
        <div className=' flex w-full flex-nowrap transition-all'  style={{transform:`translateX(-${carousel * 100}%)`}}>

             
              <div id='imgcontainer' className='min-w-full h-full  relative flex  bg-violet-400'>
              <Image src={data?.image[0]} fill className=' object-cover'/>
              </div>
              <div id='imgcontainer' className='min-w-full h-full  relative flex  bg-violet-400'>
              <Image src={data?.image[1]} fill className=' object-cover'/>
              </div>
              <div id='imgcontainer' className='min-w-full h-full  relative flex  bg-violet-400'>
              <Image src={data?.image[2]} fill className=' object-cover'/>
              </div>

        </div>
       </div>
     </div>
            <div id='dots' className=' w-full h-8 flex gap-3 justify-center items-center'>
              <div id="dot" className={' cursor-pointer w-10 h-3 bg-slate-200'+` ${carousel == 0 ? " bg-yellow-500":""}`} onClick={()=>{carouselfunc(0)}}></div>
              <div id="dot" className={' cursor-pointer w-10 h-3 bg-slate-200'+` ${carousel == 1 ? " bg-yellow-500":""}`} onClick={()=>{carouselfunc(1)}}></div>
              <div id="dot" className={' cursor-pointer w-10 h-3 bg-slate-200'+` ${carousel == 2 ? " bg-yellow-500":""}`} onClick={()=>{carouselfunc(2)}}></div>            
            </div> 
            <div className=' flex flex-col gap-2 container m-0 lg:m-10 p-8'>
                <p className=' text-sm md:text-base lg:text-lg'>
                  {data?.desc}
                </p>
                <p className=' text-sm md:text-base lg:text-lg'>
                  {data?.desc2}
                </p>
                <p className=' text-sm md:text-base lg:text-lg'>
                  {data?.desc3}
                </p>
            </div>
            <div className=' container flex flex-col  m-0 lg:m-10 p-8'>
               <a href={data?.gmap} className=' cursor-pointer'>GoogleMap: <span className=' underline'>{data?.gmap}</span></a>
               <a href={data?.ref} className=' cursor-pointer'>อ้างอิง: <span className=' underline'>TrueID</span></a>
            </div>
    </div>
               }
        </>
    )
}