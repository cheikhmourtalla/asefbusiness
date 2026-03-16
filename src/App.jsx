import { useState } from "react"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Testimonials from "./components/Testimonials"

export default function App(){

const [dark,setDark] = useState(false)

return(

<div className={dark ? "dark" : ""}>

<div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition duration-300">

<Navbar dark={dark} setDark={setDark}/>

<Home/>
<Products/>
<About/>
<Contact/>
<Testimonials/>
<Footer/>

</div>

</div>

)

}