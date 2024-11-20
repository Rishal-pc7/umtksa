import { useState,useEffect } from 'react'
import logo from '../assets/wt-logo.svg'
import mainLogo from '../assets/logo-md.png'
import { MailIcon } from 'lucide-react'
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
    <div className="flex justify-between w-1/4">

    {show&&<div className="hidden md:flex fixed bottom-3  justify-between left-8  w-12 h-[60px] z-10" style={{background:`url(${mainLogo})`}}></div>}
    <div className="whatsapp">
            <a  target="_blank" href="mailto:sales@umtksa.com" className={`bottom-3 ${show ? 'right-4 md:right-auto md:left-24' : 'right-4 md:right-auto md:left-8'} text-lg gap-x-2 p-5 w-auto text-white`}>
               <MailIcon/> <span >For Enquires <span className='font-semibold text-xl'>sales@umtksa.com</span></span>
              
            </a>
    </div>
    </div>
    <div className=" whatsapp" onMouseOut={()=>setHover(false)} onMouseOver={()=>setHover(true)}  onFocus={()=>setHover(true)}  onBlur={()=>setHover(false)} >
            <a  target="_blank" href="https://wa.me/966542649546?text=I%27m%20interested%20in%20your%20Products" className='wtsp bottom-20 md:bottom-3 right-4 hover:p-5 gap-x-2 hover:w-auto'>

            <img src={logo} className={`${hover && '-ml-5'} h-7 w-12`} alt="" />
            {hover &&
            <p className='font-medium text-lg text-white'>+966 542 649546</p>
          }   
            </a>
    </div>
    
    </div>
  )
}

export default Widget 