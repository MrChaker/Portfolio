import { motion } from "framer-motion"

export const Button = (props: any) => {
        
    return(
            <motion.div 
                id = 'btn'
                initial = {{x: '-100vw'}}
                onClick={ props.onClick }
                animate = {{ x: 0 }}
                className={` cursor-pointer p-4 px-8  ${ props.rounded ? 'rounded-full' : 'rounded-md'} justify-center border-solid border ${props.style} ${  props.block ? 'block' : 'inline-block' } `} 
                style={{ color: props.outline ? props.color : props.txtColor, backgroundColor: props.outline ? 'transparent' : props.color, fontSize: props.size || '1.25rem', borderColor: props.color }}
            >   
                <p className={`inline-block mr-4`}>{ props.leftIcon }</p>
                {  props.text  }
                <p className={`inline-block ml-4`}>{ props.rightIcon }</p>
                
            
        </motion.div>

    )    
}
