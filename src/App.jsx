import { Routes,Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Products from "./Components/Products/Products"
import Footer from "./Components/Footer/Footer"
import Widget from "./Components/Widget"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    const sliders=document.querySelectorAll('.slider')
    const options={
      threshold:0,
      rootMargin:'0px 0px -150px 0px'
    }
  const observer = new IntersectionObserver((entries,observer) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting){
            console.log(entry);
            
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
    <div className="font-rubik relative">
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
