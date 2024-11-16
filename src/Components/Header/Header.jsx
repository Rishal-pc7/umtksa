import {ChevronDown, ChevronUp, MenuIcon,  X} from 'lucide-react'
import { useState,useEffect } from 'react'
import {useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'
function Header() {
    const [drop,setDrop] = useState(false)
    const [menu,setMenu] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    const location =useLocation()
    let fullPath=location.pathname
    const staticPath = fullPath.split('/').slice(0, 2).join('/');
  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>

    {
      menu &&
      <div className="absolute z-10 bg-white w-2/3 py-28 h-auto min-h-screen">
      <div className={`${menu ? 'block' :'hidden'} md:block links mt-4 md:mt-0 w-full pl-4 pb-4 `}>
            <ul className="md:flex md:items-end  h-full leading-loose">
                <li className="mx-4"><a href="/" className={`${location.pathname === '/' && 'scale-150 font-medium' }  duration-100 text-l hover:text-brand-cyan`}>Home</a></li>
                <li className="mx-4"><a href="/about" className={`${location.pathname === '/about' && 'scale-150 font-medium' } duration-100 text-l hover:text-brand-cyan`}>About</a></li>
                <li className="mx-4 relative "><span className={`${staticPath === '/products' && 'scale-150 font-medium' } hover:text-brand-cyan`} onFocus={()=>setDrop(true)} onBlur={()=>setDrop(false)} onClick={()=>setDrop(!drop)}><a href="#" className="duration-100 text-l	">Products</a>{drop ?<ChevronUp strokeWidth={0.75}  className='inline' onClick={()=>setDrop(true)}/>:<ChevronDown strokeWidth={0.75} className='inline' onClick={()=>setDrop(false)}/>}</span>
                {
                  drop &&
                  <div className={`md:absolute md:-left-[11rem] w-full md:w-[38rem] py-5 px-2 bg-white md:shadow text-black z-20 flex gap-x-3 flex-col md:flex-row`} >
                
                <ul className='leading-loose'>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href="/products/building_materials">Building Material</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/construction_materials'> Construction Material</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/commercial_steel'> Commercial Steel</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/timber_and_plywood'>Timber and Plywood</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/scaffolding_and_accessories'>Scaffolding and Accessories</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/fire_and_safety_supplies'>Fire and Safety Supplies</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/cables_&_wires'>Cables & Wires</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/electrical_and_plumbing_materials'> Electrical and Plumbing Materials </a></li>
                </ul>
                <ul className='leading-loose'>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href="/products/valves_&_pumps">Valves & Pumps</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/finishing_materials'>Finishing Material</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/air_conditioning_&_HVAC_equipments'> Air Conditioning & HVAC Equipments </a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/IT_&_networking_equipments'>IT and Networking Equipments</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/waterproofing_&_thermal_insulation_materials'>Waterproofing & Thermal Insulation Materials</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/general_hardware_&_tools'>General Hardware and Tools </a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/events_&_exhibition_supplies'>Events and Exhibition Supplies</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/used_&_modified_containers'> Used & Modified Containers </a></li>
                </ul>
                </div>
                }
                </li>
                
                <li className="mx-4"><a href="/contact" className={`duration-100 text-l hover:text-brand-cyan`}>Contact Us</a></li>
            </ul>
        </div>

      </div>
    }
    <div className="logo h-auto w-full z-10 md:h-24 bg-transparent absolute top-0 left-0 flex justify-between">
    
      <img className="h-16 my-2 md:h-28 md:m-10 w-1/2 md:w-auto inline " src={logo} alt=""/>
      <div className="menus  md:hidden flex justify-end w-1/3">
            {menu ? <button className='outline-none p-4 ' onClick={()=>setMenu(!menu)}><X/></button>:<button className='outline-none p-4 ' onClick={()=>setMenu(!menu)}><MenuIcon/></button>}
        </div>     

      <div className={`hidden relative md:flex md:h-20 md:w-1/2 md:rounded-bl-[80px] md:border-l-[20px] md:border-l-brand-cyan bg-white `}>
      

      
      <div className={`${menu ? 'block' :'hidden'} md:block links mt-4 text-lg md:mt-0 w-full pl-16 pb-4 `}>
            <ul className="md:flex md:items-end  h-full leading-loose">
                <li className='flex h-1/2 items-center mx-1'><hr className="w-2 border-brand-cyan border-2"/></li>
                <li className="mx-4"><a href="/" className={`${location.pathname === '/' && 'scale-150 font-medium' }  duration-100 text-l hover:text-brand-cyan`}>Home</a></li>
                <li className='flex h-1/2 items-center mx-1'><hr className="w-2 border-brand-blue border-2"/></li>
                <li className="mx-4"><a href="/about" className={`${location.pathname === '/about' && 'scale-150 font-medium' } duration-100 text-l hover:text-brand-cyan`}>About</a></li>
                <li className='flex h-1/2 items-center mx-1'><hr className="w-2 border-brand-cyan border-2"/></li>
                <li className="mx-4 relative " onMouseOver={()=>setDrop(true)} onMouseOut={()=>setDrop(false)}><span className={`${staticPath === '/products' && 'scale-150 font-medium' } hover:text-brand-cyan`}><a href="" className="duration-100 text-l	">Products</a>{drop ?<ChevronUp strokeWidth={0.75}  className='inline' onClick={()=>setDrop(!drop)}/>:<ChevronDown strokeWidth={0.75} className='inline' onClick={()=>setDrop(!drop)}/>}</span>
                {
                  drop &&
                  <div className={`md:absolute md:-left-[13rem] w-full md:w-[44rem] py-5 px-2 bg-white md:shadow text-black z-20 flex gap-x-3 flex-col md:flex-row`} >
                
                <ul className='leading-loose'>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href="/products/building_materials">Building Material</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/construction_materials'> Construction Material</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/commercial_steel'> Commercial Steel</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/timber_and_plywood'>Timber and Plywood</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/scaffolding_and_accessories'>Scaffolding and Accessories</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/fire_and_safety_supplies'>Fire and Safety Supplies</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/cables_&_wires'>Cables & Wires</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/electrical_and_plumbing_materials'> Electrical and Plumbing Materials </a></li>
                </ul>
                <ul className='leading-loose'>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href="/products/valves_&_pumps">Valves & Pumps</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/finishing_materials'>Finishing Material</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/air_conditioning_&_HVAC_equipments'> Air Conditioning & HVAC Equipments </a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/IT_&_networking_equipments'>IT and Networking Equipments</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/waterproofing_&_thermal_insulation_materials'>Waterproofing & Thermal Insulation Materials</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/general_hardware_&_tools'>General Hardware and Tools </a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/events_&_exhibition_supplies'>Events and Exhibition Supplies</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/used_&_modified_containers'> Used & Modified Containers </a></li>
                </ul>
                </div>
                }
                </li>
                    <li className='flex h-1/2 items-center mx-1'><hr className="w-2 border-brand-blue border-2"/></li>
                
                <li className="mx-4"><a href="/contact" className={`duration-100 text-l hover:text-brand-cyan`}>Contact Us</a></li>
                    <li className='flex h-1/2 items-center mx-1'><hr className="w-2 border-brand-cyan border-2"/></li>
            </ul>
        </div>
        
     </div>
      
    </div>
    
  </>
  ) 
}

export default Header