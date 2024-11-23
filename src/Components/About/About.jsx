import { useEffect } from 'react'
import heroImg from '../../assets/about-hero.jpg'
import cmMessage from '../../assets/cm-msg.jpeg'
function About() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
    <>
    <div style={{backgroundImage:`url('${heroImg}')`}} className='w-full relative slider from-left h-[75vh] bg-cover bg-center'>
    <div className='absolute bg-slate-500 inset-0 bg-opacity-45'></div>
    <div className="flex justify-center text-white flex-col items-center h-full ">

        <p className="font-bold text-3xl md:text-5xl z-10">About Us</p>
        <p className="font-normal  px-4 md:px-0 text-justify mt-5 text-lg md:text-xl z-10 md:w-1/2">With over 20 years of industry experience, UNITED MODE TRADING stands as a formidable leader in the construction and industrial sectors. Our deep-rooted expertise equips us to navigate the complexities and demands of these industries, ensuring that we deliver superior materials and unwavering support for every project.</p>
        </div>

    </div>
    <div className="md:p-32 p-12 h-auto w-full">

    <div className="flex w-full flex-wrap md:flex-nowrap gap-x-5 pb-20 text-brand-cyan" lang='en-US'>
        <div className="w-full md:w-1/2 m slider from-left">
        <h1 className='font-extrabold  text-lg uppercase'>Who we are</h1>
        <h1 className='font-bold text-justify text-xl md:text-4xl mt-3 md:leading-[3rem] leading-8'style={{wordBreak:'break-all'}} >
        We are a dedicated supplier of essential materials for Construction, Events, Industrial, and Manufacturing sectors, focused on timely delivery.
        </h1>
        </div>
        <div className="w-full md:w-1/2 slider from-right">
        <h1 className='font-normal text-justify text-brand-blue text-lg md:text-xl mt-4 md:mt-10'>
        We are firm believers in the power of collaboration and the importance of forging enduring partnerships with our clients. Our team of seasoned professionals is dedicated to supplying a comprehensive range of materials, precisely tailored to meet the exacting demands of construction, events, and industrial applications.
        <br/>Thank you for choosing UNITED MODE TRADING as your trusted supplier. We are committed to playing a pivotal role in the continued success of your projects and delivering exceptional results.
        </h1>
        </div>

    </div>
        <hr className="w-full border-gray-300 my-4"/>
              <div className="flex flex-col px-1 md:p-4 slider from-left">
                 <div className="text-blue font-bold text-xl md:text-3xl text-brand-cyan">Our Mission </div>
                 <div className="text-blue font-normal text-xl text-justify mt-4 text-brand-blue">At UNITED MODE TRADING, our mission is to be your steadfast partner in the project material trading industry. We are dedicated to delivering reliable service and ensuring the timely provision of materials that cater to the diverse needs of our clients in the construction, events, and industrial sectors. Our commitment lies in fostering enduring relationships founded on integrity, transparency, and shared success.</div>
             </div>    
              <div className="flex flex-col mt-5 px-1  md:p-4 slider from-left">
                 <div className="text-blue font-bold text-xl md:text-3xl text-brand-cyan">Our Vision</div>
                 <div className="text-blue font-normal text-xl text-justify text-brand-blue mt-4 text-br">Our vision is to set the benchmark as the premier provider in the project materials sector, celebrated for our vast selection and exemplary service. We constantly innovate and adapt to client needs, ensuring our solutions are not only relevant but industry-leading. Through a commitment to excellence and customer focus, we’re driven to support the success of every project we supply</div>
             </div>    

    </div>
    <div className="w-full relative h-[90vh] md:h-[70vh] bg-cover bg-center md:bg-right mb-10 slider from-right"  style={{backgroundImage:`url('${cmMessage}')`}}>
    <div className='absolute bg-black inset-0 bg-opacity-50'></div>
    <div className="flex justify-center text-white flex-col items-center h-full ">

        <p className="font-bold text-3xl md:text-5xl z-10">Chairman’s Message</p>
        <p className="font-normal px-4 md:px-0 md:w-[90%]  text-justify mt-5 text-lg md:text-xl z-10 ">As Chairman, it is my privilege to welcome all our valued clients and partners. With over 20 years of industry experience, I’ve seen our sector evolve and demands intensify. UNITED MODE TRADING remains steadfast in our commitment to excellence, upholding our core values of integrity, quality, and service to support your success. We take great pride in ensuring our clients receive precisely what they need, when they need it, bolstered by our dedicated team’s adherence to our core values of integrity and quality. I am confident that these values will guide us in fostering enduring partnerships and contributing to the success of your projects. We thank you for choosing us as your trusted material supplier</p>
        </div>

    </div>
    </>
  )
}

export default About