import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import MyEnrolledClass from "../Pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import ClassDetail from "../Pages/ClassesDetails/ClassDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'instructor',
        element: <Instructor></Instructor>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      },
      {
        path: 'classes/:id',
        element: <ClassDetail></ClassDetail>,
        loader: ({params}) => fetch(`http://localhost:5000/classes/${params.id}`)
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
      }
    ]
  }
]);

export default router;