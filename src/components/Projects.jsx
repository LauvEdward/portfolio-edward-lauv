import {PROJECTS} from "../constants/index.js";
export const Projects = () => {
    return (
        <div className="border-b border-neutral-900 p-4">
            <h1 className="text-center text-4xl pb-10">Projects</h1>
            <div className="pt-20">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="flex flex-wrap lg:justify-center p-5">
                        <div className="w-full lg:w-1/4">
                            <img src={project.image} alt={project.title} width={150} height={150} className="rounded mb-6"></img>
                        </div>
                        <div className="w-full max-w-xl text-sm lg:w-3/4">
                            <h4 className="text-2xl">{project.title}</h4>
                            <span>{project.description}</span>
                            <div className="mt-4">
                                {project.technologies.map((technology, index) => (
                                    <span key={index} className="mt-4 mr-2 px-2 py-1 rounded bg-neutral-700 text-purple-600">{technology}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}