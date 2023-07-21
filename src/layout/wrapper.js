import { Link, Outlet } from "react-router-dom"
import { useLangContext } from "../constext/SetLanguage"

const Header =()=> {

    const {lang, toggle} = useLangContext()

    return(
        <div>
            <Link to={"/"}> button1 </Link>
            <Link to={"/pull"}> button2 </Link>
            <Link to={"/request"}> button3 </Link>
            <button onClick={toggle}>lang</button>
            <p>Header section, Current language is {lang}</p>
            <Outlet/>
        </div>
    )
}

export default Header