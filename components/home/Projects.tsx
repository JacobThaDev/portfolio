import React from "react";
import Container from "../global/Container";
import Link from "next/link";
import Image from "next/image";

type Project = {
    category:string,
    website:string,
    name:string,
    image:string,
    tags:string[]
}

const Projects = () => {

    const projects = [
        {
            category: "crypto",
            name: "Dione Protocol",
            website: "https://dioneprotocol.com",
            image: "/img/dione2.png",
            tags: ["Website", "UI/UX"]
        },
        {
            category: "crypto",
            name: "SafeMoon",
            website: "https://safemoon.com",
            image: "/img/safemoon.png",
            tags: ["Website", "UI/UX"]
        },
        {
            category: "crypto",
            name: "GlowToken",
            website: "https://glowtoken.net",
            image: "/img/glowtoken.png",
            tags: ["Website", "UI/UX"]
        }
    ];

    return(
        <>
            <p className="text-2xl font-bold mb-5">
                My Projects
            </p>

            <div className="grid group grid-cols-1 md:grid-cols-2 gap-3 mb-10">

                {projects.map((project:Project, index) => {
                    return(
                        <div key={index}>
                            <Link href={project.website} target="_blank" rel="nofollow" 
                                    className="inline-block bg-white w-full rounded-2xl shadow-md overflow-hidden p-5 relative group-hover:opacity-30 hover:!opacity-[1] lg:hover:translate-y-[-0.7em] transition-all duration-700">
                                
                                <Image src={project.image} 
                                    width={400}
                                    height={223}
                                    alt=""
                                    className="rounded-lg"/>

                                <div className="pt-5 pb-3">
                                    <div className="flex flex-col-reverse xl:flex-row xl:items-center gap-3 xl:justify-between">
                                        <div className="w-full">
                                            <p className="text-sm">{project.category}</p>
                                            <p className="text-lg font-bold">{project.name}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            {project.tags.map((tag, index) => {
                                                return(
                                                    <div key={"tag-"+index} className="bg-secondary text-xs font-semibold px-3 py-2 rounded-full inline-flex">
                                                        {tag}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Projects;