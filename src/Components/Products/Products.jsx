import { useParams } from "react-router-dom"
function Products() {
    
    const { category } = useParams();
    
    const details=
    {
        building_materials :[
            
            {src:`/building-materials/1.jpg`},
            {src:`/building-materials/2.jpg`},
            {src:`/building-materials/3.jpg`},
            {src:`/building-materials/4.jpg`},
        ],
        construction_materials :[
            {src:`/construction-materials/1.jpg`},
            {src:`/construction-materials/2.jpg`},
            {src:`/construction-materials/3.jpg`},
    ],
    commercial_steel__accessories :[
        {src:`/commercial-steel/1.jpg`},
        {src:`/commercial-steel/2.jpg`},
        {src:`/commercial-steel/3.jpg`},
        {src:`/commercial-steel/4.jpg`},
    ],
    containers :[
        {src:`/Containers/1.jpg`},
        {src:`/Containers/2.jpg`},
        {src:`/Containers/p1.jpg`},
        {src:`/Containers/p2.jpg`},
        {src:`/Containers/p3.jpg`},
    ],
    HVAC__air_conditioning_materials :[
        {src:`/HVAC-and-AC/1.jpg`},
    ],
    MEP_materials :[
        {src:`/MEP-Materials/1.jpg`},
        {src:`/MEP-Materials/2.jpg`},
    ],
    scaffolding :[
        {src:`/Scaffolding/1.jpg`},
        {src:`/Scaffolding/2.jpg`},
        {src:`/Scaffolding/3.jpg`},
        {src:`/Scaffolding/4.jpg`},
        {src:`/Scaffolding/5.jpg`},
    ],
    security_equipments :[
        {src:`/Security-Equipments/1.jpg`},
    ]
}
    
    return (
        <div className="w-full p-8 md:p-32">
        <h1 className="capitalize font-bold text-xl md:text-4xl text-center">{category?.split('_').join(' ')}</h1>
        <div className="flex gap-y-4 md:gap-x-2 mt-10 flex-wrap md:flex-nowrap justify-between w-full ">
        
        {
            details[category.split('&').join('')].map((item,index)=>{
                return(
                    <div key={index} className={`w-full md:w-1/3 `}>
                    <img src={item.src} alt="building materials" className="w-full h-48 md"/>
                    </div>
                )
                 
            })
        }
        {
            
        }
        </div>
    </div>
  )
}

export default Products