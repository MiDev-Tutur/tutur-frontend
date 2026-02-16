import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"
import Home from "./pages/Home"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/REgister"
import Profile from "./pages/Profile"
import Subscriptions from "./pages/Subscriptions"
import CompletedTask from "./pages/CompletedTask"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/subscriptions',
    element: <Subscriptions/>
  },
  {
    path: '/completedtask',
    element: <CompletedTask/>
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)