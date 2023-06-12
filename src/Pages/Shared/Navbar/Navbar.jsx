import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg'
import { AuthContext } from '../../../providers/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';

const Navbar = () => {
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
    }


    const navbarOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructor'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        
        {!isAdmin &&!isInstructor &&  user  ? <li><Link to='/dashboard/myclass'>Dashboard</Link></li>: ''}
        { isAdmin ? <li><Link to='/dashboard/allusers'>Dashboard</Link></li> : ''}
        {isInstructor ?<li><Link to='/dashboard/addclass'>Dashboard</Link></li>: ''}
        {
            user ? <>
                <li><Link onClick={handleLogout}>Logout</Link></li>
                <img src={user?.photoURL} className='w-1/12 rounded-full' alt="" /></>
                : <li><Link to='/login'>Login</Link></li>
        }

    </>

    return (
        <div className="navbar bg-white max-w-screen-xl ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content p-2 shadow bg-blue-400 rounded-box w-52 top-0 right-0 left-0 bottom-0 grid grid-cols-3">
                        {navbarOptions}
                    </ul>
                </div>

                <img className='w-1/6 h-20' src={logo} alt="" />
                <h3 className='text-xl font-semibold ml-3 bg-blue-400 p-1 rounded-lg'>Sports Academy</h3>

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbarOptions}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;