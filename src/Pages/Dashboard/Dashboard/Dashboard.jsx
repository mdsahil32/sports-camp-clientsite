import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    return (
        <>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {isAdmin || !isInstructor && <><NavLink to='/dashboard/myclass' className='text-xl my-3'>My Selected Classes</NavLink>
                        <NavLink to='/dashboard/enrolledclass' className='text-xl my-3'>My Enrolled Classes</NavLink>
                        </>

                        }
                        {isAdmin &&
                            <>
                            <h1 className="text-center bg-blue-500 p-3 text-white">Admin</h1>
                            <NavLink className={({isActive})=>(isActive ? 'text-blue-600' : '')}  to='/dashboard/allusers'><p className="text-xl my-2">Manage Users</p></NavLink>
                            <NavLink className={({isActive})=>(isActive ? 'text-blue-600' : '')} to='/dashboard/manageClass'><p className="text-xl">Manage Class</p></NavLink>
                            </>}
                        {
                            isInstructor && <><NavLink to='/dashboard/addclass' className='text-xl my-3'>Add Class</NavLink>
                            <NavLink to='/dashboard/myclasses' className='text-xl my-3'>My Classes</NavLink></>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Dashboard;