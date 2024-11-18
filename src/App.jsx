import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Products from "./Components/Products/Products"
import Footer from "./Components/Footer/Footer"
import Widget from "./Components/Widget"
import { useEffect, useState } from "react"

function App() {
  const [count,setCount] = useState(0)
  useEffect(() => {
    const storedCount = localStorage.getItem('pageVisits')
    const initialCount = Number(storedCount) || 0
    setCount(initialCount + 1)
    localStorage.setItem('pageVisits',initialCount + 1)
    console.log(count);
    
  },[])
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
    <Router>

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
    </Router>
  )
}

export default App
