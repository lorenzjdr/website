import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Home from './Pages/Home/Home';
import BlogHome from './Pages/Blog/BlogHome';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/website/",
    element: <Home />,
  },
  {
    path: "/website/blog/",
    element: <BlogHome />
  }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
