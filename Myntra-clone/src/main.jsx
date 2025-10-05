import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './routes/Home.jsx'
import mytrastore from './store/index.js'
import { Provider } from 'react-redux'
import Bag from './routes/Bag.jsx'

const router = createBrowserRouter([{
  path: "/", element: <App />, children: [
    { path: "/", element: <Home />, },
    { path: "/bag", element: <Bag />, },

  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={mytrastore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
