import { Link, NavLink } from "react-router";
import { FaRegUserCircle } from "react-icons/fa";
import profile from "../../assets/user.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const Navbar = () => {
    const { user, Logout } = useContext(AuthContext);

    const navLink = <>
        <li><NavLink className="mx-2" to="/">Home</NavLink></li>
        <li><NavLink className="mx-2" to="/about">About</NavLink></li>
        <li><NavLink className="mx-2" to="/career">Career</NavLink></li>
    </>




    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLink}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <Link className="text-4xl" to="/"><FaRegUserCircle /></Link> */}
                {user ?
                    <div className="dropdown dropdown-end mr-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt={profile} src={profile} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="border border-black menu menu-sm dropdown-content bg-base-100 rounded z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to="/">Profile</Link></li>
                            <li><Link to="/">Settings</Link></li>
                            <li><button onClick={Logout}>Logout</button></li>
                        </ul>
                    </div>
                    :
                    <div role="button" className="btn btn-ghost btn-circle avatar mr-2">
                        <div className="w-10 rounded-full">
                            <Link to="/login">
                                <img alt={profile} src={profile} />
                            </Link>
                        </div>
                    </div>
                }
                {user ?
                    <button onClick={Logout} className="btn btn-outline font-bold px-8 py-2">Logout</button>
                    :
                    <Link to="/login">
                        <button className="btn btn-outline font-bold px-8 py-2">Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;