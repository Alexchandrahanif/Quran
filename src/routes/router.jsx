import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import DetailSurah from "../pages/DetailSurah";
import Home from "../pages/Home";
import QrScanner from "../pages/QrScanner";

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
        path: "/scan",
        element: <QrScanner />,
      },
    ],
  },
]);

export default router;
