import About from "./components/About"
import Awards from "./components/Awards"
import Blog from "./components/Blog"
import CaseStudy from "./components/CaseStudy"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

import Testimonials from "./components/Testimonials"


function App() {
 

  return (
    <>

    <div>

      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <CaseStudy/>
      <Awards/>
      <Testimonials/>
      <Blog/>
      <Footer/>

    </div>
    

   
    </>
  )
}

export default App
