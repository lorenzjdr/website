import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Home from './Pages/Home/Home';
import BlogHome from './Pages/Blog/BlogHome';
import EmptyPage from './components/Empty/EmptyPage';

import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

import BlogPost from './Pages/Blog/BlogPost';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <BlogHome />
  },
  {
    path: '*', 
    element:<EmptyPage message='What are you looking for ? :D'/>
  },
  {
    path: "/blog/:id",
    element: <BlogPost/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
