import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useBlurContext } from "../../pages"
import { Button } from "./reUseable/Button";
import Image from "next/image";
import { motion } from "framer-motion";
export const Contact = () => {
    const { isBlured, setIsBlured } = useBlurContext();
    return(
        <>
            <div className={`fixed top-1/2 left-1/2 z-40 translate-x-[-50%] translate-y-[-50%] h-[600px]  lg:w-[1000px] sm:w-[800px] w-[99%] bg-slate-200 rounded-lg shadow-light py-8 sm:py-4 px-11 text-slate-700 text-base sm:text-xl ${ !isBlured ? 'hidden' : '' }  overflow-scroll md:overflow-auto`}>
                <div className=" text-right ">
                        <FontAwesomeIcon 
                            icon="times"  
                            className=" hover:scale-150 transition-all mb-6"
                            onClick={()=>setIsBlured(false)}
                        />
                </div>
                <div className="flex justify-between gap-20">
                    <div className=" sm:flex flex-col items-start hidden ">
                        <h1 className=" text-3xl lg:text-5xl font-semibold text-slate-700 my-4"> Contact me ✉️</h1>
                        <p className=" max-w-xs text-lg lg:text-xl">No matter where you are don't hesitate to say "Hello"</p>
                        <motion.div 
                            whileHover={{ scale: 1.2 }}
                            className=" m-auto "
                        >
                            <Image src = "/Saly-44.png" width={300} height={300}/>
                        </motion.div>
                    </div>
                    <form className=" sm:w-1/2 w-full ">
                        
                        <div className="flex flex-col lg:flex-row w-full justify-between">
                            <div className="w-full lg:w-5/12">
                                <label htmlFor="first name" className="block mt-0 md:mt-4 text-slate-800">First name :</label>
                                <input type="text" className=" border-b-2 border-solid border-slate-700    bg-transparent px-1 py-1 w-full my-2 outline-none"/>
                            </div>
                        
                            <div className="w-full lg:w-5/12">
                                <label htmlFor="family name" className="block mt-4 text-slate-800">Family name :</label>
                                <input type="text" className=" border-b-2 border-solid border-slate-700    bg-transparent px-1 py-1 w-full mt-2 outline-none"/>   
                            </div>       
                        </div>
                        <label htmlFor="email" className="block mt-6 text-slate-800">Email :</label>
                        <input type="text" className=" border-b-2 border-solid border-slate-700    bg-transparent px-1 py-1 w-full mt-2 outline-none"/> 
                        <label htmlFor="message" className="block mt-6 text-slate-800">Your message :</label>
                        <textarea rows={5} cols={3} className=" border-b-2 border-solid border-slate-700    bg-transparent px-1 py-1 w-full my-2 outline-none"></textarea>
                        <div className="flex justify-end mt-4">
                            <div className=" w-full md:w-fit ">
                                <Button 
                                    outline
                                    color = '#0f172a'
                                    text = "Submit"
                                    rounded
                                    block
                                    style='text-center'
                                />
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}
