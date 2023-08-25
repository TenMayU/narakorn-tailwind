import Image from 'next/image'
import Link from 'next/link'
export default function Listbanner(){
    return(
        <>
 <h1 className='text-xl  font-mono sm:2xl md:text-3xl lg:text-4xl xl:text-5xl  2xl:text-6xl'>สำรวจสถานที่ท่องเที่ยวเด่น</h1>
        <div id="list-banner" className='  container w-full min-h-[200px] h-fit bg-fuchsia-400 flex flex-col mt-2 sm:mt-4 md:mt-8 lg:mt-16 xl:mt-20 2xl:mt-24  rounded-lg overflow-hidden'>
        
         <Link href='/listlandmark/kalasin' id="imgcontainer" className='w-full h-20 lg:h-32 xl:h-44 2xl:h-56 flex-col items-center  relative flex overflow-hidden bg-violet-400 group cursor-pointer '>
           <Image src="https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%941.png?alt=media&token=4ddb44d5-0415-4d8c-aed7-7a917a8e0e65" fill className=' object-cover  group-hover:brightness-75 group-hover:scale-110'/>
             <h1 className=' hidden group-hover:block z-10 absolute top-7 text-xl sm:top-14 sm:text-2xl md:top-16 md:text-4xl lg:top-18 lg:text-5xl lg:top-16 xl:text-6xl xl:top-20 2xl:text-7xl 2xl:top-20 drop-shadow  text-white '>
              เมืองกาฬสินธุ์           
             </h1>  
             </Link>
         <Link href='/listlandmark/sahatakhan' id="imgcontainer" className='w-full h-20 lg:h-32 xl:h-44 2xl:h-56  flex-col items-center  relative flex overflow-hidden bg-violet-400 group cursor-pointer '>
           <Image src="https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%AA%E0%B8%B0%E0%B8%9E%E0%B8%B2%E0%B8%991.png?alt=media&token=79113c2b-0f4b-481d-9c35-363d3b56b21e" fill className=' object-cover group-hover:brightness-75 group-hover:scale-110'/>
           <h1 className=' hidden group-hover:block z-10 absolute top-7 text-xl sm:top-14 sm:text-2xl md:top-16 md:text-4xl lg:top-18 lg:text-5xl lg:top-16 xl:text-6xl xl:top-20 2xl:text-7xl 2xl:top-20 drop-shadow  text-white '>
           สหัสขันธ์ 
             </h1> 
            </Link> 
          
        </div>
        </>
    )
}