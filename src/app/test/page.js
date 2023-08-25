"use client"
import { useState } from "react"

export default function test(){
    const arrays =[
        {
         id:1   
        },
        {
         id:2   
        },
        {
         id:3 
        },
        {
          id:4
        },
        {
         id:5
        },
        {
          id:6
        },
        {
         id:7
        },
        {
          id:8
        },
        {
         id:9
        },
        {
          id:10
        }

    ]
    const [n,setN] = useState(1)
    /* const data = Math.ceil(arrays.length / 3) */
    const data = 12
    const fixends = 3
    const currentends = fixends * n
    const fixstart = currentends - 4   
    const btnnum = [...Array(data+1).keys()].slice(1)
    const btnfixstart = n - 3
    const btnfixend =  n + 1
    const btnconditionend = n > 2 ? btnfixend : 3 
    const btnstart = btnfixstart > data - 4 ? data - 4 : btnfixstart
    console.log(btnstart)
    console.log(n)
    return(
        <div>
        {arrays.map((e,index)=>{
            if(index < currentends && index > fixstart){
                return(
                    <p>{e.id}</p>
                )
            }

        })}
        {btnnum.map((e,index)=>{
            if(index > btnstart && index < btnconditionend){
                return <p className=" text-blue-600" onClick={()=>{setN(e)}}>{e}</p>
            }
        })}
        </div>
    )
}