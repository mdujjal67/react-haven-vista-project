import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className="bg-gray-100 text-[#131313CC] hover:text-[#23BE0A] p-2 rounded-xl" to='/'>Home</Link>
                            <Link className="bg-gray-100 text-[#131313CC] hover:text-[#23BE0A] p-2 rounded-xl my-2" to='/update-profile'>Update Profile</Link>
                            <Link className="bg-gray-100 text-[#131313CC] hover:text-[#23BE0A] p-2 rounded-xl mb-2" to='/user-profile'>User Profile</Link>
                            <Link className="bg-gray-100 text-[#131313CC] hover:text-[#23BE0A] p-2 rounded-xl mb-2" to='/agents'>Agents</Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Haven Vista</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink className={({ isActive }) => isActive ? 'isActive menu-item mr-4' : 'menu-item text-[#131313CC] mr-3 color'} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'isActive menu-item' : 'menu-item text-[#131313CC]'} to='/update-profile'>Update Profile</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'isActive menu-item ml-4' : 'menu-item text-[#131313CC] ml-3'} to='/user-profile'>User Profile</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'isActive menu-item ml-4' : 'menu-item text-[#131313CC] ml-3'} to='/agents'>Agents</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;