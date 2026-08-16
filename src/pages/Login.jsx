import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../assets/Login-svg.svg";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const inputClass =
  "w-full px-4 py-3 bg-orange-50/40 border border-orange-100 rounded-xl text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-200";

const labelClass =
  "block text-xs font-semibold uppercase tracking-widest text-orange-500 mb-1.5";

const Login = () => {
  const { userLogin } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleOnForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });

    userLogin(email, password).then(() => {
      toast.success("Login Successfully");
      navigate(from, { replace: true });
      form.reset();
    });
  };

  return (
    <div className="bg-[#fdfaf6] min-h-screen flex items-center justify-center py-16 px-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* ── Left illustration panel ── */}
        <div className="hidden md:flex flex-col items-center justify-center bg-linear-to-br from-orange-500 to-amber-400 rounded-3xl p-10 shadow-xl shadow-orange-100 min-h-180">
          <img
            src={login}
            alt="login"
            className="w-full max-w-xs drop-shadow-lg"
          />
          <p className="text-white/90 text-center mt-8 text-sm leading-relaxed max-w-xs">
            Welcome back! Log in to manage your reservations and enjoy a
            seamless dining experience.
          </p>
        </div>

        {/* ── Right form card ── */}
        <div className="bg-white rounded-3xl shadow-[0_8px_60px_rgba(0,0,0,0.08)] border border-orange-100/60 overflow-hidden">

          {/* Card header */}
          <div className="bg-linear-to-r from-orange-500 to-amber-500 px-8 py-6">
            <p className="text-orange-100 uppercase tracking-[0.25em] text-xs font-semibold mb-1">
              Welcome Back
            </p>
            <h2 className="text-white text-2xl font-bold">Log In to Your Account</h2>
          </div>

          <form onSubmit={handleOnForm} className="px-8 py-8 flex flex-col gap-5">

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className={labelClass}>
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                className={inputClass}
              />
              <div className="flex justify-end mt-2">
                <a
                  href="#"
                  className="text-xs text-orange-400 hover:text-orange-600 transition font-medium"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-95 text-white font-bold rounded-2xl shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all duration-200 text-sm tracking-wide mt-1"
            >
              Log In →
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <span className="flex-1 h-px bg-orange-100" />
              <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">
                or continue with
              </span>
              <span className="flex-1 h-px bg-orange-100" />
            </div>

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 active:scale-95 transition-all duration-150 text-sm font-medium text-gray-700 shadow-sm"
              >
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff" />
                    <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                    <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                    <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                    <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                  </g>
                </svg>
                Google
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-900 rounded-xl bg-gray-900 hover:bg-black active:scale-95 transition-all duration-150 text-sm font-medium text-white shadow-sm"
              >
                <svg width="14" height="12" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
                  />
                </svg>
                X (Twitter)
              </button>
            </div>

            {/* Register link */}
            <p className="text-center text-sm text-gray-500 mt-1">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-orange-500 font-semibold hover:text-orange-600 transition"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;