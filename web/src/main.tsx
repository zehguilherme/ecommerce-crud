import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home.tsx";
import { ProductRegister } from "./pages/ProductRegister.tsx";
import { ProductEdit } from "./pages/ProductEdit.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./pages/NotFound.tsx";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/produto",
    element: <ProductRegister />,
  },
  {
    path: "/produto/:productId",
    element: <ProductEdit />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

    <ToastContainer />
  </>
);
