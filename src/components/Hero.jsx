import React from 'react'
import {motion} from "framer-motion"
import {styles} from "../styles"
import {ComputersCanvas} from "./canvas"
import Typewriter from "typewriter-effect"
const Hero = () => {
  return (
    <section className='relative w-full 
    h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute 
      inset-0 top-[120px] max-w-7xl max-auto 
      flex flex-row items-start gap-5`}>
        <div className='flex flex-col 
        justify-center items-center mt-5'>
          <div className='rounded-full w-5 
          h-5 bg-[#915eff]'/>
          <div className='w-1 h-40 violet-gradient sm:h-80'/>
        </div>
        <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
        Hi I'm <span className='text-[#951eff] hover:text-white'>
        <Typewriter onInit={(typewriter) => { typewriter.typeString("Nachiketh").start() }}/>
        </span>
        </h1>
         <p className={`${styles.heroSubText} 
         mt-2 text-white-100`}>
           I Develop Applications like
           <br className='sm:block hidden'/>Web, Backend Applications.
          </p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-10 bottom-32 
      flex w-full justify-center items-center'>
       <a href='#about'>
          <div className='w-[35px] h-[64px] 
          rounded-3xl border-4 border-secondary 
          flex justify-center items-start p2'>
            <motion.dev
            animate={{
              y:[0,26,0]
            }}
            transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:'loop'
            }}
            className='w-3 h-3 rounded-full 
            bg-secondary mb-1'
            />
          </div>
       </a>
      </div>
    </section>
  )
}

export default Hero