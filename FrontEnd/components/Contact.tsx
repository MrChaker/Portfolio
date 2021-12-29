import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useBlurContext } from "../../pages"
import { Button } from "./reUseable/Button";

export const Contact = () => {
    const { isBlured, setIsBlured } = useBlurContext();
    return(
        <>
            <div className={`fixed top-1/2 left-1/2 z-40 translate-x-[-50%] translate-y-[-50%] h-[600px] sm:w-1/2 w-3/4 bg-indigo-700 rounded-lg backdrop-blur-sm p-4 px-11 text-slate-200 text-xl ${ !isBlured ? 'hidden' : '' } overflow-scroll md:overflow-auto`}>
                <div className=" text-right ">
                    <FontAwesomeIcon 
                        icon="times"  
                        className=" hover:scale-150 transition-all mb-6"
                        onClick={()=>setIsBlured(false)}
                    />
                </div>
                <form className=" ">
                    <div className="flex flex-col md:flex-row w-full justify-between">
                        <div className="w-full md:w-5/12">
                            <label htmlFor="first name" className="block mt-0 md:mt-4 text-slate-800">First name :</label>
                            <input type="text" className=" border-b-2 border-solid border-slate-200    bg-transparent px-1 py-1 w-full my-2 outline-none"/>
                        </div>
                       
                        <div className="w-full md:w-5/12">
                            <label htmlFor="family name" className="block mt-4 text-slate-800">Family name :</label>
                            <input type="text" className=" border-b-2 border-solid border-slate-200    bg-transparent px-1 py-1 w-full mt-2 outline-none"/>   
                        </div>       
                    </div>
                    <label htmlFor="email" className="block mt-6 text-slate-800">Email :</label>
                    <input type="text" className=" border-b-2 border-solid border-slate-200    bg-transparent px-1 py-1 w-full mt-2 outline-none"/> 
                    <label htmlFor="message" className="block mt-6 text-slate-800">Your message :</label>
                    <textarea rows={5} cols={3} className=" border-b-2 border-solid border-slate-200    bg-transparent px-1 py-1 w-full my-2 outline-none"></textarea>
                    <div className="flex justify-end mt-4">
                        <div className=" w-full md:w-fit ">
                            <Button 
                                outline
                                color = '#e2e8f0'
                                text = "Submit"
                                rounded
                                block
                                style='text-center'
                            />
                        </div>
                    </div>
                    
                </form>
            </div>
        </>
    )
}