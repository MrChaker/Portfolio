import type { NextPage } from 'next'

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
          <h1>Hello 👋, I'm Chaker</h1>
          <p className='text-xl lg:text-3xl mt-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, corporis.</p>
        </div>
        <div className="fancy min-w-[18rem] min-h-[18rem] w-72 h-72 lg:w-96 lg:h-96 lg:min-w-[24rem] lg:min-h-[24rem] bg-purple-500">
          <img src="me.png" alt="me" className='drop-shadow-lg'/>
        </div>
      </div>
    </>
  )
}
export default Home
