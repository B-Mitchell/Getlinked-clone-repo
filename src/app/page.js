// import Image from 'next/image'
// import components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero_comp from "./components/Hero_comp"
export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO COMPONENT */}
      <Hero_comp />

      {/*  */}
      <h2 className="font-bold text-[3rem] text-center">Hi Elizabeth Tamera</h2>

      {/* FOOTER */}
      <Footer />
    </main>
  )
}
