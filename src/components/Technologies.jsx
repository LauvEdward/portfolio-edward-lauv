import { SiFlutter } from "react-icons/si"
import { GrSwift } from "react-icons/gr"
import { FaGitAlt } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";

export const Technologies = () => {
    return (
        <div>
            <div className="border-b border-neutral-900 pb-20 lg:mb-35">
                <h1 className="text-4xl text-center mt-20 mb-10">Technologies</h1>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div>
                        <div className="rounded-2xl border-2 border-neutral-500 p-4">
                            <GrSwift className="text-orange-500 text-7xl"></GrSwift>
                        </div>
                        <p className="text-center">Swift</p>
                    </div>
                    <div>
                        <div className="rounded-2xl border-2 border-neutral-500 p-4">
                            <SiFlutter className="text-blue-500 text-7xl"></SiFlutter>
                        </div>
                        <p className="text-center">Flutter</p>
                    </div>
                    <div>
                        <div className="rounded-2xl border-2 border-neutral-500 p-4">
                            <FaGitAlt className="text-orange-500 text-7xl"></FaGitAlt>
                        </div>
                        <p className="text-center">Git</p>
                    </div>
                    <div>
                        <div className="rounded-2xl border-2 border-neutral-500 p-4">
                            <FaAppStore className="text-blue-500 text-7xl"></FaAppStore>
                        </div>
                        <p className="text-center">AppStore</p>
                    </div>
                </div>
            </div>
        </div>
    );
}