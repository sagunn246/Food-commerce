import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Cart from "./Component/Cart/Component/Cart.jsx";
import MainAuth from "./Component/Authentication/MainAuth.jsx";
import Setting from "./Component/Setting/Setting.jsx";
import DashboardMain from "./Component/Dashboard/DashboardMain.jsx";
import Home from "./Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <App />
          </div>
        ),
      },
      {
        path: "/cart",
        element: (
          <div>
            <Cart />
          </div>
        ),
      },
      {
        path: "/setting",
        element: (
          <div>
            <Setting />
          </div>
        ),
      },
      {
        path: "/dash",
        element: (
          <div>
            <DashboardMain />
          </div>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
