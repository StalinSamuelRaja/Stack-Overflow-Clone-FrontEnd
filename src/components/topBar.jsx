export default function TopBar() {
  return (
    <div className="flex-none gap-2">
      <div className="navbar bg-base-100">
        <div className="flex-1 px-1">
          <img alt="Tailwind CSS Navbar component" src="src/assets/logo.png" />
          <a className="btn btn-ghost text-xs">About</a>
          <a className="btn btn-ghost text-xs">Products</a>
          <a className="btn btn-ghost text-xs">for Teams</a>
          <div className="form-control px-1 ">
            <input
              type="text"
              placeholder="Search..."
              className="input w-full h-4"
            />
          </div>
          <div className="">
            <button className="btn text-xs btn-outline btn-primary">Log in</button>
          </div>
          <div className="px-1">
          <button className="btn text-xs h-8 btn-primary">Sign up</button>
          </div>
        </div>
      </div>
    </div>
     
  );
}
