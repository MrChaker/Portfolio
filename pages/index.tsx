import type { NextPage } from 'next'
import Image from 'next/image'
import { motion } from 'framer-motion'
const Home: NextPage = () => {
  return (
    <>
      <Header />
    </>
  )
}
const Header = () =>{
  return(
    <>
      <div className=" flex gap-10 flex-col-reverse md:flex-row justify-between items-center">
        <div className="text-3xl lg:text-5xl text-slate-900 dark:text-slate-200 max-w-sm text-center md:text-left">
          <h1>Hello 👋, I&apos;m Chaker</h1>
          <p className='text-xl lg:text-3xl mt-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, corporis.</p>
        </div>
        <motion.div 
            initial={{ x: 400 }}
            animate={{ x: 0}}
            className="fancy min-w-[18rem] min-h-[18rem] w-72 h-72 lg:w-96 lg:h-96 lg:min-w-[24rem] lg:min-h-[24rem] bg-purple-500 overflow-hidden ">
          <Image src="/me.png" alt="me" width={350} height={350} className='drop-shadow-lg'/>
        </motion.div>
      </div>
    </>
  )
}
export default Home
