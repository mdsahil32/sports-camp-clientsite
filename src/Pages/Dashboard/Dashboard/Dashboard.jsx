import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";


const Dashboard = () => {
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
                    {/* Sidebar content here */}
                    <NavLink to='/dashboard/myclass'>My Selected Classes</NavLink>
                  <NavLink to='/dashboard/enrolledclass' className='my-2'>My Enrolled Classes</NavLink>
                </ul>

            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Dashboard;