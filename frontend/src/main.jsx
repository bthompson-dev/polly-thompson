import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import Home from './pages/Home.jsx'
import Articles from './pages/Articles.jsx'
import Contact from './pages/Contact.jsx'
import Videos from './pages/Videos.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "articles",
    element: <Articles />
  },
  {
    path: "videos",
    element: <Videos />
  },
  {
    path: "contact",
    element: <Contact />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
