import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextTransition, { presets } from 'react-text-transition';

export default function TopBar() {
  const navigate = useNavigate();
  const isLogedin = localStorage.getItem("sessiontoken");

  const handleLogout = () => {
    localStorage.removeItem("sessiontoken");
    navigate("/login");
  };

  return (
    <div className="flex-none gap-2">
      <div className="navbar bg-base-100 h-8">
        <div className="flex-1 px-1">
          <Link className="text" to="/">
            <img
              alt="Tailwind CSS Navbar component"
              className="w-32 h-8"
              src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
            />
          </Link>

          <a className="btn btn-ghost text-xs ml-1">About</a>
          <a className="btn btn-ghost text-xs ml-1">Products</a>
          <a className="btn btn-ghost text-xs ml-1">for Teams</a>

          <div className="form-control px-1">
            <input
              type="text"
              placeholder="Search..."
              className="input w-full h-5" // Adjusted height
            />
          </div>

          {isLogedin ? (
            <button
              className="btn text-xs btn-outline btn-error ml-2" // Adjusted margin
              onClick={handleLogout}
            >
              logout
            </button>
          ) : (
            <>
              <div className="ml-2"> {/* Adjusted margin */}
                <Link
                  className="btn text-xs btn-outline btn-primary"
                  to="/login"
                >
                  Log in
                </Link>
              </div>

              <div className="px-1">
                <Link className="btn text-xs h-8 btn-primary" to="/signup">
                  Sign up
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    
  );
}
