import { SiFlutter } from "react-icons/si"
import { GrSwift } from "react-icons/gr"
import { FaGitAlt } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { animate, motion } from "framer-motion"
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

export const Technologies = () => {
    return (
        <div>
            <div className="border-b border-neutral-900 pb-20 lg:mb-35">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl text-center mt-20 mb-10">Technologies</motion.h1>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate">
                        <div className="rounded-2xl border-2 border-neutral-500 p-4">
                            <GrSwift className="text-orange-500 text-7xl"></GrSwift>
                        </div>
                        <p className="text-center">Swift</p>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate">
                        <div className="rounded-2xl border-2 border-neutral-500 p-4">
                            <SiFlutter className="text-blue-500 text-7xl"></SiFlutter>
                        </div>
                        <p className="text-center">Flutter</p>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate">
                        <div className="rounded-2xl border-2 border-neutral-500 p-4">
                            <FaGitAlt className="text-orange-500 text-7xl"></FaGitAlt>
                        </div>
                        <p className="text-center">Git</p>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate">
                        <div className="rounded-2xl border-2 border-neutral-500 p-4">
                            <FaAppStore className="text-blue-500 text-7xl"></FaAppStore>
                        </div>
                        <p className="text-center">AppStore</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}