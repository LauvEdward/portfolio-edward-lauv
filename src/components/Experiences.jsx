import {EXPERIENCES} from "../constants/index.js"

export const Experiences = () => {
    return (
        <div className="border-b border-neutral-500 p-4">
            <h1 className="text-center text-4xl pb-10">Experiences</h1>
            <div>
                {EXPERIENCES.map((EXPERIENCE, i) => (
                    <div key={i} className="border-neutral-500 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <p className="text-neutral-400 text-sm">{EXPERIENCE.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h4 className="text-2xl">{EXPERIENCE.role} - {EXPERIENCE.company}</h4>
                            <p className="pt-5">{EXPERIENCE.description}</p>
                            <div className="flex flex-wrap">
                                {EXPERIENCE.technologies.map((technology, i) => (
                                    <span key={i} className="mr-2 mt-4 px-2 py-1 rounded bg-neutral-700 text-sm text-purple-600">{technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
