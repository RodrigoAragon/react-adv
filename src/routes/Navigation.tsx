import logo from '../logo.svg'
import { BrowserRouter, Navigate, Route, Routes, NavLink } from "react-router";
import { RegisterPage, FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage } from '../03-forms/pages';

export const Navigation = () => {
  return (
    <>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo"/>
                    <ul>
                        <li>
                            <NavLink to="/register" className={({isActive}) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Basic Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Yup Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Components Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstraction" className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Abstraction Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({isActive}) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="register" element={<RegisterPage/>}/>
                    <Route path="formik-basic" element={<FormikBasicPage/>}/>
                    <Route path="formik-yup" element={<FormikYupPage/>}/>
                    <Route path="formik-components" element={<FormikComponents/>}/>
                    <Route path="formik-Abstraction" element={<FormikAbstraction/>}/>
                    <Route path="home" element={<h1>Home Page</h1>}/>


                    <Route path="/*" element={<Navigate to="/home" replace/>}/>
                </Routes>


            </div>
        </BrowserRouter>            
    </>
  )
}
