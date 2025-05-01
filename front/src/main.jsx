import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 import Home_Image from './components/Home_Image.jsx';
import Project_page from './components/Project_page.jsx';
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ViweProjectDetail from './components/ViweProjectDetail.jsx';
import Save_EditPage from './components/Save_EditPage.jsx';

import Create from './components/Create.jsx';
import UploadDashBoard from './components/UploadDashBoard.jsx';
import { store } from './Redux/store.js';
 

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
        path: "create",
        element: <Create />,
      },
      {
        path: "uploadpgae",
        element: <UploadDashBoard />,
      },
        
       {
        path: "view-project",
        element: <ViweProjectDetail />,
      },
      {
        path: "edit-transcript",
        element: <Save_EditPage/>,
      },
       {
        path: "*",
        element: <Error/>,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>,
      </StrictMode>,
)
