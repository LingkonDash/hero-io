import { createBrowserRouter } from "react-router"
import Root from "../Layout/Root"
import Home from "../pages/Home"
import Apps from "../pages/Apps"
import Installed from "../pages/Installed"
import AppDetails from "../Components/AppDetails"


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'apps', Component: Apps},
      {path: 'installed', Component: Installed},
      {path: '/app-details/:appName', Component: AppDetails}
    ]
  }
])