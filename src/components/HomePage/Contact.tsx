import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useBlurContext } from '../App'
import { Button } from '../general/Button'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { MutableRefObject } from 'react'
import Earth from '../Assets/Saly-44.png'
export const Contact = () => {
  const { isBlured, setIsBlured } = useBlurContext()
  const firstName: MutableRefObject<HTMLInputElement | null> = useRef(null)
  const familyName: MutableRefObject<HTMLInputElement | null> = useRef(null)
  const email: MutableRefObject<HTMLInputElement | null> = useRef(null)
  const message: MutableRefObject<HTMLTextAreaElement | null> = useRef(null)

  const Submit = async (e: Event): Promise<void> => {}
  return (
    <>
      <div
        className={`fixed top-1/2 left-1/2 z-40 h-[600px] w-[99%] translate-x-[-50%]  translate-y-[-50%] rounded-lg bg-slate-200 py-8 px-11 text-base text-slate-700 shadow-light sm:w-[800px] sm:py-4 sm:text-xl lg:w-[1000px] ${
          !isBlured ? 'hidden' : ''
        }  overflow-scroll md:overflow-auto`}
      >
        <div className=" text-right ">
          <FontAwesomeIcon
            icon="times"
            className=" mb-6 transition-all hover:scale-150"
            onClick={() => setIsBlured(false)}
          />
        </div>
        <div className="flex justify-between gap-20">
          <div className=" hidden flex-col items-start sm:flex ">
            <h1 className=" my-4 text-3xl font-semibold text-slate-700 lg:text-5xl">
              {' '}
              Contact me ✉️
            </h1>
            <p className=" max-w-xs text-lg lg:text-xl">
              No matter where you are don't hesitate to say "Hello"
            </p>
            <motion.div whileHover={{ scale: 1.2 }} className=" m-auto ">
              <img src={Earth} width={300} height={300} />
            </motion.div>
          </div>
          <form
            action="https://formspree.io/f/xlezpnka"
            method="POST"
            encType="multipart/form-data"
            className=" w-full sm:w-1/2 "
          >
            <div className="flex w-full flex-col justify-between lg:flex-row">
              <div className="w-full lg:w-5/12">
                <label
                  htmlFor="first name"
                  className="mt-0 block text-slate-800 md:mt-4"
                >
                  First name :
                </label>
                <input
                  ref={firstName}
                  name="fistName"
                  type="text"
                  className=" my-2 w-full border-b-2    border-solid border-slate-700 bg-transparent px-1 py-1 outline-none"
                />
              </div>

              <div className="w-full lg:w-5/12">
                <label
                  htmlFor="family name"
                  className="mt-4 block text-slate-800"
                >
                  Family name :
                </label>
                <input
                  ref={familyName}
                  name="familyName"
                  type="text"
                  className=" mt-2 w-full border-b-2    border-solid border-slate-700 bg-transparent px-1 py-1 outline-none"
                />
              </div>
            </div>
            <label htmlFor="email" className="mt-6 block text-slate-800">
              Email :
            </label>
            <input
              ref={email}
              type="text"
              name="email"
              className=" mt-2 w-full border-b-2    border-solid border-slate-700 bg-transparent px-1 py-1 outline-none"
            />
            <label htmlFor="message" className="mt-6 block text-slate-800">
              Your message :
            </label>
            <textarea
              ref={message}
              name="message"
              rows={5}
              cols={3}
              className=" my-2 w-full border-b-2    border-solid border-slate-700 bg-transparent px-1 py-1 outline-none"
            ></textarea>
            <div className="mt-4 flex justify-end">
              <div className=" w-full md:w-fit ">
                <Button
                  outline
                  color="#0f172a"
                  text="Submit"
                  rounded
                  block
                  style="text-center"
                  type="submit"
                  /* onClick={(e: Event) => Submit(e)} */
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
