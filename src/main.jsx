import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/dashboard-2/",
    element: <App />,

    children: [
      {
        path: "/dashboard-2/",
        element: <Home />,
      },

      {
        path: "/dashboard-2/details",
        element: <Home />,
      },

      {
        path: "/dashboard-2/list",
        element: <Home />,
      },

      {
        path: "/dashboard-2/user",
        element: <Home />,
      },

      {
        path: "/dashboard-2/search",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
