import { useThemeContext } from "./layout"
import { GradientButton } from "./reUseable/GradientButton"

export const Techs = () => {
    const { darkTheme } = useThemeContext();
    return(
        <>
            <h1 className="text-center text-5xl text-slate-900 dark:text-slate-200 mt-20 "> Explore my technologies </h1>
            <div className=" h-[600px] ">
                <div className="flex justify-center items-center h-3/4">
                    <GradientButton 
                        text = "Click to Explore "
                        outline
                        from = "#3b82f6"
                        to = "#ec4899"
                        color = { darkTheme ? "#0f172a" : "#e2e8f0"}
                        size = "1.55rem"
                        rounded
                    /> 
                </div>
            </div>
            
        </>
    )
}
