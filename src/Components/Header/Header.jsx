import {ChevronDown, ChevronUp, MenuIcon,  X} from 'lucide-react'
import { useState,useEffect } from 'react'
import {useLocation } from 'react-router-dom'
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
    <nav className={`fixed z-50 top-0 left-0 ${menu || isScrolled || staticPath==='/products' ?'bg-white md:h-24 h-auto sticky text-black':'bg-transparent h-24 text-slate-100'}  w-full flex flex-wrap  md:flex-nowrap  p-6 md:p-12 md:flex md:justify-between md:items-center`}>
        <div className="logo w-1/2 md:w-auto">
            <img className="h-14 md:h-24 inline" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=236,fit=crop,q=95/AoPvzO5V3aUwpJNO/um-logo-mnlv2lWxbZS8QJ0n.png" alt="" />
        </div>
        <div className="menus  md:hidden flex justify-end w-1/2">
            {menu ? <button className='outline-none p-4 ' onClick={()=>setMenu(!menu)}><X/></button>:<button className='outline-none p-4 ' onClick={()=>setMenu(!menu)}><MenuIcon/></button>}
        </div>

        <div className={`${menu ? 'block' :'hidden'} md:block links mt-4 md:mt-0 w-full md:w-auto`}>
            <ul className="md:flex md:items-center leading-loose">
                <li className="mx-4"><a href="/" className={`${location.pathname === '/' && 'scale-150 font-medium' }  duration-100 text-l hover:text-cyan-500 hover:underline underline-offset-4	`}>Home</a></li>
                <li className="mx-4"><a href="/about" className={`${location.pathname === '/about' && 'scale-150 font-medium' } duration-100 text-l hover:text-cyan-500 hover:underline underline-offset-4	`}>About</a></li>
                <li className="mx-4 relative " onMouseOver={()=>setDrop(true)} onMouseOut={()=>setDrop(false)}><span className={`${staticPath === '/products' && 'scale-150 font-medium' } hover:text-cyan-500 hover:underline underline-offset-4`}><a href="" className="duration-100 text-l	">Products</a>{drop ?<ChevronUp strokeWidth={0.75}  className='inline' onClick={()=>setDrop(!drop)}/>:<ChevronDown strokeWidth={0.75} className='inline' onClick={()=>setDrop(!drop)}/>}</span>
                {
                   drop &&
                    <div className={`lg:absolute w-full md:w-72 py-5 px-3 bg-white md:shadow text-black z-20`} >

                <ul className='leading-loose'>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href="/products/building_materials">Building Material</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/construction_materials'> Construction Material</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/commercial_steel_&_accessories'> Commercial Steel and Accessories</a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/scaffolding'> Scaffolding </a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/MEP_materials'> MEP Materials </a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/containers'> Containers </a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/safety_equipments'> Safety Equipments </a></li>
                    <li className='underline-offset-2 hover:underline focus:underline'><a href='/products/HVAC_&_air_conditioning_materials'> HVAC & Air Conditioning Materials </a></li>
                </ul>
                </div>
                }
                </li>
                
                <li className="mx-4"><a href="/contact" className={`duration-100 text-l hover:text-cyan-500 hover:underline underline-offset-4	`}>Contact</a></li>
            </ul>
        </div>
        <div className={`${menu ? 'block' :'hidden'} md:block links mt-4 md:mt-0 w-full md:w-auto`}>
            <button className="rounded-full bg-violet-950 text-white p-2 w-52 duration-100 hover:bg-violet-800">Download Catalogue</button>

        </div>
    </nav>
    
  )
}

export default Header