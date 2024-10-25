import React from "react";

const handleLogoClick = () => {
  // Redirect to the main space
  navigate("/ques/all");
  navigate("/");
};

const Footergrid = () => {
  return (
    <footer className="footer  bg-black text-white">
      <div className="footer__inner  container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="footer__logo flex items-center justify-start mb-4 md:col-span-1">
          {/* Stack Overflow logo with click functionality */}
          <a href="/" onClick={handleLogoClick}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
              alt="Stack Overflow Logo"
              className="ml-8 mt-1 w-10 h-10 cursor-pointer" // Adjusted margin, size, and cursor
            />
          </a>
          <span className="text-lg font-bold">Tech Hub</span>
        </div>
        <nav className="footer__nav md:col-span-3 ml-0 grid grid-cols-2 md:grid-cols-4 gap-10">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">Tech Hub</li>
            <a href="/ques/all">
              <li className="footer__nav-item">Questions</li>
            </a>
            <li className="footer__nav-item">Help</li>
          </ul>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">PRODUCTS</li>
            <li className="footer__nav-item">Teams</li>
            <li className="footer__nav-item">Advertising</li>
            <li className="footer__nav-item">Collectives</li>
            <li className="footer__nav-item">Talent</li>
          </ul>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">COMPANY</li>
            <li className="footer__nav-item">About</li>
            <li className="footer__nav-item">Press</li>
            <li className="footer__nav-item">Work Here</li>
            <li className="footer__nav-item">Legal</li>
            <li className="footer__nav-item">Privacy Policy</li>
            <li className="footer__nav-item">Terms of Service</li>
            <li className="footer__nav-item">Contact</li>

            <li className="footer__nav-item">Cookie Settings</li>
            <li className="footer__nav-item">Cookie Policy</li>
          </ul>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">KNOW MORE ABOUT ME</li>
            <a
              href="https://www.linkedin.com/in/stalinsamuelraja"
              target="_blank"
            >
              <li className="footer__nav-item">Linkedin</li>
            </a>

            <a href="https://github.com/StalinSamuelRaja" target="_blank">
              <li className="footer__nav-item">GitHub</li>
            </a>

            <a href="https://srstalin.netlify.app/" target="_blank">
              <li className="footer__nav-item">Portfolio</li>
            </a>

            
          </ul>
        </nav>
        <div className="footer__legal text-sm text-gray-400 ml-0 mt-4 md:col-span-full flex items-center  justify-center">
          {/* Legal information */}
          <span>&copy; 2024 Tech Hub. All rights reserved.</span>
          <span className="ml-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
          </span>
          <span className="ml-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footergrid;
