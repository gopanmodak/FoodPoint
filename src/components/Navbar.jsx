import { Link, NavLink } from "react-router-dom";
import mainlogo from "../assets/main-logo.webp";
import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../auth/__firebaseinit";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { user } = useContext(authContext);
  return (
    <div className="bg-[#FFF7ED]  backdrop-blur-lg shadow-lg fixed top-0 w-full z-50">
      <div className="flex justify-between items-center p-3 max-w-7xl mx-auto bg-[#FFF7ED] ">
        <div>
          <img src={mainlogo} alt="logo" className="max-w-28 object-cover" />
        </div>

        <div>
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
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "text-[#F97316] border-b-2 border-[#6c6b77]"
                  : "hover:text-[#12068e] hover:border-b-2 hover:border-[#6c6b77]"
              }
            >
              Cart
            </NavLink>
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
          <div className="flex flex-col items-center gap-2">
            <button className="btn btn-warning" onClick={() => setOpen(!open)}>
              {" "}
              {user?.displayName}{" "}
            </button>
            <div>
              {open && (
                <div>
                  <button
                    className="btn bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => signOut(auth)}
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
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
      </div>
    </div>
  );
};

export default Navbar;
