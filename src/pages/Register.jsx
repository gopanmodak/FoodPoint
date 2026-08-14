import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import register from "../assets/Sign up-svg.svg";
import auth from "../auth/__firebaseinit";

const Register = () => {

  const {userRegistration} = useContext(authContext);

  const handleOnForm = (event) => {
    event.preventDefault()

    const form = event.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const number = form.number.value;
    const date = form.date.value;
    const photourl = form.photourl.value;
    const hometown = form.hometown.value;
    const zipcode = form.zipcode.value;

    const userInformation = {
      username,email,password,number,date,photourl,hometown,zipcode

    }
    userRegistration(email,password)
    .then(result =>{ console.log(result)

    updateProfile (auth.currentUser,
      {
        displayName: username,
        photoURL: photourl,
        phoneNumber: number
      }
     )
     .then(()=>{
     toast.success('User Created Successfully');
     })
      form.reset();
    })
   

    console.log(userInformation)
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 max-w-7xl mx-auto gap-10 p-10">
      <div className="border-orange-400 bg-red-400 flex justify-center rounded-2xl">
        <img src={register} alt="register-images" className="h-132" />
      </div>

      <div className="flex justify-center">
        <form className="flex gap-3 flex-col justify-center max-w-xs" onSubmit={handleOnForm}>
          {/*  username */}
          <div className="flex flex-col gap-3">
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              name="username"
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
              name="email"
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
              name="password"
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
              name="number"
              placeholder="Enter your phone number"
             
              maxLength="11"
              minLength="11"
              className="input w-md border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 
             focus:border-orange-400 tabular-nums"
            />
          </div>

          {/*  date of birth */}
          <div className="flex flex-col gap-3">
            <label htmlFor="number">Date Of Birth</label>
            <input
              type="date"
              name="date"
              className="input w-md border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 
             focus:border-orange-400 "
            />
          </div>

          {/*  Photo URl */}
          <div className="flex flex-col gap-3">
            <label htmlFor="photourl">Photo URL</label>
            <input
              type="text"
              name="photourl"
              placeholder="Enter your Photo URL"
              className="input w-md border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 
             focus:border-orange-400"
            />
          </div>
              {/* address */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-3">
              <label htmlFor="">Home Town</label>
              <input
                type="text"
                name="hometown"
                id=""
                placeholder="Enter home town"
                className="input border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-500"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="">Zip Code</label>
              <input
                type="tel"
                name="zipcode"
                
                minLength="4"
                maxLength="4"
                placeholder="Enter your zip code"
                className="tabular-nums input border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-500"
              />
            </div>
          </div>

          {/* checkbox */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name='terms'
              className="w-5 rounded-full h-5 accent-orange-500"
            />
            <span className="text-gray-700">
              I agree to the terms and conditions
            </span>
          </div>

          {/*  submit button */}
          <div className="flex justify-center">
            <button className="btn text-white bg-orange-500 hover:bg-orange-600">
              Submit
            </button>
          </div>

          {/*  Social login */}
          <div className="my-5 flex justify-center">
            <h3 className="text-center border-l-2 border-r-2 border-[#EA580C] px-4 py-2 rounded-md bg-orange-50 font-semibold">
              Login with social accounts
            </h3>
          </div>
          <div className="flex gap-3 items-center">
            <button className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <button className="btn bg-black text-white border-black">
              <svg
                aria-label="X logo"
                width="16"
                height="12"
                viewBox="0 0 300 271"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
                />
              </svg>
              Login with X
            </button>
          </div>

          <div>
            If you already have an account?{" "}
            <Link
              to="/login"
              className="text-[#FB923C] hover:border-b-2 border-green-400"
            >
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
