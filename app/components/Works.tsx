import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateWhenVisible from "../../app/components/misc/AnimateWhenVisible";

type Project = {
    category:string,
    website:string,
    name:string,
    image:string,
    tags:string[]
}

const Works = () => {

    const projects = [
        {
            category: "crypto",
            name: "Dione Protocol",
            website: "/project/dione",
            image: "/img/dione2.png",
            tags: ["Website", "UI/UX"]
        },
        {
            category: "crypto",
            name: "SafeMoon",
            website: "/project/safemoon",
            image: "/img/safemoon.png",
            tags: ["Website", "UI/UX"]
        },
        {
            category: "crypto",
            name: "GlowToken",
            website: "/project/glowtoken",
            image: "/img/glowtoken.png",
            tags: ["Website", "UI/UX"]
        }
    ];

    return(
        <>
            <p className="text-2xl font-bold mb-5">
                My Works
            </p>

            <div className="grid group grid-cols-1 md:grid-cols-2 gap-3 mb-10">

                {projects.map((project:Project, index) => {
                    return(
                        <AnimateWhenVisible key={index}>
                            <Link href={project.website} className="inline-block bg-white w-full rounded-2xl shadow-md overflow-hidden p-5 relative group-hover:opacity-30 hover:!opacity-[1] lg:hover:translate-y-[-0.7em] transition-all duration-[400ms]">
                                
                                <Image src={project.image} 
                                    unoptimized
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
                        </AnimateWhenVisible>
                    )
                })}
            </div>
        </>
    )
}

export default Works;