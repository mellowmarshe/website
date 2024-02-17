"use client";

import { useState } from "react";
import Image from "next/image";

interface Skill {
    name: string;
    icon: string;
    description: string;
}

const SKILLS: Skill[] = [
    {
        name: "Kubernetes (K8S)",
        icon: "kubernetes.svg",
        description:
            "Running a multi-node K3S cluster, with MetalLB for load balancing. This website is being served via K3S!",
    },
    {
        name: "Python",
        icon: "python.svg",
        description:
            "I have used Python3 to write various forms of bots and scripts that make my command line experience a little better.",
    },
    {
        name: "Linux",
        icon: "linux.svg",
        description:
            "I've been using Linux desktop and server for the past 5 years. This includes Arch and Ubuntu (server). I'm extremely comfortable in the shell and various editors such as VIM.",
    },
];

export default function Home() {
    const [isMoreInfoOpen, setMoreMenu] = useState(false);
    const toggleMenu = () => setMoreMenu(!isMoreInfoOpen);

    const [currentlyActive, setCurrentlyActive] = useState<Skill>(SKILLS[0]);

    return (
        <main className={`h-screen w-full flex justify-center items-center`}>
            <div
                className={`main rounded-lg p-4 shadow-lg text-md sm:text-lg sm:p-12 m-1 font-mono`}
            >
                {!isMoreInfoOpen && (
                    <pre>
                        <p>
                            <strong>~</strong> fetch
                        </p>
                        {/* prettier-ignore */}
                        <p>
<br/><span className={`hidden sm:inline`}>            </span><strong className={`accent`}>dominic@linux</strong>
<br/><span className={`hidden sm:inline`}><strong>\    /\</strong>     </span>
{/*eslint-disable-next-line react/no-unescaped-entities*/}
<br/><span className={`hidden sm:inline`}><strong> )  ( ')</strong>    </span><strong>social</strong>    <a href="https://github.com/mellowmarshe">git</a>, <a href="mailto:dominic@domm.me">mail</a>, <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">mellowmarshe#0001</a>
<br/><span className={`hidden sm:inline`}><strong>(  /  )</strong>     </span><strong>hobbies</strong>   k8s, self-hosting, coding
<br/><span className={`hidden sm:inline`}><strong> \(__)|</strong>     </span><strong>more</strong>      <a onClick={toggleMenu}>here</a>
                    </p>
                    </pre>
                )}
                {isMoreInfoOpen && (
                    <div>
                        <h1 className={`text-2xl`}>
                            <strong className={`accent`}>dominic@linux</strong>
                        </h1>
                        <div>
                            <h2 className={`text-xl py-4`}>
                                <strong>Skills</strong>
                            </h2>
                            <div className={`flex gap-3`}>
                                {SKILLS.map((skill, idx) => (
                                    <Image
                                        src={skill.icon}
                                        width={32}
                                        height={32}
                                        alt={`${skill.name} icon`}
                                        key={idx}
                                        className={`cursor-pointer ${
                                            currentlyActive.name ==
                                                skill.name && "animate-pulse"
                                        }`}
                                        onClick={() =>
                                            setCurrentlyActive(skill)
                                        }
                                    />
                                ))}
                            </div>
                            <div>
                                <h3 className={`text-lg pt-2`}>
                                    <strong>{currentlyActive.name}</strong>
                                </h3>
                                <p className={`text-sm`}>
                                    {currentlyActive.description}
                                </p>
                            </div>
                        </div>
                        <br />
                        <a onClick={toggleMenu}>go back</a>
                    </div>
                )}
            </div>
        </main>
    );
}
