import { motion, AnimatePresence } from "framer-motion"
import {useState, useRef} from 'react'
import useMouse from '@react-hook/mouse-position'
import Image from "next/image"
export const Button = (props: any) => {
    const [ animateImage, setAnimateImage ] = useState(false);
    const ref = useRef(null);
    const pointerPos = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 10,
        fps: 60
      })
    
      
    return(
        <motion.div 
            ref = {ref}
            initial = {{x: '-100vw'}}
            onMouseOver={()=>setAnimateImage(true)}
            onMouseLeave={()=>setAnimateImage(false)}
            onClick={ props.onClick }
            animate = {{x: 0}}
            className={`flex gap-4 cursor-pointer p-4 px-8 border-[${ props.color }] ${ props.rounded ? 'rounded-full' : 'rounded-sm'} justify-center border-solid border ${props.style}`} 
            style={{ color: props.outline ? props.color : props.txtColor, backgroundColor: props.outline ? 'transparent' : props.color, fontSize: props.size || '1.25rem', display: props.block ? 'block' : 'inline-block' }}
        
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
            
            <p className='inline-block mr-2'>{ props.leftIcon }</p>
            { props.text }
            <p className='inline-block ml-2'>{ props.rightIcon }</p>
            
        </motion.div>
    )    
}
