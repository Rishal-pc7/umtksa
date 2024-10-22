import { MdOutlineStar } from "react-icons/md";
import { Carousel, CarouselContent,CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import esab from '../../assets/esab.jpg'
import knipex from '../../assets/knipex.jpg'
import wacker from '../../assets/wacker.jpg'
import bosch from '../../assets/bosch.png'
import dewalt from '../../assets/dewalt.png'
const details =[
    {
        id:1,
        imgurl:'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=329,fit=crop/AoPvzO5V3aUwpJNO/pexels-shvetsa-4312856-YanyO8qKLvtnZL8w.jpg',
        link:'',
        name:'Hardware Essentials'
    },
    {
        id:2,
        imgurl:'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=329,fit=crop/AoPvzO5V3aUwpJNO/pexels-anastasia-shuraeva-9606949-mnlvZj9LnRTrrNRr.jpg',
        link:'',
        name:'Plumbing Solutions'
    },
    {
        id:3,
        imgurl:'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=330,fit=crop/AoPvzO5V3aUwpJNO/pexels-sergei-a-1322276-2539462-YD06ykwOrzUN0QZ0.jpg',
        link:'',
        name:'HVAC Materials'
    },
    {
        id:4,
        imgurl:'https://images.unsplash.com/photo-1650630718105-497674381f3c?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHN8ZW58MHx8fHwxNzI4NDkzMzY3fDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=656&h=329',
        link:'',
        name:'Safety Equipments'
    },
]
function Home() {
  return (
    <div className="">

    <div style={{backgroundImage:"url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1600,fit=crop/AoPvzO5V3aUwpJNO/pexels-rezwan-1216589-YD06ypDwjpHv9vK6.jpg')"}} className="relative h-screen bg-center bg-cover">
        <div className="absolute inset-0 bg-black bg-opacity-25 "></div>
        <div className="flex justify-center text-white flex-col items-center h-full ">

        <p className="font-bold text-3xl md:text-5xl z-10">Your Reliable Supplier</p>
        <p className="font-medium mt-3 text-lg md:text-xl z-50 ">For Constructions and Industrial materials</p>
        </div>
    </div>
    <div className="h-auto bg-blue-950  text-white flex flex-wrap">
        <div className="content md:w-1/2 p-12 md:p-36"> 
            <h2 className="text-3xl font-bold md:text-4xl">Why Choose Us?</h2>
            <p className="text-lg font-medium md:text-xl mt-3 leading-10">United Mode deals with a wide range of building materials, including steel goods, cement, plumbing, electrical, and hardware supplies, allowing us to meet all of the needs of our clients and partners.</p>
            <p className="text-lg font-medium md:text-xl mt-3">We strive for the highest level of client satisfaction by using high-quality building materials and offering the best prices.</p>
        <div className="details  flex">
            <button className="rounded-full bg-blue-400 w-40 p-4 mt-6">Call Now</button>
            <div className="rating ml-4 mt-10 " >
                <span className="flex"><MdOutlineStar/><MdOutlineStar/><MdOutlineStar/><MdOutlineStar/><MdOutlineStar/></span>
                <p className="text-sm text-white">Top rated by 100+ clients </p>
            </div>
        </div>
        </div>
        <div className="images transform md:skew-x-12 inset-x-0 w-full md:w-1/3">
            <img className="h-full" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=856,fit=crop/AoPvzO5V3aUwpJNO/pexels-quang-nguyen-vinh-222549-2138126-AoPvn5xVrDTZo8n9.jpg" alt="" />
        </div>
    </div>
    <div className="h-auto py-10 px-4 md:px-10 bg-slate-50">
        <p className="text-center text-3xl md:text-4xl font-bold">Our Products</p>
        <p className="text-center text-base md:text-lg font-normal mt-4">We provide top-notch construction materials, plumbing supplies, and hardware for all your project needs.</p>
        {/* <div className="flex  flex-wrap mt-10">
             <div className="w-1/2 relative h-[28em]">
             <img className="rounded-xl" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=329,fit=crop/AoPvzO5V3aUwpJNO/pexels-shvetsa-4312856-YanyO8qKLvtnZL8w.jpg" alt="" />
             <div className="absolute bg-white w-[80%] h-48 top-2/4 left-[5%] flex flex-col justify-center items-center py-16 px-14">
                <p className="text-xl md:text-2xl font-bold">Hardware Essentials</p>
                <p className="text-sm md:text-base font-normal text-center mt-2">A wide range of hardware products to support your construction and renovation projects with quality assurance.</p>
                <button className="rounded-full p-3 bg-cyan-700 text-white mt-4">View All Products</button>
             </div>
             </div>
             
        </div> */}
        <div className="flex flex-wrap md:flex-nowrap md:gap-x-6 mt-10 px-0 md:px-36">
            {
                details.map((detail)=>{
                  return(

                      <div key={detail.id} className= "w-full  md:w-1/3 flex relative h-96 bg-cover bg-center mb-8 " style={{backgroundImage:`url(${detail.imgurl})`}}>
                        <div className="absolute inset-0 bg-gray-300 bg-opacity-25"></div>
                        <div className="flex justify-end text-white flex-col items-center h-full w-full pb-4">
                            <p className="font-bold text-xl md:text-2xl z-10">{detail.name}</p>
                            <button className="rounded-full p-3 bg-cyan-700 text-white mt-4">View All Products</button>
                       </div>
                    </div>
                    )
                })
            }
            

        </div>
    </div>
    <Carousel className='w-full h-auto p-4 md:p-24 bg-slate-50' plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-16">Brands we deal With</h1>
        <CarouselContent className='flex justify-between w-full '>
        <CarouselItem className="basis-1/2 md:basis-1/4"><img src={esab} alt="" /></CarouselItem>
        <CarouselItem className="basis-1/2 md:basis-1/4"><img src={bosch} alt="" /></CarouselItem>
        <CarouselItem className="basis-1/2 md:basis-1/4"><img src={knipex} alt="" /></CarouselItem>
        <CarouselItem className="basis-1/2 md:basis-1/4"><img src={dewalt} alt="" /></CarouselItem>
        <CarouselItem className="basis-1/2 md:basis-1/4"><img src={wacker} alt="" /></CarouselItem>
        <CarouselItem className="basis-1/2 md:basis-1/4"><img src={wacker} alt="" /></CarouselItem>
        <CarouselItem className="basis-1/2 md:basis-1/4"><img src={wacker} alt="" /></CarouselItem>
        <CarouselItem className="basis-1/2 md:basis-1/4"><img src={wacker} alt="" /></CarouselItem>
        </CarouselContent>

    </Carousel>
    </div>
  )
}

export default Home