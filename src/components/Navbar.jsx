import { NavLink } from "react-router"
import { useLoginStore } from "../store/loginStore"

export default function Navbar() {
    const isLogin = useLoginStore(state => state.isLogin)
    const style = {
        listStyle : "hover:font-medium hover:text-light"
    }
    return (
        <div className="navbar bg-accent-100 shadow-sm flex items-center gap-6">
            <NavLink className={style.listStyle} to={"/"}>Home</NavLink>
            <NavLink className={style.listStyle} to={"favorite"}>Favorite</NavLink>
            <NavLink className={style.listStyle} to={"login"}>{isLogin ? "Logout" : "Login"}</NavLink>
        </div>
    )
}