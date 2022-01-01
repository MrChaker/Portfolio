import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { useState } from 'react';
import { useBlurContext } from '../../../pages';
export const GridPopUp = () =>{
 
    const [ isSelected, setIsSelected ] = useState(0);
    const animateSelection = {
      selected : {
        scaleX: 1.6,
        scaleY: 1.6,
        x: "-10vw",
        y: "10vh",
        transition : { stiffness: 10 }
      },
      selected2 : {
        scaleX: 1.4,
        scaleY: 1.6,
        x: "-10vw",
        y: "10vh",
        transition : { stiffness: 10 }
      },
      selected3 : {
        scaleX: 1.1,
        scaleY: 1.4,
        x: "-3vw",
        y: "15vh",
        transition : { stiffness: 10 }
      },
      notSelected : {
        scale: 1,
        x: 0,
        y: 0,
        transition : { stiffness: 10 }
      }
      
    }
    const { isBlured } = useBlurContext();
    
    return (
      <>
        <div className={`min-h-screen my-10 py-4 ${ isBlured  ? 'blur-sm' : ''}`}>
          <h1 className='text-center text-5xl text-slate-900 dark:text-slate-200'> My Skills </h1>
          <div className="grid gap-2 grid-cols-5 sm:grid-cols-4 mt-8">
            <motion.div
              variants={animateSelection}
              animate= { isSelected == 1 ? "selected" : "notSelected" }
              onClick = {()=> { setIsSelected(1)  } }
              className={`p-4  col-start-1 col-end-3 sm:col-end-2 text-slate-200  bg-gradient-to-br hover:bg-gradient-to-r from-fuchsia-800 to-fuchsia-300 shadow-light dark:shadow-dark min-h-[150px] rounded-md cursor-pointer origin-x2 ${ isSelected == 1 ? "z-10 cursor-default min-w-[175px] origin-x2-1 sm:origin-x2" : "" } relative`}>
              <FontAwesomeIcon 
                icon='times' 
                className={` absolute top-3 right-3 cursor-pointer ${ isSelected != 1 ? 'hidden' : ''}`}
                onClick={(e)=>{  e.stopPropagation(); setIsSelected(0) }}
              />
              <h2 className={` text-xl md:text-3xl text-center mb-4 ${ isSelected != 1 ? 'mt-6' : '' } `}>UI/UX Design</h2>
              { 
                isSelected == 1 &&
                <p> I've collected some expexrience in UI/UX design but I wouldn't consider myself as valuable UI designer , that's why this box is small ... </p> 
              }
            </motion.div>
            <motion.div
              variants={animateSelection}
              animate= { isSelected == 2 ? "selected2" : "notSelected" }
              onClick = {()=> { setIsSelected(2) } }
              className={`p-4 col-start-3 sm:col-start-2 col-end-6 sm:col-end-5 text-slate-200 bg-gradient-to-br hover:bg-gradient-to-r from-red-600 to-red-300  bg-slate-200 shadow-light dark:shadow-dark  min-h-[150px] rounded-md cursor-pointer ${ isSelected == 2 ? "z-10 cursor-default min-w-[175px] origin-x2-2 sm:origin-center" : "" } relative `}
            >
              <h2 className={` text-xl md:text-3xl text-center mb-4 ${ isSelected != 2 ? 'mt-6' : '' } `}>Back-end web developement</h2>
              {
                  isSelected == 2 &&
              
                <p className='px-2'> Database, APIs, HTTP Requests, GraphQL ... <br/> I'm familliar with all this consepts , Basically I've wrote my own backend for every project I've made </p>
              }  
              <FontAwesomeIcon 
                icon='times' 
                className={` absolute top-3 right-3 cursor-pointer ${ isSelected != 2 ? 'hidden' : ''}`}
                onClick={(e)=>{  e.stopPropagation(); setIsSelected(0) }}
              />
            </motion.div>
            <motion.div
              variants={animateSelection}
              animate= { isSelected == 3 ? "selected3" : "notSelected" }
              onClick = {()=> { setIsSelected(3) } }
              className={`p-4 col-start-1 col-end-6 sm:col-end-5 text-slate-200 bg-gradient-to-br hover:bg-gradient-to-r from-blue-800 to-blue-300  shadow-light dark:shadow-dark  min-h-[150px] rounded-md cursor-pointer origin-x3 ${ isSelected == 3 ? "z-10 cursor-default" : "" } relative `}
            >
              <h2 className={` text-xl md:text-3xl text-center mb-4 ${ isSelected != 3 ? 'mt-6' : '' } `}>Front-end web developement</h2>
              {
                  isSelected == 3 &&
              
                <p className='px-8'> Not much to say here, You rate this skill according to my projects <br/> "Show the talk rather than talk the talk" </p>
              }  
              <FontAwesomeIcon 
                icon='times' 
                className={` absolute top-3 right-3 cursor-pointer ${ isSelected != 3 ? 'hidden' : ''}`}
                onClick={(e)=>{  e.stopPropagation(); setIsSelected(0) }}
              />
            </motion.div>
  
          </div>
        </div>
      </>
    )
  }