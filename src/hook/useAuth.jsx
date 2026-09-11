import { useContext } from "react"
import { authContext } from './../AuthProvider/AuthProvider';

const useAuth = () => {
  const context = useContext(authContext);
  return  context;
}

export default useAuth