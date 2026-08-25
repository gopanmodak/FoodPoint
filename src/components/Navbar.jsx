import { Link, NavLink } from "react-router-dom";
import mainlogo from "../assets/main-logo.webp";
import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../auth/__firebaseinit";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const { user } = useContext(authContext);
  return (

    <>
    <div className="bg-[#FFF7ED]  backdrop-blur-lg shadow-lg fixed top-0 w-full z-50">
      <div className="flex justify-between items-center p-3 max-w-7xl mx-auto bg-[#FFF7ED] ">
        <div>
          <img src={mainlogo} alt="logo" className="max-w-28 object-cover" />
        </div>



      

        <div className="hidden md:block">
          <ul className="flex gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F97316] border-b-2 border-[#6c6b77]"
                  : "hover:text-[#12068e] hover:border-b-2 hover:border-[#6c6b77]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F97316] border-b-2 border-[#6c6b77]"
                  : "hover:text-[#12068e] hover:border-b-2 hover:border-[#6c6b77]"
              }
            >
              Menu
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F97316] border-b-2 border-[#6c6b77]"
                  : "hover:text-[#12068e] hover:border-b-2 hover:border-[#6c6b77]"
              }
            >
              Categories
            </NavLink>
            <NavLink
              to="/reservation"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F97316] border-b-2 border-[#6c6b77]"
                  : "hover:text-[#12068e] hover:border-b-2 hover:border-[#6c6b77]"
              }
            >
              Reservation
            </NavLink>
            <NavLink
              to="/order"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F97316] border-b-2 border-[#6c6b77]"
                  : "hover:text-[#12068e] hover:border-b-2 hover:border-[#6c6b77]"
              }
            >
              Order
            </NavLink>

            {user && (
              <NavLink
                to="/addfood"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F97316] border-b-2 border-[#6c6b77]"
                    : "hover:text-[#12068e] hover:border-b-2 hover:border-[#6c6b77]"
                }
              >
                Add Food
              </NavLink>
            )}
            {user && (
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F97316] border-b-2 border-[#6c6b77]"
                    : "hover:text-[#12068e] hover:border-b-2 hover:border-[#6c6b77]"
                }
              >
                Profile
              </NavLink>
            )}
          </ul>
        </div>

        {user ? (
          <div className="relative">
            {/* Avatar / Name button */}
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-orange-200 rounded-full shadow-sm hover:shadow-md hover:border-orange-400 active:scale-95 transition-all duration-200"
            >
              {/* Avatar circle */}
              <div className="w-7 h-7 rounded-full bg-linear-to-br from-orange-400 to-amber-400 flex items-center justify-center text-white text-xs font-bold shrink-0">
                {user?.displayName?.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-semibold text-gray-700 max-w-30 truncate">
                {user?.displayName}
              </span>
              {/* Chevron */}
              <svg
                className={`w-4 h-4 text-orange-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-2 w-45 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                {/* Log out */}
                <div className="p-2">
                  <button
                    onClick={() => signOut(auth)}
                    className="w-full flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50 rounded-xl active:scale-95 transition-all duration-150"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
                      />
                    </svg>
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              className="btn bg-orange-500 hover:bg-orange-600 text-white"
              to="/register"
            >
              Register
            </Link>
            <Link
              className="btn bg-orange-500 hover:bg-orange-600 text-white"
              to="/login"
            >
              Log In
            </Link>
          </div>
        )}
        <div className="md:hidden px-8 text-4xl text-orange-700">
          <button onClick={() => setMenu(!menu)} > {open ? <MdOutlineClose />:<RxHamburgerMenu /> }</button>
        </div>
      </div>

<div className="">
        {menu && (
          <div className="absolute top-full left-0 w-full bg-[#FFF7ED] shadow-lg md:hidden transition-all duration-300 ease-in-out origin-top">
              <ul className=" flex flex-col gap-5 px-10 py-5">
            <NavLink
            onClick={() => setMenu(false)}
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F97316] border-b-2 border-[#6c6b77]"
                  : "hover:text-[#12068e] hover:border-b-2 hover:border-[#6c6b77]"
              }
            >
              Home
            </NavLink>
            <NavLink
            onClick={() => setMenu(false)}
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F97316] border-b-2 border-[#6c6b77]"
                  : "hover:text-[#12068e] hover:border-b-2 hover:border-[#6c6b77]"
              }
            >
              Menu
            </NavLink>
            <NavLink
            onClick={() => setMenu(false)}
              to="/categories"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F97316] border-b-2 border-[#6c6b77]"
                  : "hover:text-[#12068e] hover:border-b-2 hover:border-[#6c6b77]"
              }
            >
              Categories
            </NavLink>
            <NavLink
            onClick={() => setMenu(false)}
              to="/reservation"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F97316] border-b-2 border-[#6c6b77]"
                  : "hover:text-[#12068e] hover:border-b-2 hover:border-[#6c6b77]"
              }
            >
              Reservation
            </NavLink>
            <NavLink
            onClick={() => setMenu(false)}
              to="/order"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F97316] border-b-2 border-[#6c6b77]"
                  : "hover:text-[#12068e] hover:border-b-2 hover:border-[#6c6b77]"
              }
            >
              Order
            </NavLink>

            {user && (
              <NavLink
              onClick={() => setMenu(false)}
                to="/addfood"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F97316] border-b-2 border-[#6c6b77]"
                    : "hover:text-[#12068e] hover:border-b-2 hover:border-[#6c6b77]"
                }
              >
                Add Food
              </NavLink>
            )}
            {user && (
              <NavLink
              onClick={() => setMenu(false)}
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F97316] border-b-2 border-[#6c6b77]"
                    : "hover:text-[#12068e] hover:border-b-2 hover:border-[#6c6b77]"
                }
              >
                Profile
              </NavLink>
            )}
          </ul>
          </div>
        )}
      </div>
      

        
    </div>
    
      </>
  );
};

export default Navbar;
