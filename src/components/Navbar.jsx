import { Link } from 'react-router-dom'
import mainlogo from '../assets/main-logo.webp'
import { useContext, useState,  } from 'react'
import { authContext } from '../AuthProvider/AuthProvider'
import { signOut } from 'firebase/auth'
import auth from '../auth/__firebaseinit'
const Navbar = () => {

  const [open, setOpen] = useState(false);

  const {user} = useContext(authContext)
  return (
   <div className='bg-[#FFF7ED]  backdrop-blur-lg shadow-lg fixed top-0 w-full z-50'>
     <div className='flex justify-between items-center p-3 max-w-7xl mx-auto bg-[#FFF7ED] '>
       <div>
        <img src={mainlogo} alt="logo"  className='max-w-28 object-cover'/>
       </div>

       <div>
        <ul className='flex gap-5'>
          <Link to='/'>Home</Link>
          <Link>Menu</Link>
          <Link>Order</Link>
          <Link>Reservation</Link>
          <Link>Cart</Link>
          {user && <Link to='/profile'>Profile</Link>}
        </ul>
       </div>

       {
        user ? <div className="flex flex-col items-center gap-2">
   

         <button className='btn btn-warning' onClick={()=>setOpen(!open)}> {user?.displayName} </button>
       <div>
        {open && <div>
             <button className='btn bg-orange-500 hover:bg-orange-600 text-white' onClick={() => signOut(auth)}>Log Out</button>
          </div>}
       </div>
  </div>
        
        
        
        : <div className='flex gap-3'>
        <Link className='btn bg-orange-500 hover:bg-orange-600 text-white' to='/register'>Register</Link>
        <Link className='btn bg-orange-500 hover:bg-orange-600 text-white' to ='/login'>Log In</Link>
        
       </div>
       }

    </div>
   </div>
  )
}

export default Navbar