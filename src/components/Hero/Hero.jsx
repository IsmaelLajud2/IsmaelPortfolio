import { motion } from 'framer-motion'
import '../Hero/HeroStyles.css'
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
        <motion.p    className='description-role'>Soy desarrollador Web Full-Stack, especializado en tecnologías de Front-End.</motion.p>
  <motion.div  variants={textVariants} className='button-container'>
          <motion.button variants={textVariants} className='button-hero'><a href="mailto:ismael.lajud65@gmail.com"> Contáctame</a></motion.button>
          <motion.button variants={textVariants}  className='button-hero'>Mi ultimo trabajo</motion.button>
        </motion.div>
        <motion.img variants={textVariants}  className='scroll-down' src='Images/scrollDown.png'></motion.img>
      </motion.div>
      <motion.div variants={sliderVariants} initial="inital" animate="animate" className='slindingTextContainer'>
      <span >Front-End Developer &nbsp;</span>
      <span>Front-End Developer</span>
      </motion.div>
         <div className='imagen-container'>
            <img className='imagen-profile ' src='Images/ProfilePhoto.webp' alt='profileimagen'></img>
         </div>
         </div>
    </div>
  )
}

export default Hero