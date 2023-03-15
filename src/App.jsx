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
  Signin,
  Signup,
  ForgotPassword,
} from "./pages/index";
import Error from "./components/Error";
const App = () => {
  const Layout = () => {
    return (
      <div>
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
      errorElement: <Error />,
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
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "forgot-password",
          element: <div>Forgot Password</div>,
        },
        {
          path: "signin",
          element: <Signin />,
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
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
