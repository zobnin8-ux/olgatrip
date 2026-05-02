import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LangLayout } from "./layouts/LangLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/ru" replace />,
  },
  {
    path: "/:lang",
    element: <LangLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/ru" replace />,
  },
]);
