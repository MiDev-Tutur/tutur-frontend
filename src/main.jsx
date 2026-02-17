import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"
import Learn from "./pages/Dashboard/Home"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/REgister"
import Profile from "./pages/Dashboard/Profile"
import Subscriptions from "./pages/Dashboard/Subscriptions"
import CompletedTask from "./pages/Dashboard/CompletedTask"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/learn',
    element: <Learn/>
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