import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Profile from "./pages/Dashboard/Profile"
import Learn from "./pages/Dashboard/Learn"
import Home from "./pages/Home"
import Community from "./pages/Dashboard/Community"
import Language from "./pages/Dashboard/Language"
import Question from "./pages/Dashboard/Question"
import UrbanLegend from "./pages/Dashboard/UrbandLegend"
import LegendStory from "./pages/Dashboard/LegendStory"
import Song from "./pages/Dashboard/Song"
import UrbanTest from "./pages/Dashboard/UrbanTest"
import Translate from "./pages/Dashboard/Translate"

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
    path: '/community',
    element: <Community/>
  },
  {
    path: '/language',
    element: <Language/>
  },
  {
    path: '/question',
    element:< Question/>
  },
  {
    path: '/urban-legend',
    element: <UrbanLegend/>
  },
  {
    path: '/legend-story',
    element: <LegendStory/>
  },
  {
    path: '/song',
    element: <Song></Song>
  },
  {
    path: '/urban-test',
    element: <UrbanTest/>
  },
  {
    path: '/translate',
    element: <Translate/>
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)