import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
          <Navbar></Navbar>  
          <Outlet></Outlet>
          <Footer></Footer>
        </>
    );
};

export default MainLayout;