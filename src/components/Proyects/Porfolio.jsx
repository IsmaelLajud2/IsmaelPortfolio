import { useRef } from 'react'
import '../Proyects/PorfolioStyles.css'
import {motion,useScroll,useSpring} from 'framer-motion'
import Single from './Single'
const Porfolio = () => {

   const items =[
    {
        id:1,
        title:"Minimalist E-Commerce",
        video:"Videos/MinimalistVideo.mp4",
        description: "E-commerce desarrollado en React, con un enfoque minimalista y un diseño responsive que permite una experiencia de usuario fluida.",
        link:"https://minimalist-beta.vercel.app/home"
    },  
     {
        id:2,
        title:"Start-up Marketing",
        video:"Videos/AgenciadeMarketing.mp4",
        description: "Landing page para una agencia de marketing creada en React, optimizada para dispositivos móviles y con un diseño atractivo que destaca los servicios ofrecidos.",
        link:"https://startup-landing-nu.vercel.app/"
    }, 
     {
        id:3,
        title:"Fitness Gym",
        video:"Videos/GymProyect.mp4",
        description: "Aplicación web para un gimnasio desarrollada en React, con API en Node.js y Base de Datos para manejar los planes y ademas un diseño responsive que facilita el acceso desde cualquier dispositivo.",
        link:"https://gym-proyect-navy.vercel.app/"
        
    },   
    {
        id:4,
        title:"Rick and Morty Website",
        video:"Videos/RickAndMorty.mp4",
        description: "Sitio web inspirado en la serie 'Rick and Morty', realizado en React. Presenta un diseño atractivo y responsive, permitiendo explorar información sobre los personajes y episodios de forma dinámica.",
        link:"https://rick-and-morty-blond-iota.vercel.app/"
    }
   ] 

const ref =useRef(null)

const {scrollYProgress} =useScroll({target: ref,offset:["end end" ,"start start"]})

const scaleX=useSpring(scrollYProgress,{
    stiffness:100,
    damping:30
})



  return (
    <div className='porfolio-container' ref={ref}>
        <div className="progress">
            <h1 className='h1-proyectos'>Mis Proyectos</h1>
        
        <motion.div 
        style={{scaleX}}
        className='progressBar'></motion.div>
        </div>
        {
            items.map(item =>(
                <Single item={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default Porfolio