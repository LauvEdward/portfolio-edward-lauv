import { EXPERIENCES } from "../constants/index.js"
import { motion } from "framer-motion"
export const Experiences = () => {
    return (
        <div className="border-b border-neutral-900 p-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center text-4xl pb-10">Experiences</motion.h1>
            <div>
                {EXPERIENCES.map((EXPERIENCE, i) => (
                    <div key={i} className="border-neutral-500 flex flex-wrap lg:justify-center pt-5">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full pt-1 lg:w-1/4">
                            <h6 className="text-neutral-400">{EXPERIENCE.year}</h6>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h4 className="text-2xl">{EXPERIENCE.role} - {EXPERIENCE.company}</h4>
                            <p className="pt-5">{EXPERIENCE.description}</p>
                            <div className="flex flex-wrap">
                                {EXPERIENCE.technologies.map((technology, i) => (
                                    <span key={i} className="mr-2 mt-4 px-2 py-1 rounded bg-neutral-700 text-sm text-purple-600">{technology}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
