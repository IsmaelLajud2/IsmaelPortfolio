import { useRef } from 'react'
import '../Proyects/PorfolioStyles.css'
import {motion,useScroll,useSpring} from 'framer-motion'
import Single from './Single'
const Porfolio = () => {

   const items =[
    {
        id:1,
        title:"Minimalist E-Commerce",
        img:"ProyectsImages/Minimalist.png",
        description:"E-commerce"
    },  
     {
        id:2,
        title:"Minimalist E-Commerce",
        img:"ProyectsImages/AgenciaMarketing.png",
        description:"E-commerce"
    }, 
     {
        id:3,
        title:"Minimalist E-Commerce",
        img:"ProyectsImages/GymProyectPhoto.png",
        description:"E-commerce"
    },   
    {
        id:4,
        title:"Minimalist E-Commerce",
        img:"ProyectsImages/RickAndMorty.png",
        description:"E-commerce"
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
            <h1>Mis Proyectos</h1>
        
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