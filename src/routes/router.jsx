import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { Layout } from "../components/Layout";
import DetailSurah from "../pages/DetailSurah";
import Doa from "../pages/Doa";
import DetailDoa from "../pages/DetailDoa";

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
      {
        path: "/doa",
        element: <Doa />,
      },
      {
        path: "/doa/:id",
        element: <DetailDoa />,
      },
    ],
  },
]);

export default router;
