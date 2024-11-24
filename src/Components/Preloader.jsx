import mainLogo from '../assets/logo-md.png'

function Preloader() {
  return (
    <div className='w-full h-full absolute bottom-0 bg-white top-0 left-0'>
       <div className='w-full h-full flex justify-center items-center'>
        <img src={mainLogo} className='md:h-20 h-12 bouncing' alt="" />
       </div>
    </div>
  )
}

export default Preloader