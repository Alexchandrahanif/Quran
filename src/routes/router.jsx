import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import DetailSurah from "../pages/DetailSurah";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <DetailSurah />,
      },
    ],
  },
]);

export default router;
