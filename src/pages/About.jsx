import { motion } from "framer-motion"
import about from "../assets/about.jpg"

export default function About(){

return(

<section
id="about"
className="pt-24 max-w-7xl mx-auto px-6"
>

<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.5}}
className="text-3xl font-bold text-center mb-12"
>

À propos de ASEF BUSINESS

</motion.h2>

<div className="grid md:grid-cols-2 gap-10 items-center">

<motion.img
src={about}
alt="ASEF BUSINESS"
initial={{opacity:0,x:-50}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
className="rounded-lg shadow-lg w-full"
/>

<motion.div
initial={{opacity:0,x:50}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
className="space-y-4 text-gray-700 dark:text-gray-300"
>

<p>

<strong>ASEF BUSINESS</strong> est une entreprise spécialisée dans la
vente de smartphones et d’accessoires technologiques modernes.
Nous proposons une large gamme de produits tels que des téléphones,
des AirPods, des écouteurs Bluetooth, des casques, des coques de
protection et différents accessoires indispensables pour vos appareils.

</p>

<p>

Notre objectif est de fournir à nos clients des produits de qualité,
fiables et accessibles à des prix très compétitifs. Grâce à notre
sélection rigoureuse de produits, nous permettons à chacun de profiter
des dernières innovations technologiques.

</p>

<p>

Chez ASEF BUSINESS, la satisfaction du client est notre priorité.
Nous nous engageons à offrir un service rapide, un accompagnement
dans le choix des produits et une expérience d’achat simple et agréable.

</p>

<p className="font-semibold text-primary">

Notre slogan : « Prix café Touba »

</p>

</motion.div>

</div>

</section>

)

}