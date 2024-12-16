import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import CartPage from "./components/CartPage.jsx";
import DetailedPage from "./components/DetailedPage.jsx";
import Home from "./components/Home.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },

      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/cart',
        element:<CartPage/>
      },
      {
        path:'/details',
        element:<DetailedPage/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
);
