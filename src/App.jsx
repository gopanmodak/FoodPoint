import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div>

      <Navbar/>
     <div className="pt-45 max-w-7xl mx-auto">
       <Outlet/>
     </div>
      <Footer/>
    </div>
  )
}

export default App