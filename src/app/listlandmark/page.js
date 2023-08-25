import Image from 'next/image'
import Link from 'next/link'
export default function list(){
    return(
        <>
         <Link href='/listlandmark/kalasin' id="imgcontainer" className='w-full h-20 lg:h-32 xl:h-44 2xl:h-56 flex-col items-center  relative flex overflow-hidden bg-violet-400 group cursor-pointer '>
           <Image src="https://firebasestorage.googleapis.com/v0/b/maytailwind.appspot.com/o/%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%941.png?alt=media&token=4ddb44d5-0415-4d8c-aed7-7a917a8e0e65" fill className=' object-cover  group-hover:brightness-75 group-hover:scale-110'/>
             <h1 className=' hidden group-hover:block z-10 absolute top-7 text-xl sm:top-14 sm:text-2xl md:top-16 md:text-4xl lg:top-18 lg:text-5xl lg:top-16 xl:text-6xl xl:top-20 2xl:text-7xl 2xl:top-20 drop-shadow  text-white '>
              เมืองกาฬสินธุ์           
             </h1>  
             </Link>
        </>
    )
}