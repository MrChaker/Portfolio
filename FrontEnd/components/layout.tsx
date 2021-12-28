import type { NextPage } from "next"
import { NavBar } from "./reUseable/Navbar"

export const Layout : NextPage = ({children}) => {
    return(
        <>
            <NavBar />
            <div className=' h-screen px-10 pt-40 md:px-20 lg:px-40 gap-3 bg-slate-200 dark:bg-slate-900 font-main' >
                {children}
            </div>
        </>
    )
}


