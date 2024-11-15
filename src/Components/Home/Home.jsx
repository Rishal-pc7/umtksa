
import {   ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg3 from  '../../assets/hero-bg-3.jpeg'
import heroBg4 from  '../../assets/hero-bg-4.jpg'
import heroBg2 from  '../../assets/hero-bg-2.jpeg'
import about from '../../assets/about-home.jpg'
import heroBg1 from  '../../assets/hero-bg-1.jpeg'
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {  useState,useEffect } from "react";
import expoImg from '../../assets/expo.png'
import wcImg from '../../assets/saudiwc.png'
import visionImg from '../../assets/vision2030.png'
import buildingImg from '../../assets/building.jpg'
import constructionImg from '../../assets/construction.jpeg'
import steelImg from '../../assets/steel.jpeg'
import scaffoldingImg from '../../assets/scaffolding.jpeg'
import cablesImg from '../../assets/cables.jpeg'
import timberImg from '../../assets/timber.jpg'
import safetyImg from '../../assets/safety.jpg'
import elecImg from '../../assets/electricals.jpeg'
import finishingImg from '../../assets/finishing.jpg'
import hvacImg from '../../assets/hvac.jpg'
import ITImg from '../../assets/it.jpg'
import waterpImg from '../../assets/waterp.jpg'
import toolsImg from '../../assets/tools.jpg'
import eventsImg from '../../assets/events.jpg'
import containersImg from '../../assets/containers.jpg'
const details =[
    {
        id:1,
        imgurl:buildingImg,
        link:'/products/building_materials',
        name:'Building Materials',
        description:'We specialize in providing a comprehensive range of building materials that are meticulously selected to meet the ever-evolving demands of construction projects.',
        class:'from-left'
    },
    {
        id:2,
        imgurl:constructionImg,
        link:'/products/construction_materials',
        name:'Construction Materials',
        description:'We  specialize in providing a comprehensive range of construction materials essential for diverse projects, from residential builds to large-scale mega projects.',
        class:'from-left'
    },
    {
        id:3,
        imgurl:steelImg,
        link:'/products/commercial_steel',
        name:'Commercial Steel',
        class:'from-right',
        description:'We specialize in premium-grade steel and accessories tailored to the diverse requirements of the construction, events, and industrial sectors.'
    },
    {
        id:4,
        imgurl:scaffoldingImg,
        link:'/products/scaffolding_and_accessories',
        class:'from-right',
        name:'Scaffolding and Accessories',
        description:'Our range of Scaffolding and Accessories includes durable solutions designed for safety, stability, and ease of use in construction and industrial projects.'
    },
    {
        id:5,
        imgurl:cablesImg,
        link:'/products/cables_&_wires',
        class:'from-right',
        name:'Cables and Wires',
        description:'Our range of Cables and Wires offers reliable solutions for a wide variety of applications in construction, industrial, and event settings. '
    },
    {
        id:6,
        imgurl:timberImg,
        link:'/products/timber_&_plywood',
        class:'from-right',
        name:'Timber and Plywood',
        description:'Our selection of Timber and Plywood products offers durable and versatile solutions for both construction and event applications. '
        
    },
    {
        id:7,
        imgurl:safetyImg,
        link:'/products/fire_and_safety_supplies',
        class:'from-right',
        name:'Fire and Safety Supplies',
        description:'We prioritize the safety and well-being of your workforce '
        
    },
    {
        id:8,
        imgurl:elecImg,
        link:'/products/electrical_and_plumbing_materials',
        class:'from-right',
        name:'Electrical and Plumbing Materials ',
        description:'Our selection of Electrical and Plumbing Materials provides essential products for residential construction, events, and industrial projects'
        
    },
    {
        id:9,
        imgurl:elecImg,
        link:'/products/valves_&_pumps',
        class:'from-left',
        name:'Valves and Pumps ',
        description:'Our range of Pressure Valves and Pressure Pumps is designed to provide reliable control and system safety. '
        
    },
    {
        id:10,
        imgurl:finishingImg,
        link:'/products/finishing_materials',
        name:'Finishing Materials ',
        class:'from-left',
        description:'Our range of Finishing Materials includes products designed to enhance the aesthetic appeal and durability.'
        
    },
    {
        id:11,
        imgurl:hvacImg,
        link:'/products/air_conditioning_&_HVAC_equipments',
        name:'Air Conditioning & HVAC Equipments',
        class:'from-left',
        description:'We specialize in the trade of reliable air conditioning and HVAC equipment and accessories.'
        
    },
    {
        id:12,
        imgurl:ITImg,
        link:'/products/IT_&_networking_equipments',
        class:'from-left',
        name:'IT and Networking Equipments',
        description:'We offer a comprehensive range of IT equipment, networking materials, and accessories.'
        
    },
    {
        id:13,
        imgurl:waterpImg,
        link:'/products/waterproofing_&_thermal_insulation_materials',
        class:'from-right',
        name:'Waterproofing & Thermal Insulation Materials',
        description:'We specialize in providing high-quality waterproofing and thermal insulation materials.'
        
    },
    {
        id:14,
        imgurl:toolsImg,
        link:'/products/general_hardware_&_tools',
        class:'from-right',
        name:'General Hardware and Tools ',
        description:'We offer a comprehensive range of general hardware, tools, and accessories including Hand Tools,Power Tools etc.'
        
    },
    {
        id:15,
        imgurl:eventsImg,
        link:'/products/events_&_exhibition_supplies',
        class:'from-right',
        name:'Events and Exhibition supplies',
        description:'we provide a comprehensive range of event-related supplies designed to support the efficient and professional execution of events.'
        
    },
    {
        id:16,
        imgurl:containersImg,
        class:'from-right',
        link:'/products/used_&_modified_containers',
        name:'Used & Modified Containers',
        description:'We specialize in providing used and modified containers in a variety of sizes, including 10ft, 20ft, and 40ft containers, both standard and high cube options.'
        
    },
]
const hero= [
    {
        imgUrl:heroBg1,
    },
    {
        imgUrl:heroBg2,
        
    },
    {
        imgUrl:heroBg3,
        
    },
    
    {
        imgUrl:heroBg4,
        
    },

]
function Home() {
  
    
    const [hover,setHover]=useState()
    let navigate = useNavigate()
  return (
    <div className="">
    <Carousel className='h-screen w-full' plugins={[
        Autoplay({
          delay: 4000,
          })]}
          
        orientation="vertical"
    >
        <CarouselContent className="mt-0 h-screen w-full basis-full relative">
            {hero.map((data,index)=>{
                return(

           <CarouselItem key={index} style={{backgroundImage:`url(${data.imgUrl})`}} className="slider from-left relative right-0 h-screen w-full  bg-center bg-cover bg-no-repeat ">

        <div className="absolute inset-0 bg-white bg-gradient-to-r from-white from-20% to-transparent to-65% bg-opacity-25"></div>
        <div className="flex justify-center text-brand-blue flex-col items-start px-6 md:px-32 h-full ">

        {<p className={`font-semibold text-2xl md:text-5xl z-10`}   >Welcome to <span className="font-agency font-bold">UNITED MODE TRADING</span></p>}
        <p className="font-medium mt-3 text-base md:text-xl z-10">Reliable Partner in Material Supply for Construction Events and Industrial sectors </p>
        </div>
           </CarouselItem>
                )
            })}
        </CarouselContent>

    </Carousel>
    <div className="relative h-full bg-white">
    <div className="absolute right-0 w-12 h-full hidden md:block">
    <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>
        <div className="line line-5"></div>
    </div>
    <div className="p-12 md:p-36 justify-between flex flex-wrap bg-white h-screen  md:gap-x-4 overflow-hidden">

        <div className={`content md:w-1/2 from-left slider`} > 
            <p className="text-lg font-medium  text-brand-blue">Learn More About Us</p>
            <h2 className="text-3xl font-semibold text-brand-cyan md:text-4xl mt-2">Why Choose Us?</h2>
            <p className="text-lg font-normal mt-10 text-justify text-brand-blue">At UNITED MODE TRADING, we pride ourselves on being your trusted partner in delivering a broad range of materials tailored to meet the diverse demands of construction projects, event setups, and industrial operations. Drawing on deep industry expertise, we are committed to supplying required materials that align precisely with your project requirements.</p>
            <p className="text-lg text-justify font-normal mt-3 text-brand-blue">Our knowledgeable team ensures you receive the correct materials, supported by excellent service and prompt delivery. With a focus on building enduring partnerships, we are dedicated to delivering value, reliability, and consistency in every order.</p>
        
        </div>
        <img src={about} className={`w-full md:w-[40%] from-right slider bg-cover bg-center`}  alt="" />
    </div>
    
    <div className="h-auto py-10 px-4 md:px-32 pb-4 md:pb-32 overflow-x-hidden">
        <p className="text-center text-2xl py-14 md:text-3xl font-semibold tracking-widest uppercase text-[#0097bc]">Our Products</p>
        <div className="flex  flex-wrap mt-10 gap-3">
            
             {
                details.map((item,index)=>{
                    return(

                        <div key={index} className={`basis-full md:basis-[24%] relative h-[400px] rounded-xl bg-center bg-no-repeat ${item.class}  slider  `} style={{background:`url(${item.imgurl})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}} onMouseOver={()=>setHover(item.id)} onFocus={()=>setHover(item.id)} onBlur={()=>setHover()} onMouseLeave={()=>setHover()}>
                    <div className={`absolute inset-0 ${hover===item.id?"bg-gradient-to-b from-brand-blue to-brand-cyan opacity-50": "bg-brand-blue opacity-30"} flex items-center rounded-xl justify-center`}></div>
                    <div className="absolute bottom-3 h-2/3 px-5 w-full text-left z-50 flex flex-nowrap flex-col justify-end gap-y-4 items-end">

                          <p className="text-white w-full font-medium  text-xl">{item.name}</p>
                          {
                              hover === item.id &&
                              <p className="w-full text-white load">{item.description}</p>
                          }
                          <button className="p-2 w-10 border-2 border-white flex justify-between  text-white" onClick={()=>navigate(`${item.link}`)}><ArrowRight/></button>
                          
                    </div>


                    </div>
                    )
                })
            }
             
        </div>
        
    </div>
    <div className="curved bg-gradient-to-b overflow-hidden  md:h-[60vh] flex justify-between md:p-36 p-10" style={{clipPath:" ellipse(70% 100% at 50% 0)" }}>
        <img src={expoImg} className="h-20 md:h-40 marquee" alt="" />
        <img src={visionImg} className="h-20 md:h-40 marquee" alt="" />
        <img src={wcImg} className="h-20 md:h-40 marquee" alt="" />
    </div>
    
            </div>
    </div>
  )
}

export default Home