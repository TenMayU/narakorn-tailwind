"use client"
import { useContext } from 'react'
import { ImgmodalContext } from '@/context/Imgmodalcontext'
import Image from 'next/image'
export default function Imgmodal(){
    const {modalimages,modaltoggle,setModaltoggle} = useContext(ImgmodalContext)
    const modaltoggles=(e)=>{
        if(e.target.id === "modal"){
          setModaltoggle('hidden')
        }
      }
    return(
        <>
        <div id="modal" className={`${modaltoggle} `+' w-full h-full absolute  backdrop-brightness-50 backdrop-blur-sm z-30 justify-center items-center'}onClick={(e)=>{modaltoggles(e)}} >
          <div id='imgcontainer' className='w-[50%] h-[90%] relative flex border-2 ' >
              <Image id="modalimage" src={`/${modalimages}`} fill className=' object-contain'/>
             </div> 
          </div>
        </>
    )
}