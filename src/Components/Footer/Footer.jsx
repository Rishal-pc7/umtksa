import { Copyright } from "lucide-react"
import footerBg from '../../assets/finishing.jpg'
function Footer() {
  return (
         <div className="relative h-[65vh] md:h-[50vh]  text-white ">
        <div className="w-full  bg-bottom bg-cover h-full absolute opacity-50" style={{backgroundImage:`url(${footerBg})`}} >

        </div>
<div className="absolute inset-0 bg-gradient-to-b from-brand-blue to-brand-cyan opacity-40"></div>

    <div className="w-full  px-12 py-4 md:py-10 md:px-32 absolute z-50">
      <div className="flex-col md:flex-row md:gap-x-10 justify-between items-center px-10 hidden md:flex">
          
          <h1 className="text-xl md:text-2xl font-bold md:basis-1/3">Quick Links</h1>
          <h1 className="text-xl md:text-2xl font-bold md:basis-1/3">Support</h1>
          <h1 className="text-xl md:text-2xl font-bold md:basis-1/3">Contact</h1>

      </div>
      <div className="flex flex-wrap gap-y-10 md:flex-nowrap z-50 justify-between mt-4 md:gap-x-10 px-10 text-white pb-10">

      
      <div className="flex flex-col justify-center items-center md:items-start basis-full md:basis-1/3 ">
         
         <h1 className="text-xl md:text-2xl font-bold md:basis-1/3 block md:hidden text-white">Quick Links</h1>
         
         <ul className="flex flex-col items-center md:items-start w-full leading-relaxed">
         <li><a href="/" className="hover:text-blue-600 focus:text-blue-600">Home</a></li>
         <li><a href="/about" className="hover:text-blue-600 focus:text-blue-600">About</a></li>
         <li><a href="/contact" className="hover:text-blue-600 focus:text-blue-600">Contact</a></li>
         
         </ul>
         

      </div>
      <div className="flex flex-col justify-center items-center md:items-start basis-full md:basis-1/3">
         <h1 className="text-xl md:text-2xl font-bold md:basis-1/3 block md:hidden ">Support</h1>

         <ul className="flex flex-col w-full items-center md:items-start leading-relaxed">
         <li>Need Help?</li>
         <li>info@umtksa.com</li>
         
         </ul>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start basis-full md:basis-1/3 ">
         <h1 className="text-xl md:text-2xl font-bold md:basis-1/3 block md:hidden text-white">Contact</h1>

         <ul className="flex flex-col w-full items-center md:items-start leading-relaxed">
         <li>123 Hardware Lane, City</li>
         <li></li>
         
         </ul>
      </div>
      
        
      </div>
    </div>
      <div className="flex justify-center px-12 py-6 md:py-10 md:left-1/2 w-full transform md:-translate-x-1/2 absolute bottom-0 text-white">

      <h2 className="font-normal text-md"> <Copyright className="inline"/> 2024 umtksa.com.All Rights reserved </h2>
      </div>
    </div>
  )
}

export default Footer