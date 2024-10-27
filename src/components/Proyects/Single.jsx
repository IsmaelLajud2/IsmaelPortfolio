import {useRef} from 'react'
import '../Proyects/PorfolioStyles.css'

import { motion,useScroll,useTransform } from 'framer-motion'
const Single =({item}) =>{
    const ref =useRef()

const {scrollYProgress} =useScroll({target: ref })

const y = useTransform(scrollYProgress,[0,1],[-300,300])
   
     return (
         <section >
             <div className='card-container'>
                <div className='proyect-wrapper'>
                    <div className='imagen-proyect-container' ref={ref}>

             <img alt='proyects-imagen' className='imagen-proyect' src={item.img}/>
                    </div>
             <motion.div style={{y}}   className='proyect-text-container'>
                <h2 className='proyect-title'>{item.title}</h2>
                <p className='proyect-description'>{item.description}</p>
                <button className='proyect-button'>Link</button>
             </motion.div>
             </div>
             </div>
         </section>
     )
 }   

export default Single