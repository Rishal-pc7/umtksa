import { Copyright } from "lucide-react"

function Footer() {
  return (
    <div className="bg-slate-100">

    <div className="w-full  px-12 py-4 md:py-10 md:px-32 bg-slate-100">
      <div className="flex-col md:flex-row md:gap-x-10 justify-between items-center px-10 hidden md:flex">
          <div className="logo md:basis-1/3  ">
            <img className="h-14 md:h-24" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=236,fit=crop,q=95/AoPvzO5V3aUwpJNO/um-logo-mnlv2lWxbZS8QJ0n.png" alt="" />
        </div>
          <h1 className="text-xl md:text-2xl font-bold md:basis-1/3">Quick Links</h1>
          <h1 className="text-xl md:text-2xl font-bold md:basis-1/3">Support</h1>
          <h1 className="text-xl md:text-2xl font-bold md:basis-1/3">Contact</h1>

      </div>
      <div className="flex flex-wrap gap-y-10 md:flex-nowrap justify-between mt-4 md:gap-x-10 px-10 text-slate-500 pb-10">

      <div className="flex flex-col justify-center items-center md:items-start basis-full md:basis-1/3 ">
      <div className="logo md:basis-1/3 block md:hidden ">
            <img className="h-14 md:h-24" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=236,fit=crop,q=95/AoPvzO5V3aUwpJNO/um-logo-mnlv2lWxbZS8QJ0n.png" alt="" />
        </div>
      
        <div className="about">
          <h1 className="font-normal   mt-5 text-md md:text-md ">We build lasting partnerships by delivering innovative construction solutions, safety, and growth for every build.</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start basis-full md:basis-1/3 ">
         
         <h1 className="text-xl md:text-2xl font-bold md:basis-1/3 block md:hidden text-black">Quick Links</h1>
         
         <ul className="flex flex-col items-center md:items-start w-full leading-relaxed">
         <li><a href="/" className="hover:text-blue-600 focus:text-blue-600">Home</a></li>
         <li><a href="/about" className="hover:text-blue-600 focus:text-blue-600">About</a></li>
         <li><a href="/contact" className="hover:text-blue-600 focus:text-blue-600">Contact</a></li>
         
         </ul>
         

      </div>
      <div className="flex flex-col justify-center items-center md:items-start basis-full md:basis-1/3">
         <h1 className="text-xl md:text-2xl font-bold md:basis-1/3 block md:hidden text-black">Support</h1>

         <ul className="flex flex-col w-full items-center md:items-start leading-relaxed">
         <li>Need Help?</li>
         <li>info@umtksa.com</li>
         
         </ul>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start basis-full md:basis-1/3 ">
         <h1 className="text-xl md:text-2xl font-bold md:basis-1/3 block md:hidden text-black">Contact</h1>

         <ul className="flex flex-col w-full items-center md:items-start leading-relaxed">
         <li>123 Hardware Lane, City</li>
         <li></li>
         
         </ul>
      </div>
        
      </div>
    </div>
      <hr className="w-full border-gray-300 my-4 md:my-2 "/>
      <div className="flex justify-center px-12 py-6 md:py-10">

      <h2 className="font-normal text-slate-500 text-md"> <Copyright className="inline"/> 2024 umtksa.com.All Rights reserved </h2>
      </div>
    </div>
  )
}

export default Footer