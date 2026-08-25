import { Link } from "react-router-dom";
import logo from "../assets/main-logo.webp";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#2d2927] text-gray-300 ">
      <footer className="footer sm:footer-horizontal p-10 max-w-7xl mx-auto">
        <nav>
          <img src={logo} alt="logo" className="h-20" />
          <p className="max-w-xs">
            Good food, made simple. Discover local favorites and have them
            delivered fresh to your door.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Explore</h6>
          <Link to="/about-us" className="hover:text-[#FB923C]">
            About us
          </Link>
          <Link to="/contact" className="hover:text-[#FB923C]">
            Contact
          </Link>
          <Link to="/categories" className="hover:text-[#FB923C]">
            Categories
          </Link>
          <Link to="/faq" className="hover:text-[#FB923C]">
            FAQ
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <Link to="/terms" className="hover:text-[#FB923C]">
            Terms of Use
          </Link>
          <Link to="/privacy" className="hover:text-[#FB923C]">
            Privacy policy
          </Link>
          <Link to="/cookie-policy" className="hover:text-[#FB923C]">
            Cookie policy
          </Link>
          <Link to="/cookie-policy" className="hover:text-[#FB923C]">
            Track an order
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Get in touch</h6>
          <p className="flex items-center gap-2">
            <span>
              {" "}
              <IoLocationOutline />
            </span>{" "}
            Mirpur-10, Dhaka
          </p>
          <p className="flex items-center gap-2">
            <span>
              {" "}
              <FiPhoneCall />
            </span>{" "}
            017092-00099
          </p>
          <p className="flex items-center gap-2">
            <span>
              {" "}
              <IoMdTime />
            </span>{" "}
            Sat-Fri , (10am – 11pm)
          </p>
        </nav>

        
      </footer>

      <div className="border-t-2 border-t-gray-600 max-w-7xl mx-auto py-5 flex justify-between text-gray-300">
          <p className="text-md">© 2023 - {new Date().getFullYear()} <span className="text-orange-500">FoodPoint</span>. All rights reserved.</p>
          <p>Freshly made. Always delivered with care.</p>
        </div>


    </div>
  );
};

export default Footer;
