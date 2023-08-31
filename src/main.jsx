import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Order } from './routes/order.jsx'
import { Profile } from './routes/profile.jsx'
import { FoodPage } from './routes/food-page.jsx'
import { Home } from './routes/home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [

      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "order",
        element: <Order></Order>
      },
      {
        path: "profile",
        element: <Profile></Profile>
      },
      {
        path: "food-page",
        element: <FoodPage></FoodPage>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
