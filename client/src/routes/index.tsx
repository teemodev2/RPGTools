import { createBrowserRouter } from "react-router-dom";
import FeatsPage from "../pages/FeatsPage";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/feats",
    element: <FeatsPage />,
  },
]);
