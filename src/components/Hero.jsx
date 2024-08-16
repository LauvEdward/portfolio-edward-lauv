import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/kevinRushProfile.png'
import { motion } from "framer-motion"
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
})
export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-8xl font-thin tracking-tight">Edward Lauv</motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl text-transparent tracking-tight">Mobile Developer</motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 -tracking-tighter font-light max-w-xl py-6">
            {HERO_CONTENT}
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="flex justify-center">
            <img src={profilePic} alt="profilePic" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
