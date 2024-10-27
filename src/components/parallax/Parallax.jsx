import { useRef } from 'react'
import '../parallax/ParallaxStyles.css'
import { motion ,useScroll,useTransform } from 'framer-motion'
const Parallax = () => {

const ref=useRef(null)
 const {scrollYProgress} =useScroll({
    target:ref,
    offset:["start start","end start"]
 })   


 const yText =useTransform(scrollYProgress,[0,1],["0%","500%"])
 const yBG =useTransform(scrollYProgress,[0,1],["0%","100%"])

  return (
    <div className='parallax-container' ref={ref}>
        <motion.h1 style={{y:yText}} className='parallax-title'> Proyectos</motion.h1>
            <motion.div  className='mountains'></motion.div>
            <motion.div style={{y:yBG}} className='planets'></motion.div>
            <motion.div style={{x:yBG}} className='stars'></motion.div>
        
    </div>
  )
}

export default Parallax