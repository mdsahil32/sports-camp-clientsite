import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Classes from "../Pages/Classes/Classes";
import ClassDetail from "../Pages/ClassesDetails/ClassDetail";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import MyEnrolledClass from "../Pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import Instructor from "../Pages/Instructor/Instructor";
import AdminRoute from "./AdminRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import InstructorAddClass from "../Pages/Dashboard/InstructorAddClass/InstructorAddClass";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      },
      {
        path: 'instructor',
        element: <Instructor></Instructor>
      },
      {
        path: 'classes/:id',
        element:<ClassDetail></ClassDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/classes/${params.id}`)
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'myclass',
        element: <MyClass></MyClass>,
      },
      {
        path: 'enrolledclass',
        element: <MyEnrolledClass></MyEnrolledClass>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      // Admin routes -----------------
      {
        path: 'allusers',
        element: <AdminRoute><AllUser></AllUser></AdminRoute>
      },
      {
        path: 'manageClass',
        element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
      },
      // --------------------
      // Instructor route  -------------
      {
        path: 'addclass',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: 'myclasses',
        element: <InstructorRoute><InstructorAddClass></InstructorAddClass></InstructorRoute>
      }
    ]
  }
]);

export default router;