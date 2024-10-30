import '../navbar/NavbarStyles.css'
import { motion } from 'framer-motion'
const Links = () => {


  const items =[
    "Home",
    "Proyectos",
    "Contacto",
    
  ]  

 const variants ={
    open: {
        opacity:1,
        transition :{
            staggerChildren:0.1
        }
    },
    closed :{
        opacity:0,
        transition:{
            staggerChildren:0.05,
            staggerDirection: -1,
            
        }
    }
 } 
 const itemVariants ={
    open: {
      y:0,
     opacity:1
    },
    closed :{
        y:50,
        opacity:0
    }
 } 
  return (
    <motion.div variants={variants} className='links-container'>
        {
            items.map(item => (
                <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.95}} className='link-nav'  href={`#${item}`} key={item} variants={itemVariants}>
                    {item}
                </motion.a>
            ))
        }
    </motion.div>
  )
}

export default Links