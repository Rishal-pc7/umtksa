import { useState,useEffect } from 'react'
import logo from '../assets/wt-logo.svg'
import mainLogo from '../assets/logo-md.png'
function Widget() {
    const [hover,setHover] = useState(false)
    const [show,setShow] = useState(false)
    useEffect(() => {
      const handleScroll = () => {
          if (window.pageYOffset > 150) { // Adjust scroll position as needed
              setShow(true);
          } else {
              setShow(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
    <div className="">
    
    {show&&<div className="hidden md:flex fixed bottom-3  justify-between left-8  w-12 h-[60px] z-10" style={{background:`url(${mainLogo})`}}></div>}
    <div className=" whatsapp" onMouseOut={()=>setHover(false)} onMouseOver={()=>setHover(true)}  onFocus={()=>setHover(true)}  onBlur={()=>setHover(false)} >
            <a href="" className='wtsp hover:p-5 gap-x-2 hover:w-auto'>

            <img src={logo} className={`${hover && '-ml-5'} h-6 w-12`} alt="" />
            {hover &&
            <p className='font-medium text-base text-white'>+966 565 65 65544</p>
          }   
            </a>
    </div>
    </div>
  )
}

export default Widget 