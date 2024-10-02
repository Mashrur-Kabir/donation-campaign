import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import BranchDetails from "./Components/branchDetails/branchDetails";
import Donated from "./Components/Donated/Donated";
import Statistics from "./Components/Statistics/Statistics";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        loader: () => fetch("/campaign.json"),
        element: <BranchDetails></BranchDetails>,
      },
      {
        path: "/donation",
        loader: () => fetch("/campaign.json"),
        element: <Donated></Donated>,
      },
      {
        path: "/statistics",
        loader: () => fetch("/campaign.json"),
        element: <Statistics></Statistics>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
