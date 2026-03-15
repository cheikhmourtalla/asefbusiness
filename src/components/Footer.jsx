import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Footer() {

return(

<footer className="bg-footer text-white mt-20">

<div className="max-w-7xl mx-auto px-6 py-10 text-center">

<h2 className="text-2xl font-bold">
ASEF BUSINESS
</h2>

<p className="mt-2 italic">
Prix café Touba
</p>

<p className="mt-4">
78 129 34 87 / 78 483 71 79
</p>

<div className="flex justify-center gap-6 mt-6 text-xl">

<a href="#">
<FaFacebook className="hover:text-blue-500"/>
</a>

<a href="#">
<FaInstagram className="hover:text-pink-500"/>
</a>

<a href="https://wa.me/221781293487">
<FaWhatsapp className="hover:text-green-500"/>
</a>

</div>

</div>

</footer>

)

}
