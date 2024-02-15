import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
//import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/Restaurantmenu";
import { lazy } from "react";

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header /> {/*Component Composition */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>
  );
};
const Contact = lazy(() => import('./components/Contact'));
const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path:'/about',
        element: <About />,
      },
      {
        path:'/contact',
        element: (
          <Suspense fallback="...loading">
           <Contact />
          </Suspense>
        )
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      }
    ],
    
    errorElement: <Error />,
  },
  
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter}>
    <AppLayout />
  </RouterProvider>
);