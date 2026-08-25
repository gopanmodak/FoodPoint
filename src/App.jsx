import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"


const App = () => {
  return (
    <div>

      <ScrollToTop/>

      <Navbar/>
     <div className="pt-45 max-w-7xl mx-auto">
       <Outlet/>
     </div>
      <Footer/>
    </div>
  )
}

export default App