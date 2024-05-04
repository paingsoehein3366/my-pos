import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import EditMenu from './components/Menus/EditMenu'
import MenuCategory from './components/MenuCategories/MenuCategory'
import Menus from './components/Menus/Menus'
import EditMenuCategory from './components/MenuCategories/EditMenuCategory'

const router = createBrowserRouter([
  {
    path: "*",
    element: <h1>404 Not Found Your Page</h1>
  },
  {
    path: "/",
    element: <App />
  },
  {
    path: "/menus",
    element: <Menus />
  },
  {
    path: "menus/:id",
    element: <EditMenu />
  },
  {
    path: "/menu-categories",
    element: <MenuCategory />
  },
  {
    path: "/menu-categories/:id",
    element: <EditMenuCategory />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
