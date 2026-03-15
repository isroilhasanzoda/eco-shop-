import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import Layout from './Layout/Layout';
import Home from './pages/Home/Home'
import Product from './pages/Product/Product';
import Favourites from './pages/Favourites/Favourites';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
    ],
  },
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
