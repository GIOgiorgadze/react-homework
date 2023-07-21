import { Link, Outlet } from "react-router-dom"

const Header =()=> {

    return(
        <div>
            <Link to={"/"}> button1 </Link>
            <Link to={"/pull"}> button2 </Link>
            <Link to={"/request"}> button3 </Link>
            <p>Header section</p>
            <Outlet/>
        </div>
    )
}

export default Header