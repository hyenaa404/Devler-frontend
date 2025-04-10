import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },           // /home
      { path: 'contact', element: <Contact /> },    // /contact
    ]
  }
]);

const AppRouter = () => <RouterProvider router={router} />;
export default AppRouter;