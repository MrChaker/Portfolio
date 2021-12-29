import type { NextPage } from "next"
import { NavBar } from "./reUseable/Navbar"
import { useState, createContext, useContext } from "react";
export type Menu = {
    menu: boolean,
    setMenu:(b: boolean) => void
}
export const MenuCentext = createContext<Menu>({
    menu: false,
    setMenu: () => false
});
export const useMenuContext = () => useContext(MenuCentext);
//theme
export type Theme = {
    darkTheme: boolean,
    setDarkTheme:(b: boolean) => void
}
export const ThemeCentext = createContext<Theme>({
    darkTheme: false,
    setDarkTheme: () => false
});

export const useThemeContext = () => useContext(ThemeCentext);
export const Layout : NextPage = ({children}) => {
    const [menu, setMenu] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false);

    return(
        <>
        <ThemeCentext.Provider value={{darkTheme, setDarkTheme}}>
            <MenuCentext.Provider value={{menu, setMenu}}>

                <NavBar />
                <div className=' min-h-screen px-10 pt-32 md:px-20 lg:px-40 gap-3 bg-slate-200 dark:bg-slate-900 font-main overflow-hidden' >
                    {children}
                </div>
                
            </MenuCentext.Provider>  
        </ThemeCentext.Provider>      
        </>
    )
}


