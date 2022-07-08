import { motion } from 'framer-motion'
import { useMenuContext, useThemeContext } from '../Layouts/Layout'
import { ButtonC } from '../general/ButtonC'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useBlurContext } from '../App'
import { Canvas } from '@react-three/fiber'
import { RefAttributes, Suspense, useEffect, useRef } from 'react'
import WelcomeImage from '../Assets/Saly-13.png'
import MessageImg from '../Assets/Message.png'
import Balls from 'components/threeD/TechBall'

export const Header = () => {
  const { menu } = useMenuContext()
  const { darkTheme } = useThemeContext()
  const { isBlured, setIsBlured } = useBlurContext()

  //for a stupind bug
  const reverse: 'reverse' = 'reverse'

  const ImageAnimation = {
    init: {
      scale: 0,
      transition: { delay: 1.2 }
    },
    normal: {
      scale: 1.4,
      y: +25
    },
    bounce: {
      y: -25,
      transition: {
        stifness: 0,
        repeat: Infinity,
        repeatType: reverse,
        duration: 0.7
      }
    },
    scaleMore: {
      scale: 1.4,
      transition: { stifness: 0 }
    }
  }

  return (
    <>
      <div
        className={` flex flex-col-reverse items-center   justify-between gap-10 md:flex-row ${
          isBlured ? ' blur-sm ' : ''
        }`}
      >
        <div className="max-w-md text-center text-3xl sm:text-5xl text-slate-900 dark:text-slate-200 md:text-left lg:text-6xl min-w-[320px] lg:min-w-[420px]">
          <h1 className=" font-extrabold drop-shadow-dark dark:drop-shadow-light">
            Hello 👋, I&apos;m Chaker
          </h1>
          {/* <Canvas>
            <Suspense fallback={null}>
              <Text3D text="I Chaker" size={100} height={50} />
            </Suspense>
          </Canvas> */}
          <p className="my-7 text-xl lg:text-3xl">
            <span className="font-extrabold drop-shadow-dark dark:drop-shadow-light text-2xl lg:text-4xl">
              Web developer
            </span>{' '}
            , trying to find meaning in life after achieving 0.1% of life goals{' '}
          </p>
          <ButtonC
            color={darkTheme ? '#e2e8f0' : `#0f172a`}
            txtColor={darkTheme ? `#0f172a` : '#e2e8f0'}
            text="Contact me"
            size="1.5rem"
            leftIcon={<FontAwesomeIcon icon="envelope" />}
            rounded
            Image3D={MessageImg}
            onClick={() => setIsBlured(true)}
          />
        </div>

        <motion.div
          variants={ImageAnimation}
          initial="init"
          animate="normal"
          whileInView="bounce"
          /* whileHover="scaleMore" */
          transition={{ type: 'spring', stiffness: 200 }}
          className={`relative ${menu ? 'hidden' : ''}`}
        >
          <div className="relative min-h-[350px] min-w-[320px] lg:min-h-[470px] lg:min-w-[400px]">
            <div className="absolute w-full h-full -z-10 ">
              <Canvas>
                <Suspense
                  fallback={
                    <div className="rounded-full h-16 w-16 bg-orange-700 "></div>
                  }
                >
                  {/* <Balls /> */}
                </Suspense>
              </Canvas>
            </div>
            <img src={WelcomeImage} alt="me" width={450} height={470} />
          </div>
        </motion.div>
      </div>
    </>
  )
}
