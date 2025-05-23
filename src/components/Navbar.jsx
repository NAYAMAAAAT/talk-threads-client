import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="bg-primary">
      <div className="navbar px-0 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
              <FiMenu className="size-5" />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/join-us">Join Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="text-xl font-bold text-white">Talk Threads</a>
        </div>
        <div className="navbar-end gap-4">
          <button className="btn btn-ghost btn-circle text-white">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs indicator-item">2</span>
            </div>
          </button>
          {/* Avatar */}
          <div className="avatar">
            <div className="size-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;