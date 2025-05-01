import { createBrowserRouter } from "react-router-dom";

 import Error from "../components/Error";
import Project_page from "../components/Project_page";
import Home_Image from "../components/Home_Image";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: '/', // This is the preferred way for default route
        element: <Home_Image />,
      },
      {
        path: "project",
        element: <Project_page />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

 
export default router;
