import { Navigate, NavLink, Route, Routes } from "react-router"
import LazyPage1 from "../pages/LazyPage1"
import LazyPage2 from "../pages/LazyPage2"
import LazyPage3 from "../pages/LazyPage3"

export const LazyLayout = () => {
  return (
    <>
        <h1>LazyLayout</h1>

        <ul>
          <li>
            <NavLink to="/lazyload/lazy1">Lazy1</NavLink>
          </li>
          <li>
            <NavLink to="/lazyload/lazy2">Lazy2</NavLink>
          </li>
          <li>
            <NavLink to="/lazyload/lazy3">Lazy3</NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="lazy1" element={<LazyPage1/>}/>
          <Route path="lazy2" element={<LazyPage2/>}/>
          <Route path="lazy3" element={<LazyPage3/>}/>

          {/* <Route path="*" element={<h1>Not Found</h1>}/> */}
          <Route path="*" element={<Navigate replace to="/lazyload/lazy1"/>}/>
        </Routes>
    </>
  )
}

export default LazyLayout