
import Image from 'next/image'  
import Link from 'next/link'
import useSWR, { mutate } from 'swr'
async function getData(params){
    const res = await fetch(`https://narakorn-tailwind.vercel.app/api/posts/${params}`,{
      cache:"no-store",
  
    });
    if(!res.ok){
      throw new Error("Fetch Faill")
    }
  
    return res.json()
  }

export default async  function Listlandmark({params}){
    const title = params.id
    const data = await getData(title)
/*     const fetcher = (...args) => fetch(...args).then((res)=>res.json())
    const {data, error, isLoading} = useSWR(
      `/api/posts/${params.id}`,
      fetcher
      ) */
/*    console.log(data) */
    return(
        <div className=" container w-full h-fit flex flex-col gap-16">
              <div className=" flex justify-center w-full h-fit">
             <div id='head' className="bg-slate-500 flex w-full h-24 sm:h-32 md:h-32 lg:h-36 xl:h-40 2xl:h-44 container overflow-x-hidden justify-center   flex-nowrap  brightness-75 ">
                <div id='imgcontainer' className='min-w-full h-full  relative flex  bg-violet-400'>
                <Image src={params.id === "kalasin" ? "https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%A71.png?alt=media&token=6f6a2985-0179-49fc-97a8-b6f7aa8c19b5" : "https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%AA%E0%B8%B0%E0%B8%9E%E0%B8%B2%E0%B8%990.png?alt=media&token=f6c7241c-9e57-47e6-b021-501e980ce080"} fill className=' object-cover'/>
                </div>
              </div>
              <h1 className='z-10 absolute  text-4xl top-12 sm:top-16  lg:text-5xl lg:top-20 xl:text-6xl xl:top-20 2xl:text-7xl 2xl:top-20 drop-shadow  text-white '>
               {title === 'kalasin' ? "กาฬสินธุ์" : "สหัสขันธ์"}
              </h1>  
           </div>
           <div id="list" className=' w-full h-fit grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 justify-items-center gap-y-8  '>
    {data?.map((data)=>{
        return(
            
                <Link href={`/landmark/${data.id}`}>
                <div id='card' className=' w-32 h-44 lg:w-48 lg:h-64 2xl:w-72 2xl:h-96 bg-white flex flex-col items-center relative  mx-1  '>
                    <div className=' relative w-full h-full rounded-lg border-4 border-gray-200'>
                    <Image src={data.imagemain} fill className=' object-cover'/>
                    </div>
                       <h1 className=' text-black text-sm lg:text-lg 2xl:text-xl'>{data.title}</h1>
                </div>
                </Link>
         

        )
    })}   
       </div> 
        </div>
    )
}