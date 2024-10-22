import heroImg from '../../assets/about-hero.jpg'
import ctaImg from '../../assets/cta.jpg'
import Timeline from '../ui/timeline'
function About() {
  return (
    <>
    <div style={{backgroundImage:`url('${heroImg}')`}} className='w-full relative  h-[75vh] bg-cover bg-center'>
    <div className='absolute bg-black inset-0 bg-opacity-45'></div>
    <div className="flex justify-center text-white flex-col items-center h-full ">

        <p className="font-bold text-3xl md:text-5xl z-10">About Us</p>
        <p className="font-medium  text-center mt-5 text-lg md:text-xl z-10 md:w-1/2">We build lasting partnerships by delivering innovative construction solutions, dedicated craftsmanship, and customized project strategies, ensuring quality, safety, and growth for every build.</p>
        </div>

    </div>
    <div className="md:p-32 p-12 h-auto w-full">

    <div className="flex w-full flex-wrap md:flex-nowrap gap-x-5 pb-20 text-black">
        <div className="w-full md:w-1/2">
        <h1 className='font-extrabold  text-slate-500 text-md uppercase'>Who we are</h1>
        <h1 className='font-bold text-left text-xl md:text-4xl mt-3 md:leading-[3rem] leading-8'>
        We build construction solutions that ensure your projects succeed and stand strong for years to come.
        </h1>
        </div>
        <div className="w-full md:w-1/2">
        <h1 className='font-normal text-slate-500 text-lg md:text-xl mt-4 md:mt-10'>
        We started as a statement against the sloppy professional standards that dominated the field of construction services 20 years ago. We wanted to set a new, high standard and work as consultants, solving our client&apos;s problems.
        The company quickly grew and cemented itself as the new golden standard in commercial construction. Today we continue to build on that legacy and strive for excellence in everything we do.
        </h1>
        </div>

    </div>
        <hr className="w-full border-gray-300 my-4"/>
        <div className="flex w-full flex-wrap md:flex-nowrap mt-4">
          <div className="w-full flex md:justify-center flex-col">
                <h2 className='font-bold text-xl md:text-4xl mt-3 text-center'>Our Vision & Mission</h2>
                <Timeline/>
          </div>

        </div>
    </div>
    <div className="w-full relative h-[50vh] md:h-[70vh] bg-cover bg-center md:bg-right mb-10" style={{backgroundImage:`url('${ctaImg}')`}}>
    <div className='absolute bg-black inset-0 bg-opacity-45'></div>
    <div className="flex justify-center text-white flex-col items-center h-full ">

        <p className="font-bold text-3xl md:text-5xl z-10">Let’s Build Together</p>
        <p className="font-normal  text-center mt-5 text-lg md:text-xl z-10 md:w-1/2">Got a project in mind? Contact us today for expert guidance and a free quote. We’re ready to bring your vision to life!</p>
        <button className='rounded bg-cyan-700 py-2 px-5 text-white z-10 mt-4 hover:bg-cyan-500' >Contact Us</button>
        </div>

    </div>
    </>
  )
}

export default About