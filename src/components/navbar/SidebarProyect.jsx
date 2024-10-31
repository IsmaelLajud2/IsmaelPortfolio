import { useState } from 'react'
import '../navbar/NavbarStyles.css'
import Links from './Links'
import ToggleButton from './ToggleButton'
import {  motion } from 'framer-motion'
const SidebarProyect = () => {

  const [open,setOpen] = useState(false)

  const variants ={
    open: {
      clipPath: "circle(1200px at   40px 40px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay:0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
        opacity:0
      }
    }
  };
  return (
    <motion.div animate={open ? "open" :"closed"} className='sidebar'>
        <motion.div  className='bg' variants={variants}>
            <Links/>
        </motion.div>
                <ToggleButton setOpen={setOpen}/>    
        </motion.div>
  )
}

export default SidebarProyect