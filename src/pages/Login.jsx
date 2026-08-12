import { Link } from "react-router-dom";
import login from '../assets/Login-svg.svg'
const Login = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 max-w-7xl mx-auto gap-10">
      <div className="border-orange-400 bg-red-400 flex justify-center rounded-2xl">
        <img src={login} alt="login-image" className="h-100"/>
      </div>

      <div className="flex justify-center">
        <form className="flex gap-3 flex-col justify-center ">
          {/*  email */}
          <div className="flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
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
              placeholder="Enter your password"
              className="input w-md border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 
             focus:border-orange-400"
            />
          </div>

          <div className="flex justify-center">
            <button className="btn text-white bg-orange-500 hover:bg-orange-600">
              Submit
            </button>
          </div>

          <div>
            If you Don't have a accout go to{" "}
            <Link to="/register" className="text-[#FB923C] hover:">
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
