import React from "react";
import MiniBar from "./components/MiniBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Home,
  Aboutus,
  Contactus,
  Faqs,
  GenerateAssignment,
  ViewCourse,
  ViewTemplate,
} from "./pages/index";
const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about-us",
          element: <Aboutus />,
        },
        {
          path: "/contact-us",
          element: <Contactus />,
        },
        {
          path: "/faqs",
          element: <Faqs />,
        },
        {
          path: "/select-course",
          element: <GenerateAssignment />,
        },
        {
          path: "view-course",
          element: <ViewCourse />,
        },
        {
          path: "view-template",
          element: <ViewTemplate />,
        },
      ],
    },
  ]);

  return (
    <div>
      <MiniBar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
