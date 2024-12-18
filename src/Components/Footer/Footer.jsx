import { Copyright, FacebookIcon, InstagramIcon} from "lucide-react"
import footerBg from '../../assets/footer-bg.jpg'
import { FaSnapchat, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
         <div className="relative w-full h-auto min-h-screen md:min-h-[50vh] text-white bg-cover bg-[75%] md:bg-center"  style={{
           backgroundImage:`url(${footerBg})`,
          }}>
        {/* <div className="w-full h-full absolute opacity-80 bg-right-top md:bg-center " style={{backgroundImage:`url(${footerBg})`,backgroundSize:'cover'}} >

        </div> */}
        
     <div className="absolute inset-0 bg-gradient-to-b from-brand-blue  to-white opacity-50"></div>

    <div className="w-full   px-3 py-4 md:py-4 md:px-32  z-50 relative">
      <div className="flex-col md:flex-row  justify-between relative items-center w-full px-10 hidden md:flex">
          
          <div className="text-xl md:text-2xl relative font-bold md:basis-[75%]"><h1 className="absolute left-[25%] -bottom-4"> Our Products</h1></div>
          <div className="text-xl md:text-2xl ml-20 font-bold md:basis-1/3">Quick Links</div>
          <div className="text-xl md:text-2xl font-bold pl-[23px] md:basis-1/3">Contact</div>

      </div>
      <div className="flex flex-wrap gap-y-10 md:flex-nowrap z-50  justify-between mt-4  md:gap-x-10 px-2 md:px-10 text-white pb-10">

      
      <div className="flex flex-col md:flex-row justify-center  md:justify-start items-start gap-x-10 basis-full md:basis-[75%] ">
         
         <h1 className="text-2xl md:text-2xl font-bold md:basis-1/3 block md:hidden text-white rounded-br border-b-4 pb-4 border-brand-cyan ">Our Products</h1>
         
         <ul className="flex flex-col  items-start w-full leading-loose text-justify mt-5 md:mt-0 text-lg " style={{wordBreak:'break-word',whiteSpace:'nowrap'}}>
        
         <li className='underline-offset-2 hover:underline focus:underline'><a href="/products/building_materials">Building Materials</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/construction_materials'> Construction Materials</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/commercial_steel'> Commercial Steel</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/timber_and_plywood'>Timber and Plywood</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/scaffolding_and_accessories'>Scaffolding and Accessories</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/fire_and_safety_supplies'>Fire and Safety Supplies</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/cables_&_wires'>Cables & Wires</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/electrical_and_plumbing_materials'> Electrical and Plumbing Materials </a></li>
         
         </ul>
         <ul className='flex flex-col items-start w-full leading-loose text-justify text-lg ' style={{wordBreak:'break-word',whiteSpace:'nowrap'}}>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href="/products/pumps_&_valves">Pumps & Valves</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/finishing_materials'>Finishing Materials</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/air_conditioning_&_HVAC_equipments'> Air Conditioning & HVAC Equipments </a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/IT_&_networking_equipments'>IT and Networking Equipments</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/waterproofing_&_thermal_insulation'>Waterproofing & Thermal Insulation</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/general_hardware_&_tools'>General Hardware and Tools </a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/used_&_modified_containers'> Used & Modified Containers </a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/events_&_exhibition_supplies'>Events and Exhibition Supplies</a></li>
                </ul>
         

      </div>
      <div className="flex flex-col justify-center md:justify-start items-start basis-full md:basis-1/3 ">
         
         <h1 className="text-xl md:text-2xl font-bold md:basis-1/3 block md:hidden text-white rounded-br border-b-4 pb-4 border-brand-cyan">Quick Links</h1>
         
         <ul className="flex flex-col justify-start items-start w-full text-lg leading-loose mt-5 md:mt-0" style={{wordBreak:'break-word',whiteSpace:'nowrap'}}>
         <li><a href="/" className="underline-offset-2 hover:underline focus:underline">Home</a></li>
         <li><a href="/about" className="underline-offset-2 hover:underline focus:underline">About</a></li>
         <li><a href="/contact" className="underline-offset-2 hover:underline focus:underline">Contact Us</a></li>
         
         </ul>
         

      </div>
      
      <div className="flex flex-col justify-center md:justify-start items-start basis-full md:basis-1/3 ">
         <h1 className="text-xl md:text-2xl font-bold md:basis-1/3 block md:hidden text-white rounded-br border-b-4 pb-4 border-brand-cyan">Contact</h1>

         <ul className="flex flex-col w-full items-start leading-loose mt-5 md:mt-0 text-lg" style={{wordBreak:'break-word',whiteSpace:'nowrap'}}>
         <li>For Enquiries</li>
         <li>sales@umtksa.com</li>
         <li>+966 54 265 0102</li>
         <li>+966 54 264 9546</li>
         <li>+966 54 271 8370</li>
         <li className='mt-5'>Prince Muhammad Ibn Salman Ibn Abdulaziz Rd,</li> 
         <li>Building No: 3517, P O Box: 1334,</li>
         <li>Riyadh- Saudi Arabia</li>
         
         </ul>
      </div>
      
        
      </div>
    </div>
      <div className="flex flex-col items-center md:flex-row justify-between px-4 md:px-36 pt-10 pb-4  md:pt-0 md:left-1/2 w-full transform md:-translate-x-1/2 relative md:bottom-0 bottom-14 text-white">

      <h2 className="font-normal basis-full md:basis-2/3 text-center md:text-end text-lg md:text-xl mt-10 md:mt-5"> <Copyright className="inline"/> 2024 umtksa.com.All Rights reserved </h2>
      <div className="flex md:w-auto w-1/2 justify-between mt-5 gap-x-4 "><a href="https://www.facebook.com/share/19ei6WHYgS/"><FacebookIcon/></a>  <a href="https://www.instagram.com/umt.ksa/profilecard/?igsh=anlkZXZxdWs3Nmp2"><InstagramIcon/></a> <a><FaSnapchat size={'1.5em'}/></a> <a href="https://x.com/unitedmodeksa?s=09"><FaXTwitter  size={'1.5em'}/></a> </div>
      </div>
    </div>
            </>
  )
}

export default Footer