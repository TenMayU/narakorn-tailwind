import Image from 'next/image'
export default function Listbanner(){
    return(
        <>
 <h1 className='text-xl  font-mono sm:2xl md:text-3xl lg:text-4xl xl:text-5xl  2xl:text-6xl'>สำรวจสถานที่ท่องเที่ยวเด่น</h1>
        <div id="list-banner" className='  container w-full min-h-[200px] h-[80vw] bg-fuchsia-400 flex flex-col mt-2 sm:mt-4 md:mt-8 lg:mt-16 xl:mt-20 2xl:mt-24  rounded-lg overflow-hidden'>
           <div id="imgcontainer" className='w-full flex-1  flex-col items-center  relative flex overflow-hidden bg-violet-400 group cursor-pointer '>
           <Image src="/mei2.jpg" fill className=' object-cover  group-hover:brightness-75 group-hover:scale-110'/>
             <h1 className=' hidden group-hover:block z-10 absolute top-7 text-xl sm:top-14 sm:text-2xl md:top-16 md:text-4xl lg:top-18 lg:text-5xl lg:top-16 xl:text-6xl xl:top-20 2xl:text-7xl 2xl:top-20 drop-shadow  text-white '>
              เมืองกาฬสินธุ์
             </h1>  
           </div>
           <div id="imgcontainer" className='w-full  flex-1 flex-col items-center  relative flex  bg-violet-400 group cursor-pointer overflow-hidden '>
           <Image src="/mei3.jpg" fill className=' object-cover group-hover:brightness-75 group-hover:scale-110'/>
           <h1 className=' hidden group-hover:block z-10 absolute top-7 text-xl sm:top-14 sm:text-2xl md:top-16 md:text-4xl lg:top-18 lg:text-5xl lg:top-16 xl:text-6xl xl:top-20 2xl:text-7xl 2xl:top-20 drop-shadow  text-white '>
              อำเภอสมเด็จ
             </h1> 
           </div>
           <div id="imgcontainer" className='w-full flex-1 flex-col items-center  relative flex  bg-violet-400 group cursor-pointer overflow-hidden '>
           <Image src="/mei4.jpg" fill className=' object-cover  group-hover:brightness-75 group-hover:scale-110'/>
           <h1 className='hidden group-hover:block z-10 absolute top-7 text-xl sm:top-14 sm:text-2xl md:top-16 md:text-4xl lg:top-18 lg:text-5xl lg:top-16 xl:text-6xl xl:top-20 2xl:text-7xl 2xl:top-20 drop-shadow  text-white '>
              อำเภอกุฉินารายณ์
             </h1> 
           </div>
           <div id="imgcontainer" className='w-full flex-1 flex-col items-center  relative flex  bg-violet-400 group cursor-pointer overflow-hidden '>
           <Image src="/mei.jpg" fill className=' object-cover  group-hover:brightness-75 group-hover:scale-110'/>
           <h1 className='hidden group-hover:block z-10 absolute top-7 text-xl sm:top-14 sm:text-2xl md:top-16 md:text-4xl lg:top-18 lg:text-5xl lg:top-16 xl:text-6xl xl:top-20 2xl:text-7xl 2xl:top-20 drop-shadow  text-white '>
              กาฬสินธุ์
             </h1> 
           </div>
           <div id="imgcontainer" className='w-full flex-1  flex-col items-center relative flex  bg-violet-400 group cursor-pointer overflow-hidden '>
           <Image src="/mei1.jpg" fill className=' object-cover  group-hover:brightness-75 group-hover:scale-110'/>
           <h1 className='hidden group-hover:block z-10 absolute top-7 text-xl sm:top-14 sm:text-2xl md:top-16 md:text-4xl lg:top-18 lg:text-5xl lg:top-16 xl:text-6xl xl:top-20 2xl:text-7xl 2xl:top-20 drop-shadow  text-white '>
              กาฬสินธุ์
             </h1> 
           </div>
        </div>
        </>
    )
}