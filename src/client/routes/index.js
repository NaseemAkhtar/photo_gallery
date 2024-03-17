import {lazy, Suspense} from 'react'
import { Routes, Route } from "react-router-dom";
const Home = lazy(()=> import('../pages/home/home'))
const Favourite = lazy(()=>import('../pages/favourite/index'))
const PageNotFound = lazy(()=> import('../pages/404/page404'))

function AppRoutes() {
  
const ROUTES = [
  { path: "/", exact: true, element: <Suspense fallback={<h1>Home Loaing...</h1>}><Home /></Suspense> },
  { path: "/favourite", exact: true, element: <Suspense fallback={<h1>Favourite Loaing...</h1>}><Favourite /></Suspense> },
  { path: "*", exact: false, element: <Suspense fallback={<h1>Page Loading...</h1>}><PageNotFound /></Suspense> }
]
  return (
    <Routes>
        {ROUTES?.map((obj, index) => (
        <Route
            key={index}
            path={obj.path}
            exact={obj.exact}
            element={obj.element}
        />
        ))}
    </Routes>
  );
}

export default AppRoutes;
