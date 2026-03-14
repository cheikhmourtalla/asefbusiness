import { useState } from "react"
import logo from "../assets/logoab.jpeg"

export default function Navbar({ dark, setDark }) {

const [menuOpen, setMenuOpen] = useState(false)

return (

<nav className="bg-primary text-white fixed w-full z-50 shadow-md">

<div className="max-w-7xl mx-auto flex justify-between items-center p-4">

{/* Logo + Nom */}
<div className="flex items-center gap-3">

<img
src={logo}
alt="ASEF BUSINESS"
className="h-10"
/>

<h1 className="font-bold text-lg md:text-xl">
ASEF BUSINESS
</h1>

</div>

{/* Menu Desktop */}
<div className="hidden md:flex items-center gap-6">

<a href="#home" className="hover:opacity-80">Accueil</a>
<a href="#products" className="hover:opacity-80">Produits</a>
<a href="#about" className="hover:opacity-80">À propos</a>
<a href="#contact" className="hover:opacity-80">Contact</a>

<button
onClick={()=>setDark(!dark)}
className="bg-white text-black px-3 py-1 rounded"
>

{dark ? "☀️" : "🌙"}

</button>

</div>

{/* Bouton menu mobile */}
<button
onClick={()=>setMenuOpen(!menuOpen)}
className="md:hidden text-2xl"
>

☰

</button>

</div>

{/* Menu Mobile */}
{menuOpen && (

<div className="md:hidden bg-primary text-center py-4 space-y-4">

<a href="#home" className="block">Accueil</a>
<a href="#products" className="block">Produits</a>
<a href="#about" className="block">À propos</a>
<a href="#contact" className="block">Contact</a>

<button
onClick={()=>setDark(!dark)}
className="bg-white text-black px-3 py-1 rounded"
>

{dark ? "☀️" : "🌙"}

</button>

</div>

)}

</nav>

)

}