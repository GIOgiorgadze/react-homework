import ContextProvider from "../constext/SetLanguage";
import Header from "../layout/wrapper";
import PullPage from "../pages/PullPage";
import RequestPage from "../pages/RequestPage";
import MainPage from "../pages/main";

const router = [
    {
        element: (
            <div>
                <ContextProvider>
                    <Header/>
                </ContextProvider>
            </div>
        ),
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