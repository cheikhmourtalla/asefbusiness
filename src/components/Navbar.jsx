import logo from "../assets/logoab.jpeg"

export default function Navbar({dark,setDark}) {

return(

<nav className="bg-primary text-white fixed w-full z-50 shadow-md">

<div className="max-w-7xl mx-auto flex justify-between items-center p-4">

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

<div className="flex items-center gap-6">

<a href="#home">Accueil</a>
<a href="#products">Produits</a>
<a href="#about">À propos</a>
<a href="#contact">Contact</a>

<button
onClick={()=>setDark(!dark)}
className="bg-white text-black px-3 py-1 rounded"
>

{dark ? "☀️" : "🌙"}

</button>

</div>

</div>

</nav>

)

}