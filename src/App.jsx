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
  SelectCourse,
  ViewCourse,
  ViewTemplate,
  AssignmentTemplate,
  GenerateAssignment,
} from "./pages/index";
const App = () => {
  const Layout = () => {
    return (
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
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
          element: <SelectCourse />,
        },
        {
          path: "view-course",
          element: <ViewCourse />,
        },
        {
          path: "view-template",
          element: <ViewTemplate />,
        },
        {
          path: "/select-template",
          element: <AssignmentTemplate />,
        },
        {
          path: "generate-assignment",
          element: <GenerateAssignment />,
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
