import { useParams } from "react-router-dom"
import { Carousel, CarouselContent,CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import esab from '../../assets/esab.jpg'
import knipex from '../../assets/knipex.jpg'
import wacker from '../../assets/wacker.jpg'
import bosch from '../../assets/bosch.png'
import dewalt from '../../assets/dewalt.png'
import { useState } from "react";

function Products() {
    
    const { category } = useParams();
    const [hover,setHover] = useState()
    const details=
    {
        building_materials :[
            {src:'/building-materials/hero.jpg',content:"At \\UNITED MODE TRADING\\, we specialize in providing a comprehensive range of building materials that are meticulously selected to meet the ever-evolving demands of construction projects, regardless of their size or scope. Our offerings cover high-end finishing materials and ensure that we support your project at every stage.We are committed to uncompromising quality, sourcing materials only from the most trusted suppliers, ensuring that every product we deliver is built to last and capable of withstanding the challenges of time. Our team of highly skilled professionals ensures you receive the precise materials your project requires, backed by expert guidance and support.With an unwavering focus on punctual delivery and exceptional service, we are your reliable partner in securing the highest standard of building materials, every time, without compromise.",list:['General Construction Requirements','Temporary Fencing Solutions','Aggregates (Sand, Gravel, etc.)','Cement','Concrete blocks and bricks']},
            {id:2,src:`/building-materials/3.jpg`},
            {id:1,src:`/building-materials/2.jpg`},
            {id:3,src:`/building-materials/1.jpg`},
            {id:4,src:`/building-materials/4.jpg`},
            {id:4,src:`/building-materials/5.jpg`},
            {id:4,src:`/building-materials/6.jpg`},
        ],
        construction_materials :[
            {src:'/construction-materials/hero.jpg',content:"At \\UNITED MODE TRADING\\, we specialize in providing a comprehensive range of construction materials essential for diverse projects, from residential builds to large-scale mega projects.Understanding that each construction endeavor has its own unique requirements, our experienced team is committed to delivering all materials efficiently and to the highest standards.With a focus on timely delivery and competitive pricing, we strive to support our clients in achieving their project objectives, while upholding the utmost standards of safety and reliability. We are here to be your trusted partner in securing the materials necessary for the success of your construction ventures.",list:['Block & Plastering work Accessories','Construction Chemicals & Adhesives']},
            {id:1,src:`/construction-materials/1.jpg`},
            {id:2,src:`/construction-materials/2.jpg`,content:""},
            {id:3,src:`/construction-materials/3.jpg`,content:"",},
        ],
        
        commercial_steel:[
            
        {src:'/commercial-steel/steel-hero.jpg',content:"At \\UNITED MODE TRADING\\, we specialize in premium-grade steel and accessories tailored to the diverse requirements of the construction, events, and industrial sectors. With years of expertise in trading and supplying reliable, durable materials, we offer an extensive range of commercial steel and accessories to ensure you have everything needed for successful, enduring projects",listHead:'Our Product Offerings',list:['Structural Steel:\\We supply a wide range of structural steel products, including I-beams, channels, angles, and HSS (hollow structural sections) etc.','Steel Sheets and Plates:\\Offered in various thicknesses and grades, including options for flooring, paneling, and custom fabrication, as well as corrugated and roofing sheets for durable, weather-resistant roofing and exterior applications.','Pipes and Tubing:\\From round, square, and rectangular tubing to specialized pipes, we have options for both structural and mechanical applications.','Steel Fasteners and Accessories:\\Our collection of bolts, nuts, washers, and other fasteners ensures secure connections in all types of steelwork. We stock a wide array of sizes and finishes to meet diverse project requirements']},
        {src:`/commercial-steel/1.jpg`},
        {src:`/commercial-steel/2.jpg`},
        {src:`/commercial-steel/3.jpg`},
        {src:`/commercial-steel/4.jpg`},
        {src:`/commercial-steel/5.jpg`},
        {src:`/commercial-steel/6.jpg`},
    ],
    timber_and_plywood:[
        
        {src:'/timber-plywood/timber-hero.jpg',content:"Our selection of Timber and Plywood products offers durable and versatile solutions for both construction and event applications. Timber provides natural strength and aesthetic appeal, perfect for framing, flooring, and interior finishes. Our plywood sheets, available in various grades and thicknesses, are ideal for structural uses, custom fabrication, and event setups such as staging, partitions, and display elements. Whether for permanent structures or temporary event installations, our timber and plywood materials combine durability, flexibility, and visual appeal to meet your project needs."},
        {src:`/timber-plywood/1.jpg`},
        {src:`/timber-plywood/2.jpg`},
        {src:`/timber-plywood/3.jpg`},
        {src:`/timber-plywood/4.jpg`},
        {src:`/timber-plywood/5.jpg`},
        {src:`/timber-plywood/6.jpg`},
    ],
    scaffolding_and_accessories:[
            
        {src:'/scaffolding/scaf-hero.jpg',content:"Our range of Scaffolding and Accessories includes durable solutions designed for safety, stability, and ease of use in construction and industrial projects. We offer a variety of scaffolding types, including Cuplock scaffolding, aluminum scaffolding, and Ring Lock systems, providing strong support for elevated work. In addition to the scaffolding frames, we supply all necessary accessories such as ladders, base plates, braces, adjustable jack, ring props, double coupler, and more, ensuring secure and efficient setup for any project. Whether you're working on a large construction site or a temporary event setup, our scaffolding systems are engineered to meet safety standards while offering flexibility and durability."},
        {src:`/scaffolding/1.jpg`},
        {src:`/scaffolding/2.jpg`},
        {src:`/scaffolding/3.jpg`},
        {src:`/scaffolding/4.jpg`},
        {src:`/scaffolding/5.jpg`},
        {src:`/scaffolding/6.jpg`},
    ],
    fire_and_safety_supplies:[
            
        {src:'/fire-safety/fire-hero.jpg',content:"At \\UNITED MODE TRADING\\, we prioritize the safety and well-being of your workforce. Our comprehensive range of Fire, Health, and Safety products is specifically designed to meet the demanding requirements of construction, industrial, and event sectors. We offer reliable solutions that ensure compliance, reduce risks, and protect both personnel and property.We provide products that meet the highest industry standards, ensuring your team is equipped to handle emergencies and maintain a secure working environment",listHead:'Our Offerings Include:',list:['Fire Extinguishers','Smoke Detectors','Fire Blankets','Emergency Lighting','First Aid Kits','Safety Signage','Safety Barriers','Personal Protective Equipment (PPE)']},
        {src:`/fire-safety/1.jpg`},
        {src:`/fire-safety/2.jpg`},
        {src:`/fire-safety/3.jpg`},
        {src:`/fire-safety/4.jpg`},
        {src:`/fire-safety/5.jpg`},
        {src:`/fire-safety/6.jpg`},
    ],
    cables__wires:[
            
        {src:'/cables-wires/cables-hero.jpg',content:"Our range of Cables and Wires offers reliable solutions for a wide variety of applications in construction, industrial, and event settings. We supply high-quality power cables, control cables, and flexible wires designed to meet safety standards and ensure efficient power distribution. Our products include copper and aluminum wiring, along with specialized cables for specific uses such as fire-resistant, low-voltage, and high-temperature environments. Whether for heavy-duty electrical installations or temporary setups, our cables and wires are built to provide durability, flexibility, and dependable performance."},
        {src:`/cables-wires/1.jpg`},
        {src:`/cables-wires/2.jpg`},
        {src:`/cables-wires/3.jpg`},
        
    ],
    electrical_and_plumbing_materials:[
        
        {src:'/electrical-plumbing/elec-hero.jpg',content:"Our selection of Electrical Materials provides essential products for residential construction, events, and industrial projects. We offer a wide variety of electrical supplies, including wiring, conduits, junction boxes, circuit breakers, connectors, panelboard, switches, and plates, ensuring safe and efficient power distribution.\nFor Plumbing Materials, we supply durable pipes, fittings, valves, seals, and faucets, designed for use in construction, maintenance, and repair applications. We offer a variety of pipes including PVC, UPVC, CPVC, HDPE, and PPR, all built to withstand demanding conditions and meet industry standards. These materials are ideal for both residential, construction and industrial installations, ensuring reliable and long-lasting performance in water supply, drainage, and sewage systems."},
        {src:`/electrical-plumbing/1.jpg`},
        {src:`/electrical-plumbing/2.jpg`},
        {src:`/electrical-plumbing/3.jpg`},
        {src:`/electrical-plumbing/4.jpg`},
        {src:`/electrical-plumbing/5.jpg`},
        {src:`/electrical-plumbing/6.jpg`},
        
    ],
    valves__pumps:[
        
        {src:'/valves-pumps/valves-hero.jpg',content:"Our range of Pressure Valves is designed to provide reliable control and system safety. We offer a variety of pressure relief valves, pressure regulating valves, and check valves to ensure optimal pressure control in water, fluid, and air systems. These valves are built for durability and precision, making them ideal for residential, industrial, and construction applications where accurate pressure management is crucial.\nOur selection of Pressure Pumps, including positive displacement pumps and submersible pumps, are engineered to deliver consistent and efficient flow. These pumps are suitable for residential, industrial, and construction applications, providing reliable performance, energy efficiency, and durability in various water and fluid handling systems."},
        {src:`/valves-pumps/1.jpg`},
        {src:`/valves-pumps/2.jpg`},
        {src:`/valves-pumps/3.jpg`},
        {src:`/valves-pumps/4.jpg`},
        {src:`/valves-pumps/5.jpg`},
        {src:`/valves-pumps/6.jpg`},
        
    ],
    finishing_materials:[
        
        {src:'/finishing-materials/finishing-hero.jpg',content:"Our range of Finishing Materials includes products designed to enhance the aesthetic appeal and durability of residential, commercial, and industrial projects. We offer a variety of materials such as paints, primers, varnishes, wallpapers, flooring, decorative tiles, gypsum, gypsum board, cement board, MDF veneer paneling materials, and wall and ceiling finishing solutions, ensuring a polished and professional finish for every space.",list:['Flooring Materials:\\Flooring materials include various types of materials like hardwood, vinyl, ceramic tiles, and carpets, used to create functional and aesthetic floor surfaces. These materials are selected based on durability, style, and maintenance needs.','Wall Finishing Materials:\\Wall finishing materials are products like paints, wallpapers, and plaster used to enhance and protect wall surfaces. They offer both decorative and protective functions while contributing to the overall look of interior spaces.',"Cladding Materials:\\Cladding materials are applied to the exterior of buildings to protect and decorate walls. Options include wood, metal, stone, and vinyl, improving the building's insulation and aesthetic appeal","Gypsum Finishing & Accessories:\\Gypsum finishing and accessories involve materials like gypsum boards, plaster, and joint compounds used to create smooth, seamless wall and ceiling surfaces. These materials are easy to install and durable, often used in interior construction.","Paint & Epoxy Finishing:\\Paint and epoxy finishing includes paints for color and decoration, and epoxy coatings for added durability and chemical resistance. Epoxy is commonly used on floors and surfaces needing extra protection."]},
        {src:`/finishing-materials/1.jpg`},
        {src:`/finishing-materials/2.jpg`},
        {src:`/finishing-materials/3.jpg`},
        {src:`/finishing-materials/4.jpg`},
        {src:`/finishing-materials/5.jpg`},
        {src:`/finishing-materials/6.jpg`},
        
    ],
    air_conditioning__HVAC_equipments:[
            
        {src:'/ac-hvac/ac-hero.jpg',content:"We specialize in the trade of reliable air conditioning and HVAC equipment and accessories, serving a wide range of sectors, including residential, commercial, construction, industrial, and events. Our comprehensive product portfolio includes energy-efficient air conditioners, advanced heating and cooling systems, ventilation solutions, and essential accessories such as thermostats, filters, and ducting. Whether outfitting homes, commercial properties, construction sites, industrial facilities, or managing climate control for events, we deliver customized, market-ready solutions to meet your specific needs. In collaboration with trusted manufacturers, we ensure all products are durable, efficient, and competitively priced. We also provide expert guidance and seamless support throughout each stage of your project, ensuring optimal indoor climate solutions tailored to your requirements.",listHead:'Our Air Conditioning Types Include:',
            list:[
                'Split System AC:\\ Ideal for both residential and commercial spaces, offering quiet operation and efficient cooling.',
                'Window AC Units:\\ Compact and cost-effective solutions for single rooms or smaller spaces.',
                "Ducted AC Systems:\\ Perfect for larger homes or commercial buildings, offering centralized control and discreet installation.",
                "Portable Air Conditioners:\\ Flexible and easy-to-install options for temporary or mobile cooling needs.",
                "VRF/VRV Systems (Variable Refrigerant Flow/Volume):\\ Energy-efficient, scalable systems ideal for large buildings or multi-zone applications.",
                "Cassette Air Conditioners:\\ Ceiling-mounted units that distribute cool air evenly across the room, perfect for commercial or office spaces.",
                "Floor-Standing Air Conditioners:\\ Flexible, space-saving units ideal for cooling larger areas or where wall-mounted systems are not feasible. Perfect for both residential and commercial use. "
            ],
            listHead2:'A/C & HVAC Accessories:',
            list2:["Thermostats:\\ Programmable and smart thermostats for precise temperature control and energy efficiency.",
                "Air Filters:\\ High-efficiency filters to improve indoor air quality and ensure optimal system performance.",
                "Ducting:\\ Flexible and durable ducts for efficient airflow in residential, commercial, and industrial settings.",
                "Condensate Pumps:\\ Essential for draining condensation in HVAC systems, ensuring smooth operation.",
                "Refrigerant:\\ High-quality refrigerants for system recharge and maintenance.",
                "Ventilation Grills & Diffusers:\\ Stylish and functional ventilation solutions to enhance air distribution and system efficiency."
            ]    
        },
        {src:`/ac-hvac/1.jpg`},
        {src:`/ac-hvac/2.jpg`},
        {src:`/ac-hvac/3.jpg`},
        {src:`/ac-hvac/4.jpg`},
        {src:`/ac-hvac/5.jpg`},
        {src:`/ac-hvac/6.jpg`},
        
    ],
    IT__networking_equipments:[
            
        {src:'/it/it-hero.jpg',content:"We offer a comprehensive range of IT equipment, networking materials, and accessories designed to meet the diverse needs of all business sectors, from small startups to large enterprises. Our product selection includes high-performance laptops, desktops, servers, workstations, storage devices, gadgets, interactive screens, and monitors, ensuring you have the latest technology to support your operations. Additionally, we provide essential networking hardware such as switches, routers, firewalls, and cables, as well as a wide range of accessories including connectors, patch panels, cable management tools, and network adapters. Whether you're building a robust IT infrastructure, upgrading your network, or enhancing your workspace with new tech, we provide reliable, scalable, and secure solutions that ensure your business stays ahead. With trusted brands and top-quality materials, we offer market-ready products that deliver performance, efficiency, and security across all applications. As a leading trader of IT and networking products, we are dedicated to helping businesses of all sizes stay connected, increase productivity, and thrive in the digital age."},
        {src:`/it/1.jpg`},
        {src:`/it/2.jpg`},
        {src:`/it/3.jpg`},
        {src:`/it/4.jpg`},
        {src:`/it/5.jpg`},
        {src:`/it/6.jpg`},
        
    ],
    waterproofing__thermal_insulation_materials:[
        
    {src:'/waterproofing/waterproofing-hero.jpg',content:"We specialize in providing high-quality waterproofing and thermal insulation materials designed to meet the demanding needs of the construction and industrial sectors. Our product range includes advanced solutions for protecting structures from water ingress, moisture damage, and thermal fluctuations, ensuring long-lasting durability and energy efficiency. Whether you're working on commercial buildings, industrial facilities, infrastructure projects, construction projects, or repair works, we deliver all required materials to your project sites on time, ensuring smooth progress and timely completion. We partner with trusted manufacturers to deliver reliable, cost-effective solutions that meet industry standards and environmental regulations, helping you achieve high-performance results on every project.",listHead:'Our Products Include:',
        list:['Bituminous membrane waterproofing',
              'PVC membrane Waterproofing',
              'EPDM (Rubberized) membrane waterproofing',
              'HDPE Membrane Waterproofing',
              'Spray polyurethane Waterproofing',
              'Cementitious Waterproofing',
              'Waterproof Sealants & Aluminum Flashing',
              'Damp-Proofing Systems',
              'Thermal Insulation Rigid Boards',
              'Reflective Insulation Materials',
              'Acrylic Waterproofing',
              'Waterstops & Waterbars',
              'Waterproofing Injection works and flanges',
              'Ancillary Products & Accessories']},
    {src:`/waterproofing/1.jpg`},
    {src:`/waterproofing/2.jpg`},
    {src:`/waterproofing/3.jpg`},
    {src:`/waterproofing/4.jpg`},
    {src:`/waterproofing/5.jpg`},
    {src:`/waterproofing/6.jpg`},
],
general_hardware__tools:[
    {src:'/hardware-tools/hardware-hero.jpg',content:"We offer a comprehensive range of general hardware, tools, and accessories tailored to meet the diverse needs of the construction, industrial sector, and event management industries. Our product selection includes high-quality tools and materials designed to ensure efficiency, safety, and high performance for every type of project. Whether you're building structures, maintaining machinery, or organizing large-scale events, we provide reliable solutions sourced from trusted brands for durability and precision. We also offer a variety of event-specific accessories, such as temporary staging systems, lighting fixtures, and crowd control barriers. With timely delivery and competitive pricing, we are committed to providing the right solutions to help you complete your projects on time and to the highest standard.",listHead:'Our Products Include:',
        list:['Hand Tools:\\ Hammers, screwdrivers, pliers, wrenches, utility knives, and more for everyday tasks.',
              'Power Tools:\\ Drills, saws, grinders, sanders, and impact drivers for heavy-duty work.',
              'Fasteners:\\ Nails, screws, bolts, nuts, washers, anchors, and other essential fixings.',
              'Ladders:\\ Step ladders, extension ladders, and platform ladders for safe and efficient access.',
              'General Hardware:\\ Hinges, locks, brackets, chains, adhesives, tapes, and more.',]},
    {src:`/hardware-tools/1.jpg`},
    {src:`/hardware-tools/2.jpg`},
    {src:`/hardware-tools/3.jpg`},
],
events__exhibition_supplies:[
    {src:'/events/events-hero.jpg',content:"At \\UNITED MODE TRADING\\, we provide a comprehensive range of event-related supplies designed to support the efficient and professional execution of events, from corporate conferences to large-scale public gatherings. Our offerings ensure that your event runs smoothly, safely, and professionally, with products tailored to meet the unique needs of any event type",listHead:'Our Product Offerings Include:',
        list:['Event Production Supplies',
              'Hospitality Supplies',
              'Crowd Control Barriers',
              'Temporary Fencing',
              'Police Barriers',
              'Traffic Cones',
              'Cables & Cable Ramps',
              'Stickers',
              'Warning Signs',
              'First Aid Kits',
              'Personal Protective Equipment (PPE)',
              'Signage’s',
              'Carpets', 
	          'External & Internal Parquet', 
              'Curtains',
              'Vinyl Floorings',
              'Cleaning Supplies',
              'Finishing Materials',
            ]},
            {src:`/events/1.jpg`},
            {src:`/events/2.jpg`},
            {src:`/events/3.jpg`},
        ],
used__modified_containers :[
    {src:'/containers/containers-hero.jpg',content:"We specialize in providing used and modified containers in a variety of sizes, including 10ft, 20ft, and 40ft containers, both standard and high cube options, tailored to meet your specific needs.With sizes ranging from 10ft to 40ft, we deliver customized, durable container solutions that can be easily transported, set up, and adapted for any project or site.",listHead:'Our modified containers are ideal for a wide range of applications, including:',
        list:['Manager or Staff Offices:\\ Custom-built office spaces for operations, meetings, and administration.',
              'VIP and Standard Toilets:\\ Fully equipped restroom solutions for both standard and VIP needs.',
              'Differently-Abled Accessible Restrooms:\\ Designed to provide comfortable and compliant restroom facilities for people with disabilities.',
              'Warehouses:\\ Secure, durable storage solutions for inventory, equipment, and supplies.',
              'Guard Rooms:\\ Secure units for security personnel, providing a safe and functional workspace.',
              'Masjids:\\ Modified containers to create portable, functional spaces for prayer and religious activities.',
            ]},
        {src:`/containers/1.jpg`},
        {src:`/containers/2.jpg`},
        {src:`/containers/3.jpg`},
        {src:`/containers/4.jpg`},
        {src:`/containers/5.jpg`},
        {src:`/containers/6.jpg`},
    ],
    
}
    
    return (
        <>
         <div className="slider from-left h-[85vh] w-full relative" style={{background:`url(${details[category.split('&').join('')][0].src})`,backgroundPosition:'center',backgroundSize:'cover'}}>
        <div className="absolute inset-0 bg-white bg-opacity-25"></div>

            
    </div>
               <h1 className="capitalize font-medium  mt-16 z-50 text-xl md:text-4xl text-center text-brand-cyan" >{category?.split('_').join(' ')}</h1>
         <div className="content px-8 md:px-24 mt-14 text-lg w-full ">
            <h1 className="text-brand-blue text-xl text-justify leading-relaxed slider from-right">{details[category.split('&').join('')][0].content.split('\n').map((str,index) =>{ 
                return(
                    <p className="mt-4" key={index}>{str.split('\\').map((content,index)=>  <span className={`${index === 1 && 'text-brand-cyan font-semibold'}`} key={index}>{content}</span>)}</p>

                )
                
                })}</h1>
            <p className="mt-2 md:mt-5 text-brand-blue text-xl text-justify leading-relaxed slider from-right font-semibold">{details[category.split('&').join('')][0].listHead }</p>
            {
                details[category.split('&').join('')][0].list &&
                <ul className="mt-4 text-brand-blue text-xl font-medium slider text-justify from-right">
                   {
                    details[category.split('&').join('')][0].list.map((item,index)=>{
                        return(
                            <li key={index} className="list-disc ml-4 capitalize">{item.split('\\').map((content,key)=><span key={key} className={`${key === 1 ? 'font-normal': 'font-semibold'}`}>{content}</span>)}</li>
                        )
                    })
                   }
                </ul>
            }
            {
                details[category.split('&').join('')][0].listHead2 && <p className="mt-2 md:mt-5 text-brand-blue text-xl text-justify leading-relaxed slider from-right font-semibold">{details[category.split('&').join('')][0].listHead2}</p>
            }
            {
                details[category.split('&').join('')][0].list2 &&
                <ul className="mt-4 slider from-right text-brand-blue text-xl font-medium text-justify">
                   {
                    details[category.split('&').join('')][0].list2.map((item,index)=>{
                        return(
                            <li key={index} className="list-disc ml-4 capitalize">{item.split('\\').map((content,key)=><span key={key} className={`${key === 1 ? 'font-normal': 'font-semibold'}`}>{content}</span>)}</li>
                        )
                    })
                   }
                </ul>
            }
            
         </div>
        <div className="w-full">
        <div className="flex mt-16 flex-wrap w-full gap-x-1 gap-y-2">
        
        {
            details[category.split('&').join('')].map((item,index)=>{
                if(index !== 0){

                    return(
                        <div key={index} className={`basis-full md:basis-[33%] relative h-[33rem] slider from-left`} style={{background:`url(${item.src})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}} onMouseOver={()=>setHover(item.id)} onFocus={()=>setHover(item.id)} onBlur={()=>setHover()} onMouseLeave={()=>setHover()}>
                    <div className="absolute inset-0 bg-brand-blue opacity-30 flex items-center justify-center"></div>
                    </div>
                )
            }
                
            })
        }
        {
            
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
    </>
  )
}

export default Products