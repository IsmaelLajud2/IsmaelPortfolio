import { motion } from 'framer-motion'
import '../Hero/HeroStyles.css'

import ReactSVG from '../../svg/code/ReactSVG.jsx'
import NodeSVG from '../../svg/code/NodeSVG.jsx'
import CssSVG from '../../svg/code/CssSVG.jsx'
import HtmlSVG from '../../svg/code/HtmlSVG.jsx'
import MongoDbSVG from '../../svg/code/MongoDbSVG.jsx'
import JsLogoSVG from '../../svg/code/JSLOGOSVG.jsx'
const Hero = () => {

 const textVariants={
  initial:{
    x:-500,
    opacity:0,
  },
 animate: {
x:0,
opacity:1,
transition:{
  duration:1,
  staggerChildren:0.1,
}
  },
}


const sliderVariants ={
  initial:{
    x:0
  },
  animate:{
    x:"-420%",
    transition:{
      repeat:Infinity,
      
      duration:20,
      ease:"linear"
    }
  }
}
  return (
    <div className='hero'>
      <div className='wrapper-hero'>

     
      <motion.div className='text-container'variants={textVariants} initial="initial" animate="animate"  >
        <motion.p  variants={textVariants}  className='user-name'>Hola! soy Ismael 👋🏾 </motion.p>
        <motion.h1  variants={textVariants}  className='user-role'>Desarrollador Web</motion.h1>
        <motion.p    className='description-role'>Soy Desarrollador Web Full-Stack, especializado en tecnologías de Front-End.</motion.p>
  <motion.div  variants={textVariants} className='button-container'>
          <motion.button variants={textVariants} className='button-hero'><a href="mailto:ismael.lajud65@gmail.com"> Contáctame</a></motion.button>
          <motion.button variants={textVariants}  className='button-hero'><a target='_blank' href="https://github.com/IsmaelLajud2">Mi ultimo trabajo</a></motion.button>
        </motion.div>
        <motion.img variants={textVariants}  className='scroll-down' src='Images/scrollDown.png'></motion.img>
      </motion.div>
      <motion.div variants={sliderVariants} initial="inital" animate="animate" className='slindingTextContainer'>
      <span >Front-End Developer &nbsp;</span>
      <span>Front-End Developer</span>
      </motion.div>
         <div className='imagen-container'>
          
            <img className='imagen-profile ' src='Images/ProfilePhoto.webp' alt='profileimagen'></img>
            <div className='svg-container'>

           
            <JsLogoSVG className='javaScript-svg'/>
            
    <ReactSVG className='react-svg'/>
    <NodeSVG className='node-svg'/>
    <CssSVG className='css-svg'/>
    <HtmlSVG className='html-svg'/>
    <MongoDbSVG className='mongoDb-svg'/>
    </div>
         </div>
         </div>
    </div>
  )
}

export default Hero