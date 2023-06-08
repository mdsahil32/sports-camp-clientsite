import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
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
        }
      ]
    },
  ]);

  export default router;