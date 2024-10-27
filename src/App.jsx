


import './app.scss'
import Hero from './components/Hero/Hero'
import NavbarSection from './components/navbar/Navbar'

function App() {


  return (
    <>
    <section >
    <NavbarSection />
    <Hero id="HomePage"/>
    </section>
    <section >Parallax</section>
    <section id='Proyects'>Proyects</section>
    <section id='Contact' >Contact</section>
    <section id='About' >About</section>

    </>
  )
}

export default App
