import { NavBar } from '../general/Navbar'
import { useState, createContext, useContext, ReactNode } from 'react'
export type Menu = {
  menu: boolean
  setMenu: (b: boolean) => void
}
export const MenuCentext = createContext<Menu>({
  menu: false,
  setMenu: () => false
})
export const useMenuContext = () => useContext(MenuCentext)
//theme
export type Theme = {
  darkTheme: boolean
  setDarkTheme: (b: boolean) => void
}
export const ThemeCentext = createContext<Theme>({
  darkTheme: false,
  setDarkTheme: () => false
})

export const useThemeContext = () => useContext(ThemeCentext)

export const Layout = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <>
      <ThemeCentext.Provider value={{ darkTheme, setDarkTheme }}>
        <MenuCentext.Provider value={{ menu, setMenu }}>
          <NavBar />
          <div
            className=" min-h-screen gap-3 overflow-hidden bg-slate-200 px-10 pt-32 font-main dark:bg-slate-900 md:px-20 lg:px-40"
            id="screen"
          >
            {children}
          </div>
        </MenuCentext.Provider>
      </ThemeCentext.Provider>
    </>
  )
}
