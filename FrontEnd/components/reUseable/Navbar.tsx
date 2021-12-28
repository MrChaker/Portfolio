import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
export const NavBar = ()=>{
    const [menu, setMenu] = useState(false);

    
    return(
        <nav className="flex px-10  md:px-20 lg:px-40 py-5 justify-between items-center shadow-sm fixed top-0 w-screen bg-slate-200 shadow-gray-400 dark:shadow-slate-800 dark:bg-slate-900 dark:text-white dark:text-grey-900 font-main font-semibold">
            <div className=" text-2xl sm:text-3xl">LOGO</div>
            
            <ul className="md:flex list-none gap-6 text-lg items-center hidden ">
                <NavEl text="Home"/>
                <NavEl text="About"/>
                <NavEl text="Contact"/>
                
            </ul>
            <div>
                <FontAwesomeIcon icon="bars" 
                    className="md:hidden cursor-pointer text-2xl mr-4"
                    onClick={()=>setMenu(true)}
                />
                <ThemeButton />
            </div>

            <div className={` flex md:hidden fixed bg-orange-700 h-screen w-screen left-0 p-6 justify-between ${menu ? "top-0" : "top-[-100%]"} transition-all`}>
                <ul className=" list-none gap-6 text-lg items-center flex flex-col  text-4xl">
                    <NavEl text="Home"/>
                    <NavEl text="About"/>
                    <NavEl text="Contact"/>
                </ul>
                <FontAwesomeIcon icon="times" 
                    className="md:hidden cursor-pointer text-2xl mr-4"
                    onClick={()=>setMenu(false)}
                />
            </div>
        </nav>
    )
}
const NavEl = (props: any)=>{
    return(
    <li>
        <Link href="#">
        <a>
        {props.text}
        </a>
        </Link>
    </li>
    )
}

export const ThemeButton = ()=>{
    const [darkTheme, setDarkTheme] = useState(false);
    useEffect(()=>{
        if( !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches){
            localStorage.setItem("theme", "dark")
            setDarkTheme(true)
        }else if ( !('theme' in localStorage) ) {
            localStorage.setItem("theme", "light")
        }
    },[])
    useEffect(()=>{

        if (localStorage.theme === 'dark' ) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        
    },[darkTheme])

    const setOnStorage = (b : boolean) =>{
        localStorage.setItem("theme", b ? "dark": "light")
    }
 return(
     <>
        <FontAwesomeIcon 
            icon={ darkTheme ? "sun" : "moon"} 
            className={`text-2xl cursor-pointer ${ darkTheme ? "text-yellow-400" : "text-blue-900"}`}
            onClick={()=>{
                setOnStorage(!darkTheme);
                setDarkTheme(!darkTheme);
            }}
        />
    </>
 )
}