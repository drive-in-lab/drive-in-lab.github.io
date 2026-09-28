import { lazy } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'

// Route-level code splitting keeps the initial page small.
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Research = lazy(() => import('./pages/Research'))
const Projects = lazy(() => import('./pages/Projects'))
const Facilities = lazy(() => import('./pages/Facilities'))
const Team = lazy(() => import('./pages/Team'))
const News = lazy(() => import('./pages/News'))
const NewsPost = lazy(() => import('./pages/NewsPost'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

// HashRouter keeps every route working as a plain static file on GitHub
// Pages — no server-side rewrite rules needed for deep links or refreshes.
const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/research', element: <Research /> },
      { path: '/projects', element: <Projects /> },
      { path: '/facilities', element: <Facilities /> },
      { path: '/team', element: <Team /> },
      { path: '/news', element: <News /> },
      { path: '/news/:slug', element: <NewsPost /> },
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
