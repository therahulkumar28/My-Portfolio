import { useState } from "react"
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav";

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
        </div>
    </div>
  )
}

export default Homepage