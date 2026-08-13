import { Link, useLocation, useNavigate } from "react-router-dom";
import login from '../assets/Login-svg.svg'
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {

  const {userLogin} = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/"

  const handleOnForm = (event) => {
    event.preventDefault()
    const form =event.target;

    const email = form.email.value;
    const password = form.password.value;
    
    const userInformation = {email,password}
    console.log(userInformation)

    userLogin(email,password)
    .then(()=>{
      toast.success('Login Successfully');
      navigate(from,{replace: true})
      form.reset()
    })
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 max-w-7xl mx-auto gap-10">
      <div className="border-orange-400 bg-red-400 flex justify-center rounded-2xl">
        <img src={login} alt="login-image" className="h-100"/>
      </div>

      <div className="flex justify-center">
        <form className="flex gap-3 flex-col justify-center" onSubmit={handleOnForm}>
          {/*  email */}
          <div className="flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input w-md border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 
             focus:border-orange-400"
            />
          </div>

          {/*  password */}
          <div className="flex flex-col gap-3 ">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input w-md border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 
             focus:border-orange-400"
            />
          </div>

          <div className="flex justify-center">
            <button className="btn text-white bg-orange-500 hover:bg-orange-600">
              Log In
            </button>
          </div>

          <div>
            If you don't have an account?{" "}
            <Link to="/register" className="text-[#FB923C] hover:border-b-2 border-green-400">
              {" "}
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
