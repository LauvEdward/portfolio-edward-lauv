import {ABOUT_TEXT} from '../constants'
import profilePic from '../assets/about.jpg'

export const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <h1 className="my-20 text-4xl text-center text-neutral-300">About <span
                className="text-neutral-500">Me</span></h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={profilePic}/>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-items-start">
                        <p className="tracking-tighter font-light max-w-xl"> {ABOUT_TEXT} </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
