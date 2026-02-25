import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/REgister"
import Profile from "./pages/Dashboard/Profile"
import Learn from "./pages/Dashboard/Learn"
import Subscriptions from "./pages/Dashboard/Subscriptions"
import CompletedTask from "./pages/Dashboard/CompletedTask"
import Home from "./pages/Home"
import Community from "./pages/Dashboard/Community"
import Badge from "./pages/Dashboard/Badge"
import Language from "./pages/Dashboard/Language"
import Question from "./pages/Dashboard/Question"

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
  {
    path: '/community',
    element: <Community/>
  },
  {
    path: '/badge',
    element: <Badge/>
  },
  {
    path: '/language',
    element: <Language/>
  },
  {
    path: '/question',
    element:< Question/>
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)