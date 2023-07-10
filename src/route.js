import LinkPage from "./linkLayout/wrapper"
import MainPage from "./pages/main"
import AboutPage from "./pages/about"
import StartPage from "./pages/startPage"
import DinamicPage from "./pages/dinamicPage"


const router = [
    {
        element: <LinkPage/>,
        path: "/",
        children:[
            {
                element: <StartPage/>,
                index:true
            },
            {
                element: <MainPage/>,
                path:"/main"
            },
            {
                element: <AboutPage/>,
                path: "/about"
            }
        ]
    },
    {
        element: <DinamicPage/>,
        path: '/users/:id'
    }
]

export default router