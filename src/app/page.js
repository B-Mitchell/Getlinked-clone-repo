// import Image from 'next/image'
// import font
{/* <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link> */}
// import components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero_comp from "./components/Hero_comp"
import Intro_comp from "./components/Intro_comp"
import RulesAndGuidelines from "./components/RulesAndGuidelines"
import Judging_criteria from "./components/Judging_criteria"

export default function Home() {
  
  return (
    <main className="font-montserrat scroll-smooth relative text-[#FFF]">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO COMPONENT */}
      <Hero_comp />

      {/* INTRO COMP */}
      <Intro_comp />
      
      {/* RULES AND GUIDELINES */}
      <RulesAndGuidelines />

      {/* JUDGING CRITERIA */}
      <Judging_criteria />

      {/* FOOTER */}
      <Footer />
    </main>
  )
}
