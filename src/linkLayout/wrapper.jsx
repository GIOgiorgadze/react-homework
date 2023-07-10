import { Link, Outlet } from "react-router-dom"

const LinkPage =()=>{
    return(
        <div>
            <Link to="/main">Main</Link>
            <Link to="/about">About</Link>
            <Outlet/>
        </div>
    )
}

export default LinkPage