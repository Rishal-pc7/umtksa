import { Routes,Route, useLocation } from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Products from "./Components/Products/Products"
import Footer from "./Components/Footer/Footer"
import Widget from "./Components/Widget"
import { useEffect} from "react"
const TRACKING_ID = "G-7QEJZVLC9Z"; // G-DHZR4TEB8S After Hosting
import ReactGA from 'react-ga4'
function App() {
  const location = useLocation()
  
  useEffect(()=>{
    ReactGA.initialize(TRACKING_ID);

    // Track the initial pageview
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  },[])
  useEffect(()=>{
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  },[location])
  useEffect(() => {

    const sliders=document.querySelectorAll('.slider')
    const options={
      threshold:0,
      rootMargin:'0px 0px -150px 0px'
    }
  const observer = new IntersectionObserver((entries,observer) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting){
            return
        }else{
            entry.target.classList.add('show')                
            observer.unobserve(entry.target)
        }
    })
  },options)
  sliders.forEach((slider)=>{
    observer.observe(slider)
  })
}, []);
  return (

    <div className="font-rubik">
         <Header/>
         <Widget/>
         <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/products/:category" element={<Products/>}/>
         </Routes>
         <Footer/>
    </div>
  )
}

export default App
