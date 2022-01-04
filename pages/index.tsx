import type { NextPage } from 'next'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useMenuContext, useThemeContext } from '../FrontEnd/components/layout'
import { Button } from '../FrontEnd/components/reUseable/Button'
import { ButtonC } from '../FrontEnd/components/reUseable/ButtonC'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Contact } from '../FrontEnd/components/Contact'
import { createContext, useContext, useState } from 'react';
import { GridPopUp } from '../FrontEnd/components/reUseable/GridPopUp'
import { Techs } from '../FrontEnd/components/Tech'
export type IsBlured = {
  isBlured: boolean,
  setIsBlured:(b: boolean) => void
}
export const BlurContext = createContext<IsBlured>({
  isBlured: false,
  setIsBlured: () => false
});
export const useBlurContext = () => useContext(BlurContext);
const Home: NextPage = () => {
  const [ isBlured, setIsBlured ] = useState(false);
  return (
    <BlurContext.Provider value={{ isBlured, setIsBlured }}>
      <Header />
      <Contact />
      <GridPopUp />
      <Techs />
    </BlurContext.Provider >
  )
}
const Header = () =>{
  const { menu }= useMenuContext();
  const { darkTheme } = useThemeContext();
  const { isBlured, setIsBlured } = useBlurContext();
  const ImageAnimation = {
    init: {
      scale: 0,
      transition: { delay: 1.2 }
    },
    normal: {
      scale: 1.2,
    },
    scaleMore: {
      scale: 1.4,
      transition: { stifness: 0 }
    }
  }
  return(
    <>
      <div className={` flex gap-10 flex-col-reverse   md:flex-row justify-between items-center ${isBlured ? " blur-sm ": ""}`}>
        <div className="text-3xl lg:text-5xl text-slate-900 dark:text-slate-200 max-w-sm text-center md:text-left">
          <h1>Hello 👋, I&apos;m Chaker</h1>
          <p className='text-xl lg:text-3xl my-7'>Web developer , trying to find meaning in life after achieving 0.1% of life goals </p>
          <ButtonC 
            color = { darkTheme ? '#e2e8f0' : `#0f172a` }
            txtColor = { darkTheme ? `#0f172a` : '#e2e8f0' }
            text = "Contact me"
            size = "1.5rem"
            leftIcon = { <FontAwesomeIcon icon="envelope" />}
            rounded
            Image3D = "/Message.png"
            onClick = {()=>setIsBlured(true)}
          />
        </div>
        <motion.div 
            variants={ImageAnimation}
            initial= "init"
            animate = "normal"
            whileHover= "scaleMore"
            transition={{ type: "spring", stiffness: 200 }}
            
            className={`relative ${ menu ? "hidden" : ""}`}/* "fancy min-w-[18rem] min-h-[18rem] w-72 h-72 lg:w-96 lg:h-96 lg:min-w-[24rem] lg:min-h-[24rem]  relative " */>
              <div className="lg:min-w-[400px] lg:min-h-[470px] min-w-[320px] min-h-[350px] ">
                <Image src="/Saly-13.png" alt="me" width={450} height={470} />
              </div>
          
          {/* <div className="absolute top-0 right-0">
            <Image src="/Succes.png" alt="icon" width={150} height={170} />
          </div>
          <div className="absolute bottom-0 right-10 w-36 h-40 max-h-80 max-w-xs">
            <Image src="/Tick.png" alt="tick" layout="fill" />
          </div> */}

        </motion.div>
      </div>
    </>
  )
}


export default Home
