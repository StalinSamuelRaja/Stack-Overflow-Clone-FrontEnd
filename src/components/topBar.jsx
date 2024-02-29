import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LeftSideBar from "../components/leftSideBar"; // Import LeftSideBar component

export default function TopBar() {
  const navigate = useNavigate();
  const isLoggedin = localStorage.getItem("sessiontoken");
  const [showLeftMenu, setShowLeftMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("sessiontoken");
    navigate("/login");
  };

  const handleProfile = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      handleLogout();
    }
  };
  const handleLogoClick = () => {
    // Redirect to the main space
    navigate("/ques/all");
  };
  return (
    <div className="flex-none gap-2 ">
      <div className="navbar bg-base-100 h-8">
        <div className="flex-1 px-1 flex items-center">
          <div className="sm:hidden flex flex-cols-2 mr-auto">
            {/* Display on small screens */}
            <button
              className="btn btn-ghost text-xs p-2" // Adjusted padding
              onClick={() => setShowLeftMenu(!showLeftMenu)}
            >
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 124 124"
                xml:space="preserve"
                width="20" // Adjusted width
                height="20" // Adjusted height
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"></path>
                    <path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"></path>
                    <path d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"></path>
                  </g>
                </g>
              </svg>
            </button>

            {/* Stack Overflow logo with click functionality */}
            <a href="/ques/all" onClick={handleLogoClick}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
                alt="Stack Overflow Logo"
                className="ml-2 mt-1 w-10 h-10 cursor-pointer" // Adjusted margin, size, and cursor
              />
            </a>
          </div>

          <Link className="text" to="/">
            <img
              alt="Tailwind CSS Navbar component"
              className="hidden sm:inline w-16 h-8 mr-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
            />
          </Link>

          <div className="hidden sm:flex flex-1 justify-end">
            {/* Hide on small screens */}
            <a className="btn btn-ghost text-xs">About</a>
            <a className="btn btn-ghost text-xs">Products</a>
            <a className="btn btn-ghost text-xs">for Teams</a>
          </div>

          <div className="form-control px-1 hidden sm:flex">
            {/* Adjusted height and hidden on small screens */}
            <input
              type="text"
              placeholder="Search..."
              className="input w-full h-5" // Adjusted height
            />
          </div>

          {isLoggedin ? (
            <>
              <button
                className="btn text-xs btn-outline btn-primary ml-2" // Adjusted margin
                onClick={handleProfile}
              >
                Profile
              </button>
              <button
                className="btn text-xs btn-outline btn-error ml-2" // Adjusted margin
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="ml-auto flex">
                {/* Adjusted margin and flex alignment */}
                <Link
                  className="btn text-xs btn-outline btn-primary"
                  to="/login"
                >
                  Log in
                </Link>
                <div className="mx-1"></div> {/* Add space between buttons */}
                <Link className="btn text-xs h-8 btn-primary" to="/signup">
                  Sign up
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Render LeftSideBar only if showLeftMenu is true */}
      {showLeftMenu && (
        <div className="absolute menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 top-8 left-0 bg-white w-40 sm:w-full sm:hidden">
          <LeftSideBar />
        </div>
      )}
    </div>
  );
}
