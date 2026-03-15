import { motion } from "framer-motion"
import hero from "../assets/hero-bg.jpeg"

export default function Home() {

return (

<section
id="home"
className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-24"
style={{ backgroundImage: `url(${hero})` }}
>
    
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

<div className="relative max-w-7xl mx-auto px-6 text-center text-white">


<motion.h1
initial={{ opacity:0, y:40 }}
animate={{ opacity:1, y:0 }}
transition={{ duration:0.6 }}
className="text-4xl md:text-6xl font-bold tracking-wide"
>
ASEF BUSINESS
</motion.h1>

<motion.p
initial={{ opacity:0 }}
animate={{ opacity:1 }}
transition={{ delay:0.3 }}
className="text-xl md:text-2xl mt-4 text-primary font-medium"
>
Prix café Touba
</motion.p>

<motion.p
initial={{ opacity:0 }}
animate={{ opacity:1 }}
transition={{ delay:0.5 }}
className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
>
Votre boutique spécialisée dans la vente de smartphones et accessoires :
AirPods, écouteurs Bluetooth, coques, chargeurs et bien plus encore.
Nous proposons également la réparation de téléphones avec un service rapide et professionnel.
Profitez des meilleurs prix et d’un service rapide. 📱🔧
</motion.p>

<motion.div
initial={{ opacity:0 }}
animate={{ opacity:1 }}
transition={{ delay:0.7 }}
className="mt-10 flex justify-center gap-4 flex-wrap"
>

<a
href="#products"
className="bg-primary px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
>
Voir les produits
</a>

<a
href="https://wa.me/221781293487"
target="_blank"
className="bg-green-500 px-8 py-3 rounded-lg text-white font-semibold hover:bg-green-600 transition"
>
Commander sur WhatsApp
</a>

</motion.div>

</div>

</section>

)

}