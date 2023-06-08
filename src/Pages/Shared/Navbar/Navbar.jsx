import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import logo from '../../../assets/logo.jpg'
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () =>{
        logOut()
    }

    const navbarOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructor'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        {user ? <>
            <li><Link>Dashboard</Link></li> 
            <li><Link onClick={handleLogout}>Logout</Link></li> 
            <img src={user.photoURL} alt="" />
        </>
        
        :<li><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-white max-w-screen-xl ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarOptions}
                    </ul>
                </div>
               
                <img className='w-1/6 h-20' src={logo} alt="" />
                    <h3 className='text-xl font-semibold ml-3'>Sports Academy</h3>
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