import { Routes,Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Products from "./Components/Products/Products"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <div className="font-rubik">
         <Header/>
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
