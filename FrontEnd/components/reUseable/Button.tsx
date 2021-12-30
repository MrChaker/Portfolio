import { motion, AnimatePresence } from "framer-motion"
import {useState, useRef, MutableRefObject} from 'react'
import useMouse from '@react-hook/mouse-position'
import { useInView } from "react-intersection-observer"
import Image from "next/image"
export const Button = (props: any) => {
    
    const [ animateImage, setAnimateImage ] = useState(false);
    var ref  = useRef(null);
    const pointerPos = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 10,
        fps: 60
      })
    
    const { ref: reff , inView } = useInView({
        rootMargin: '-100px',
    });
    
    return(
        <motion.div
            ref={reff}
        >
            <motion.div 
                id = 'btn'
                ref = {ref}
                initial = {{x: '-100vw'}}
                onMouseOver={()=>setAnimateImage(true)}
                onMouseLeave={()=>setAnimateImage(false)}
                onClick={ props.onClick }
                animate = {{ x: 0 }}
                className={` cursor-pointer p-4 px-8  ${ props.rounded ? 'rounded-full' : 'rounded-md'} justify-center border-solid border ${props.style} ${  props.block ? 'block' : 'inline-block' } `} 
                style={{ color: props.outline ? props.color : props.txtColor, backgroundColor: props.outline ? 'transparent' : props.color, fontSize: props.size || '1.25rem', borderColor: props.color }}
            >   
            {
                props.Image3D && 
                <AnimatePresence >
                    { animateImage &&
                        <motion.div
                            initial= {{ scale: 0 }}
                            animate = {{ scale: 1.2 }}
                            exit = {{ scale: 0 }}
                            className="absolute"
                            style={{ top: pointerPos.y != null ? pointerPos.y - 70 : "100%" , left: pointerPos.x != null ? pointerPos.x - 20 : "100%" }}
                        >
                            <Image src={props.Image3D} width={80} height={80}/>
                        </motion.div>
                    }  
                </AnimatePresence>
            }
                
                <p className={`inline-block mr-4`}>{ props.leftIcon }</p>
                {  props.text  }
                <p className={`inline-block ml-4`}>{ props.rightIcon }</p>
                
            </motion.div>
            
                
                <AnimatePresence >
                    { !inView &&
                    <motion.div 
                    
                    initial = {{scale: 0}}
                    onMouseOver={()=>setAnimateImage(true)}
                    onMouseLeave={()=>setAnimateImage(false)}
                    onClick={ props.onClick }
                    animate = {{ scale: 1 }}
                    exit={{ scale: 0 }}
                    /* transition={{ duration: 0.6, stifness: 90 }} */
                    className={` left-[85%] top-[85%] cursor-pointer pt-4 text-center rounded-full border-solid border ${props.style} fixed w-16 h-16 text-xl`} 
                    style={{ color: props.outline ? props.color : props.txtColor, backgroundColor: props.outline ? 'transparent' : props.color, fontSize: props.size || '1.25rem', borderColor: props.color }}
                >   
                {
                    props.Image3D && 
                    <AnimatePresence >
                        { animateImage &&
                            <motion.div
                                initial= {{ scale: 0 }}
                                animate = {{ scale: 1.2 }}
                                exit = {{ scale: 0 }}
                                className="absolute"
                                style={{ top: pointerPos.y != null ? pointerPos.y - 70 : "100%" , left: pointerPos.x != null ? pointerPos.x - 20 : "100%" }}
                            >
                                <Image src={props.Image3D} width={80} height={80}/>
                            </motion.div>
                        }  
                    </AnimatePresence>
                }
                    <p className={`inline-block `}>{ props.leftIcon }</p>
                </motion.div>
                }
            </AnimatePresence>   
            
        </motion.div>

    )    
}
