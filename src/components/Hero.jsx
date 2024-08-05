import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/kevinRushProfile.png'
export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2">
      <h1 className="pb-16 text-8xl font-thin tracking-tight">Edward Lauv</h1>
      <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl text-transparent tracking-tight">
        Mobile Developer
      </span>
      <p className="my-2 -tracking-tighter font-light max-w-xl py-6">
        {HERO_CONTENT}
      </p>
      </div>
      <div className="w-full lg:w-1/2">
      <div className="flex justify-center">
      <img src= {profilePic} alt="profilePic" />
      </div>
      </div>
      </div>
    </div>
  )
}
