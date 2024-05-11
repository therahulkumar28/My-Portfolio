import { useState } from "react"
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Project from "../components/Project";

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
            <div className=" relative z-[30] ">

            <About/>
            <Services/>
            <Skills/>
            <Project/>
            </div>
        </div>
    </div>
  )
}

export default Homepage