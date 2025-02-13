import { lazy, LazyExoticComponent } from "react";
import { LazyPage3 } from "../01-lazyload/pages/LazyPage3";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element

interface Route{
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> |JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import(/**webPackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'))

const Lazy1 = lazy(() => import(/**webPackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import(/**webPackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import(/**webPackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'))

export const routes: Route[] = [
    {
        to: '/lazyload/',
        path:'/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path:'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]