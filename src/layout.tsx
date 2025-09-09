import { Outlet } from "react-router"
import { Sidebar } from "./components/sidebar"

export const Layout = () => {
    return(
        <div className="h-screen flex">
            <Sidebar/>
            <Outlet/>
        </div>
    )

}
