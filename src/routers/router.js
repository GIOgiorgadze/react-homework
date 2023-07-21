import Header from "../layout/wrapper";
import PullPage from "../pages/PullPage";
import RequestPage from "../pages/RequestPage";
import MainPage from "../pages/main";

const router = [
    {
        element: <Header/>,
        path: "/",
        children:[
            {
                element: <MainPage/>,
                index:true
            },
            {
                element: <PullPage/>,
                path: "/pull"
            },
            {
                element: <RequestPage/>,
                path: "/request"
            }
            
        ]
    }
]
export default router