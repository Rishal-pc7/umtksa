import { Copyright, FacebookIcon, InstagramIcon, LinkedinIcon, Twitter, TwitterIcon, XIcon } from "lucide-react"
import footerBg from '../../assets/footer-bg.jpg'
function Footer() {
  return (
         <div className="relative h-[125vh] md:h-[65vh]  text-white ">
        <div className="w-full h-full absolute opacity-80" style={{backgroundImage:`url(${footerBg})`,backgroundPosition:'center',backgroundSize:'cover'}} >

        </div>
<div className="absolute inset-0 bg-gradient-to-b from-brand-blue to-brand-cyan opacity-50"></div>

    <div className="w-full   px-3 py-4 md:py-10 md:px-32 absolute z-50">
      <div className="flex-col md:flex-row  md:gap-x-10 justify-between items-center px-10 hidden md:flex">
          
          <h1 className="text-xl md:text-2xl font-bold md:basis-[75%]">Our Products</h1>
          <h1 className="text-xl md:text-2xl font-bold ml-64 md:basis-1/3">Quick Links</h1>
          <h1 className="text-xl md:text-2xl font-bold md:basis-1/3">Contact</h1>

      </div>
      <div className="flex flex-wrap gap-y-10 md:flex-nowrap z-50  justify-between mt-4  md:gap-x-10 px-2 md:px-10 text-white pb-10">

      
      <div className="flex flex-col md:flex-row justify-center  md:justify-start items-start gap-x-10 basis-full md:basis-[75%] ">
         
         <h1 className="text-2xl md:text-2xl font-bold md:basis-1/3 block md:hidden text-white rounded-br border-b-4 pb-4 border-brand-cyan ">Our Products</h1>
         
         <ul className="flex flex-col  items-start w-full leading-relaxed text-justify mt-5 md:mt-0 text-lg" style={{wordBreak:'break-word',whiteSpace:'nowrap'}}>
        
         <li className='underline-offset-2 hover:underline focus:underline'><a href="/products/building_materials">Building Material</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/construction_materials'> Construction Material</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/commercial_steel'> Commercial Steel</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/timber_and_plywood'>Timber and Plywood</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/scaffolding_and_accessories'>Scaffolding and Accessories</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/fire_and_safety_supplies'>Fire and Safety Supplies</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/cables_&_wires'>Cables & Wires</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/electrical_and_plumbing_materials'> Electrical and Plumbing Materials </a></li>
         
         </ul>
         <ul className='flex flex-col items-start w-full leading-relaxed text-justify text-lg' style={{wordBreak:'break-word',whiteSpace:'nowrap'}}>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href="/products/valves_&_pumps">Valves & Pumps</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/finishing_materials'>Finishing Material</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/air_conditioning_&_HVAC_equipments'> Air Conditioning & HVAC Equipments </a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/IT_&_networking_equipments'>IT and Networking Equipments</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/waterproofing_&_thermal_insulation_materials'>Waterproofing & Thermal Insulation Materials</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/general_hardware_&_tools'>General Hardware and Tools </a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/used_&_modified_containers'> Used & Modified Containers </a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/events_&_exhibition_supplies'>Events and Exhibition Supplies</a></li>
                </ul>
         

      </div>
      <div className="flex flex-col justify-center md:justify-start items-start basis-full md:basis-1/3 ">
         
         <h1 className="text-xl md:text-2xl font-bold md:basis-1/3 block md:hidden text-white rounded-br border-b-4 pb-4 border-brand-cyan">Quick Links</h1>
         
         <ul className="flex flex-col justify-start items-start w-full text-base md:text-lg leading-relaxed mt-5 md:mt-0">
         <li><a href="/" className="hover:text-blue-600 focus:text-blue-600">Home</a></li>
         <li><a href="/about" className="hover:text-blue-600 focus:text-blue-600">About</a></li>
         <li><a href="/contact" className="hover:text-blue-600 focus:text-blue-600">Contact</a></li>
         
         </ul>
         

      </div>
      
      <div className="flex flex-col justify-center md:justify-start items-start basis-full md:basis-1/3 ">
         <h1 className="text-xl md:text-2xl font-bold md:basis-1/3 block md:hidden text-white rounded-br border-b-4 pb-4 border-brand-cyan">Contact</h1>

         <ul className="flex flex-col w-full items-start leading-relaxed mt-5 md:mt-0 text-base md:text-lg">
         <li>Need Help?</li>
         <li>info@umtksa.com</li>
         <li>123 Hardware Lane, City</li>
         <li className="flex justify-between mt-10 md:mt-5 gap-x-4 absolute bottom-5"><a><FacebookIcon/></a>  <a><InstagramIcon/></a> <a><LinkedinIcon/></a> <a><Twitter/></a> </li>
         
         </ul>
      </div>
      
        
      </div>
    </div>
      <div className="flex justify-center px-6 md:px-12 py-6 md:py-10 md:left-1/2 w-full transform md:-translate-x-1/2 absolute bottom-0 text-white">

      <h2 className="font-normal"> <Copyright className="inline"/> 2024 umtksa.com.All Rights reserved </h2>
      </div>
    </div>
  )
}

export default Footer