import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#482e1e] text-white ">
      <footer className="footer sm:footer-horizontal p-10 max-w-7xl mx-auto">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className=" hover:text-[#FB923C]">Branding</a>
          <a className=" hover:text-[#FB923C]">Design</a>
          <a className=" hover:text-[#FB923C]">Marketing</a>
          <a className=" hover:text-[#FB923C]">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to='/about-us' className="hover:text-[#FB923C]">About us</Link>
          <a className="hover:text-[#FB923C]">Contact</a>
          <a className="hover:text-[#FB923C]">Jobs</a>
          <a className="hover:text-[#FB923C]">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="hover:text-[#FB923C]">Terms of use</a>
          <a className="hover:text-[#FB923C]">Privacy policy</a>
          <a className="hover:text-[#FB923C]">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
