import { Fragment } from 'react'
const events=[
    {
        "id": 1,
        "title": "Innovative Construction",
        "content":"We strive to lead the industry with cutting-edge technology and creative solutions that push the boundaries of design and functionality.",
        "direction":'left'
    },
    {
        "id": 8,
        "title": "Empower Our People and Communities",
        "content":"We are committed to fostering a safe, inclusive work environment that empowers our employees to grow and excel. We also aim to contribute positively to the communities in which we operate, leaving a lasting, positive impact.",
        "direction":'right'
    },
    {
        "id": 2,
        "title": "Sustainability",
        "content":"Our commitment to eco-friendly practices ensures that every project minimizes environmental impact and contributes to a greener future",
        "direction":'left'
    },
    {
        "id": 5,
        "title": "Deliver Excellence in Construction",
        "content":"We are dedicated to delivering top-quality construction services, ensuring that every project meets the highest standards of craftsmanship, safety, and durability. Our goal is to exceed client expectations at every stage.",
        "direction":'right'
    },
    {
        "id": 3,
        "title": "Excellence in Craftsmanship",
        "content":"We prioritize quality and attention to detail in every project, ensuring that our structures stand the test of time and meet the highest standards of safety and durability.",
        "direction":'left'
    },
    {
        "id": 6,
        "title": "Commitment to Innovation and Sustainability",
        "content":"We strive to incorporate the latest technologies and sustainable practices into our work, reducing environmental impact while enhancing project efficiency and performance for a better future.",
        "direction":'right'
    },
    {
        "id": 4,
        "title": "Community Impact",
        "content":"We aim to enhance the quality of life in the communities we serve, creating spaces that foster connection, growth, and well-being.",
        "direction":'left'
    },
    {
        "id": 7,
        "title": "Foster Strong Client Relationships",
        "content":"We prioritize transparent communication and collaboration with our clients, building long-lasting relationships based on trust, integrity, and mutual success.",
        "direction":'right'
    },
]
const Timeline =()=>{
    return(
        <div className="flex flex-col  w-full gap-y-3  my-12">

        <Circle/>
        {
            events.map((event,key) => {
                return (
                    <Fragment key={key}>
                        <div className="relative grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
                            <div  className='block md:hidden h-full'><Pillar/></div>
                            {event.direction === 'left' ? (
                                
                                <Card title={event.title} content={event.content}/>
                            ):(<div className='md:block hidden'></div>)
                        }
                                <div  className='hidden md:block h-full'><Pillar/></div>
                            {event.direction === 'right' ? (
                                
                                <Card title={event.title} content={event.content}/>
                            ):(<div className='md:block hidden'></div>)
                        }
                        </div>
                        {key < (events.length - 1) && <Circle/>}
                    </Fragment>
                )
            })
        }
        <Circle/>
        </div>
        
        
   )
}
const Pillar = ()=>{
    return(
        <div className='h-full w-[2px] bg-slate-300 mx-auto rounded-t-full rounded-b-full'></div>
    )
}
// eslint-disable-next-line react/prop-types
const Card = ({title,content})=>{
    return(
       <div className="flex flex-col gap-y- border shadow-md rounded-xl p-4">
           <div className="text-blue font-bold text-lg">{title}</div>
           <div className="text-blue font-normal text-md">{content}</div>
       </div>    
    )
}
const Circle = ()=>{
    return(
        <div className="rounded-full w-1 h-1 bg-slate-300 md:mx-auto"></div>
    )
}
export default Timeline