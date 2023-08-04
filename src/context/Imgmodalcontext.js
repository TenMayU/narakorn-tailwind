"use client"
import { createContext } from "react"
import { useState } from "react"
export const ImgmodalContext = createContext()
export default function ImgmodalProvider({children}){
const [modalimages,setModalimages] = useState()
const [modaltoggle,setModaltoggle] = useState('hidden')
    return(
   <ImgmodalContext.Provider value={{modalimages,setModalimages,modaltoggle,setModaltoggle}}>
    {children}
   </ImgmodalContext.Provider>
    )
}