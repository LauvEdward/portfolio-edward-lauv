import { PROJECTS } from "../constants/index.js";
import { motion } from "framer-motion"
export const Projects = () => {
    return (
        <div className="border-b border-neutral-900 p-4">
            <h1 className="text-center text-4xl my-10">Projects</h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="flex flex-wrap lg:justify-center p-5">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-1/4">
                            <img src={project.image} alt={project.title} width={150} height={150} className="rounded mb-6"></img>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-xl text-sm lg:w-3/4">
                            <h4 className="text-2xl">{project.title}</h4>
                            <span>{project.description}</span>
                            <div className="mt-4 flex flex-wrap">
                                {project.technologies.map((technology, index) => (
                                    <span key={index} className="mt-4 mr-2 px-2 py-1 rounded bg-neutral-700 text-purple-600">{technology}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}