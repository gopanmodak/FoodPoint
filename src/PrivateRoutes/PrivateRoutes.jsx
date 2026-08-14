import {  useContext } from "react"
import { authContext } from "../AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
  const location = useLocation();

  const {user, loading} = useContext(authContext);

  if(loading){
    return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-spinner text-secondary"></span></div>
  }

  if(!user){
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
  }
  return (
    children
  )
}

export default PrivateRoutes