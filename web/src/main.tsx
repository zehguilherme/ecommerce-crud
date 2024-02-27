import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ProductRegister } from "./pages/ProductRegister.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/produto",
    element: <ProductRegister />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
