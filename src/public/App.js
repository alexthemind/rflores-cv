import { Container, NextUIProvider, Row, Text } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainNavigation } from "./pages/Navigation";

import Home from "./pages/Home";
import Footer from './pages/Footer';
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Track from "./pages/Track";
import Portfolio from "./pages/Portfolio";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: "contact",
      element: <Contact/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: "track",
      element: <Track/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: "portfolio",
      element: <Portfolio/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: "skills",
      element: <Skills/>,
      errorElement: <ErrorPage/>,
    },
  ]);

const App = () => {
    return(
        <NextUIProvider>
            <MainNavigation key={"main-navigation"} />
            
            <RouterProvider router={router} />

            <Footer key={"footer"} />
        </NextUIProvider>
    );
}

export default App