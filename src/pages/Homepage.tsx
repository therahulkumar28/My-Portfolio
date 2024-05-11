import { useState } from "react"
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";

const Homepage = () => {
    const [nav , setNav] = useState<boolean>(false) ;
    const openNav = () => {
        setNav(true)
    }
    const closeNav = () => {
        setNav(false)
    } 
  return (
    <div className="overflow-x-hidden">
        <div>
            
            <MobileNav nav={nav} closeNav={closeNav}/>
            <Nav openNav={openNav}/>
            <Hero/>
            <About/>
            <Services/>
        </div>
    </div>
  )
}

export default Homepage