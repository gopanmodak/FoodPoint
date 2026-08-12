import { Link } from 'react-router-dom'
import mainlogo from '../assets/main-logo.webp'
const Navbar = () => {
  return (
   <div className='bg-[#FFF7ED]  backdrop-blur-lg shadow-lg fixed top-0 w-full z-50'>
     <div className='flex justify-between items-center p-3 max-w-7xl mx-auto bg-[#FFF7ED] '>
       <div>
        <img src={mainlogo} alt="logo"  className='max-w-28 object-cover'/>
       </div>

       <div>
        <ul className='flex gap-5'>
          <Link>Home</Link>
          <Link>Menu</Link>
          <Link>Order</Link>
          <Link>Cart</Link>
        </ul>
       </div>

       <div className='flex gap-3'>
        <Link className='btn bg-orange-500 hover:bg-orange-600 text-white' to='/register'>Register</Link>
        <Link className='btn bg-orange-500 hover:bg-orange-600 text-white' to ='/login'>Log In</Link>
        
       </div>

    </div>
   </div>
  )
}

export default Navbar