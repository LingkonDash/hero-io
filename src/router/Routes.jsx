import { createBrowserRouter } from "react-router"
import Root from "../Layout/Root"
import Home from "../pages/Home"
import Apps from "../pages/Apps"
import Installed from "../pages/Installed"
import AppDetails from "../Components/AppDetails"
import Loading from "../Components/Shared/Loading"
import ErrorPage from "../pages/ErrorPage"


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { 
        index: true, 
        loader: () => fetch('/appData.json'),
        Component: Home, 
        hydrateFallbackElement: <Loading />
      },
      {
        path: 'apps',
        loader: () => fetch('/appData.json'),
        Component: Apps,
        hydrateFallbackElement: <Loading />
      },
      {
        path: 'installed',
        loader: () => fetch('/appData.json'),
        Component: Installed,
        hydrateFallbackElement: <Loading />
      },
      {
        path: 'app-details/:appName',
        loader: () => fetch('/appData.json'),
        Component: AppDetails,
        hydrateFallbackElement: <Loading />,
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage errorType={'error404'} />
  }
])