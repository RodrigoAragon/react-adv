import { BrowserRouter, Navigate, Route, Routes, NavLink } from "react-router";

import logo from '../logo.svg'
import { routes } from './routes';
import { Suspense } from "react";


export const Navigation = () => {
  return (
    <>
    <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo"/>
                    <ul>
                        {
                            routes.map((route) => {
                                return(
                                    <li key={route.name}>
                                        <NavLink to={route.to} className={({isActive}) => isActive ? 'nav-active' : ''}> {route.name}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>


                <Routes>

                    {
                        routes.map(({name, path, Component}) => {
                            return(
                                <Route key={name} path={path} element={<Component/>}/>
                            )
                        })
                    }

                    <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>
                </Routes>


            </div>
        </BrowserRouter>            
    </Suspense>
    </>
  )
}
