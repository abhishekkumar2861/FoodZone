/*
*
*      <---***Thinge bundle doing for us***---> 
* Create a server
* HRM- HOt Module Reloading
* File Watcher algorithum -C++
* Building
* MInify
* Cleaning our Code
* Dev and Production Build
* Super fast build Algorithum
* Image Optimization
* Caching while development (image should in project )
* Compression
* Compatible with older version of browser 
*  HTTPS on dev
*  parcel manages port number
*  Consistent hashing Algorithum
*  Zero configuration
*   
*
*/

import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestrauntMenu";
import { Provider } from "react-redux";



const About = lazy(() => import("./components/About"));
const Instamart = lazy(() => import("./components/Instamart"))

const AppLayout = () => {
  return (

    <>
      <Header />
      <Outlet />
      <Footer />

    </>

  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body className="m-0 p-0 max-w-screen-2xl" />
      },
      {
        path: "/About",
        element:
          <Suspense>
            <About />
          </Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/home",
        element: <Body />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/instamart",
        element:
          <Suspense>
            <Instamart />
          </Suspense>
      },
    ]
  },

]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />); 