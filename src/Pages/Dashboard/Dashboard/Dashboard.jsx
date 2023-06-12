import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Dashboard = () => {
    const {user} = useContext(AuthContext)
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
                        {isAdmin || !isInstructor && <>
                            <h1 className="text-center bg-blue-500 p-3 text-white">User Email: {user?.email}</h1>
                            <NavLink to='/dashboard/myclass' className={({ isActive }) => (isActive ? 'text-blue-600' : '')}><p className="text-xl my-2">My Selected Classes</p></NavLink>
                            <NavLink to='/dashboard/enrolledclass' className={({ isActive }) => (isActive ? 'text-blue-600' : '')}><p className="text-xl my-2">My Enrolled Classes</p></NavLink>
                        </>

                        }
                        {isAdmin &&
                            <>
                                <h1 className="text-center bg-blue-500 p-3 text-white">Admin Email: {user?.email}</h1>
                                <NavLink className={({ isActive }) => (isActive ? 'text-blue-600' : '')} to='/dashboard/allusers'><p className="text-xl my-2">Manage Users</p></NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'text-blue-600' : '')} to='/dashboard/manageClass'><p className="text-xl">Manage Class</p></NavLink>
                            </>}
                        {
                            isInstructor && <>
                                <h1 className="text-center bg-blue-500 p-3 text-white">Instructor Email: {user?.email}</h1>
                                <NavLink to='/dashboard/addclass' className={({ isActive }) => (isActive ? 'text-blue-600' : '')}><p className="text-xl my-2">Add Class</p></NavLink>
                                <NavLink to='/dashboard/myclasses' className={({ isActive }) => (isActive ? 'text-blue-600' : '')}><p className="text-xl">My Classes</p></NavLink></>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Dashboard;