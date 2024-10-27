


import './app.scss'
import Hero from './components/Hero/Hero'
import NavbarSection from './components/navbar/Navbar'
import Parallax from './components/parallax/Parallax'
import Porfolio from './components/Proyects/Porfolio'
import Contact from './components/Contact/Contact'

function App() {



 

  return (
    <>
    <section id="Home">
    <NavbarSection />
    <Hero id="Home"/>
    </section>
 
    <section id='Proyectos'><Parallax type="portfolio" /></section>
   
    <Porfolio/>
    <section id='Contact' ><Contact/></section>
    

    </>
  )
}

export default App
