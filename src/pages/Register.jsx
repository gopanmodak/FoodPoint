import { Link } from "react-router-dom";
import register from '../assets/Sign up-svg.svg'

const Register = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 max-w-7xl mx-auto gap-10">
      <div className="border-orange-400 bg-red-400 flex justify-center rounded-2xl">
        <img src={register} alt="register-images" className="h-132"/>
      </div>

      <div className="flex justify-center">
        <form className="flex gap-3 flex-col justify-center max-w-xs">
          {/*  username */}
          <div className="flex flex-col gap-3">
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input w-md border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 
             focus:border-orange-400"
            />
          </div>

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
          <div className="flex flex-col gap-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input w-md border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 
             focus:border-orange-400"
            />
          </div>

          {/*  number */}
          <div className="flex flex-col gap-3">
            <label htmlFor="number">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              pattern="[0-10]*"
              maxLength="11"
              minLength="11"
              className="input w-md border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 
             focus:border-orange-400 tabular-nums"
            />
          </div>

          {/*  Photo URl */}
          <div className="flex flex-col gap-3">
            <label htmlFor="photourl">Photo URL</label>
            <input
              type="text"
              placeholder="Enter your Photo URL"
              className="input w-md border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 
             focus:border-orange-400"
            />
          </div>


          <div>
            
          </div>

          <div className="flex justify-center">
            <button className="btn text-white bg-orange-500 hover:bg-orange-600">
              Submit
            </button>
          </div>

          <div>
            If you already register go to{" "}
            <Link to="/login" className="text-[#FB923C] hover:underline p-3">
              {" "}
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
