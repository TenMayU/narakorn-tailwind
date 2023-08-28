import Navbar from '@/component/Navbar/Navbar'
import './globals.css'
import { Kanit } from 'next/font/google'
import ImgmodalProvider from '@/context/Imgmodalcontext'
import Footer from '@/component/footer/footer'
const Kanits = Kanit({ subsets: ['thai'], weight:['500'],variable: '--font-kanit', })
const Kanitslight = Kanit({ subsets: ['thai'], weight:['300'],variable: '--font-kanitlight', })
export const metadata = {
  title: 'จังหวัดกาฬสินธุ์',
  description: 'Kalasin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${Kanits.variable} ${Kanitslight.variable}`}>
      <body >
        <ImgmodalProvider>
        <div className=' containerfuid min-h-[100vh] flex flex-col justify-between items-center mx-auto'>
        {children}
     {/*    <Footer/> */}
        </div>   
        </ImgmodalProvider>
        </body>
    </html>
  )
}
