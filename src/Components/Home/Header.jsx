import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { CgLogIn } from "react-icons/cg";

const Header = () => {
  const { user, logOutUser , loading } = useContext(AuthContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (!loading && user) {
      fetch(`http://localhost:5000/bookings?email=${user.email}`)
        .then(res => res.json())
        .then(data => setCards(data));
    }
  }, [loading, user]);

  const link = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/blogs">Blog</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </>
  );

  const handleLogOut = () => {
    logOutUser(user);
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} id="nav" className="menu  font-semibold text-lg menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {link}
            </ul>
          </div>
          <Link to="/"><img src="/public/images/logo.svg" className="w-20" alt="logo" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul id="navLg" className="menu menu-horizontal text-lg font-semibold  gap-8 px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <div className="dropdown dropdown-end z-10">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">{cards?.length}</span>
              </div>
            </div>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">{cards?.length} Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <Link to="/card" className="btn btn-primary btn-block">View cart</Link>
                </div>
              </div>
            </div>
          </div>
          {
            !user ? (
              <Link to="/login" className="text-3xl"><CgLogIn /></Link>
            ) : (
              <div className="dropdown dropdown-end z-10">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><button onClick={handleLogOut}>Log Out</button></li>
                </ul>
              </div>
            )
          }

          <Link to="/" className="btn bg-transparent border-[#FF3811] text-[#FF3811] ">Appointment</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

