import React, { use, useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { Tooltip } from 'react-tooltip';

const Navbar = ({ theme, setTheme }) => {
    const { user, sognout } = use(AuthContext)
    const navigte = useNavigate()
    // console.log(user)

    const location = useLocation()
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handlSignout = () => {
        navigte('/login')
        sognout()
    }
    const links = <>
        <li className={`text-lg p-2 hover:text-[#5BBB7B] ${isScrolled ? 'text-black' : 'text-white'}`}>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-lg p-2 text-[#5BBB7B] border-b-2' : ''}>
                Home
            </NavLink>
        </li>
        <li className={`text-lg p-2 hover:text-[#5BBB7B] ${isScrolled ? 'text-black' : 'text-white'}`}>
            <NavLink to={'/browse-tasks'} className={({ isActive }) => isActive ? 'text-lg p-2 text-[#5BBB7B] border-b-2' : ''}>
                Browse Tasks
            </NavLink>
        </li>
        <li className={`text-lg p-2 hover:text-[#5BBB7B] ${isScrolled ? 'text-black' : 'text-white'}`}>
            <NavLink to={'/add-task'} className={({ isActive }) => isActive ? 'text-lg p-2 text-[#5BBB7B] border-b-2' : ''}>
                Add Task
            </NavLink>
        </li>
        <li className={`text-lg p-2 hover:text-[#5BBB7B] ${isScrolled ? 'text-black' : 'text-white'}`}>
            <NavLink to={'/my-posted-tasks'} className={({ isActive }) => isActive ? 'text-lg p-2 text-[#5BBB7B] border-b-2' : ''}>
                My Posted Tasks
            </NavLink>
        </li>
        <li className={`text-lg p-2 hover:text-[#5BBB7B] ${isScrolled ? 'text-black' : 'text-white'}`}>
            <NavLink to={'/contact-us'} className={({ isActive }) => isActive ? 'text-lg p-2 text-[#5BBB7B] border-b-2' : ''}>
                Contact Us
            </NavLink>
        </li>
    </>

    return (
        <>
            <div className={`sticky top-0 z-1000 transition-colors duration-300
            ${isScrolled ? 'bg-white shadow-md' : location.pathname == '/' ? 'bg-base-content/0' : 'bg-gray-900'}`}>
                <div className="navbar w-full px-4 py-6">
                    <div className="navbar-start w-4/12 ">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-gray-700 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <div>
                            <Link to={'/'}>
                                <img className='w-3/12 rounded-2xl bg-white px-2' src="/assets/taketask_logo.png" alt="" />
                            </Link>
                        </div>
                    </div>

                    <div className="navbar-end space-x-4 w-8/12">
                        <div className="navbar-start hidden lg:flex border-r-1 border-gray-700">
                            <ul className="menu-horizontal space-x-4">
                                {links}
                            </ul>
                        </div>
                        <div>
                            <label className={`swap swap-rotate ${isScrolled ? 'text-black' : 'text-white'}`}>
                                {/* this hidden checkbox controls the state */}
                                <input onClick={() => setTheme(!theme)} type="checkbox" className="theme-controller" value="synthwave" />

                                {/* sun icon */}
                                <svg className="swap-off h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>
                                {/* moon icon */}
                                <svg className="swap-on h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
                        </div>

                        {
                            !user
                                ? <div className='space-x-2'>
                                    <Link to={'/login'}>
                                        <button className={`text-lg p-2 cursor-pointer hover:text-[#5BBB7B] ${isScrolled ? 'text-black' : 'text-white'}`}>Login</button>
                                    </Link>
                                    <Link to={'/sign-up'}>
                                        <button className={`p-3 px-4 transition rounded-md hover:bg-[#1F4B3F] hover:text-white border-none ${isScrolled ? 'bg-[#5BBB7B]' : 'bg-base-100'}`}>Sign Up</button>
                                    </Link>
                                </div>
                                : <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar"
                                        data-tooltip-id="profile"
                                        data-tooltip-content={user?.displayName}
                                        data-tooltip-variant="dark">
                                        <div className="w-10 rounded-full">
                                            <img alt="User Photo" src={user ? user.photoURL : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'} />
                                        </div>
                                    </div>
                                    <Tooltip id="profile" />
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                        <li><a>Profile</a></li>
                                        <li><button onClick={handlSignout}>Logout</button></li>
                                    </ul>
                                </div>
                        }

                        {/* <p>{user&& user.name}</p> */}

                    </div>
                </div>
                {
                    isScrolled || <div className='w-full h-[1px] bg-gray-700 opacity-50'></div>
                }
            </div>
        </>

    );
};

export default Navbar;