import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Errors from "../views/Errors/Errors";
import Home from "../views/Home/Home";
import About from "../views/About/About";
import Works from "../views/Works/Works";
import Contact from "../views/Contact/Contact";

export const router = createBrowserRouter([
    {
      path: "/",      
      element: <Layout />,
      errorElement: <Errors />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "works",
          element: <Works />
        },
        {
          path: "contact",
          element: <Contact />
        }
      ]
    },
  ], {
    basename: '/portfolio'
  });