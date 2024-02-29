import { ComputerDesktopIcon, DocumentIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import AnimateWhenVisible from "../misc/AnimateWhenVisible";

const Experience = () => {

    const places = [
        {
            name: "Dione Protocol",
            icon: null,
            duration: "Deployed",
            position: "Head of Website Development",
            link: "https://dioneprotocol.com"
        },
        {
            name: "GlowToken",
            icon: null,
            duration: "2022",
            position: "Head of Website Development",
            link: "https://glowtoken.net"
        },
        {
            name: "Fyb3r LLC",
            icon: null,
            duration: "2022",
            position: "Head of Quality Assurance",
            link: "https://fyb3r.com"
        },
        {
            name: "SafeMoon",
            icon: null,
            duration: "2021",
            position: "Head of Website Development",
            link: "https://safemoon.com"
        },
    ];

    return(
        <>
            <p className="text-2xl font-bold mb-5">
                Experience
            </p>
            
            <div className="grid grid-cols-1 gap-5 mb-10">
                {places.map((place, index) => {
                    return(
                        <AnimateWhenVisible key={"exp-"+index}>
                            <div className="bg-white p-5 w-full inline-block rounded-2xl shadow-md">
                                <div className="flex gap-4 items-center">
                                    <div>
                                        <div className="bg-secondary p-3 rounded-2xl">
                                            <DocumentTextIcon width={30} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold">
                                            {place.name}
                                        </p>
                                        <p>{place.position}</p>
                                    </div>
                                    <div className="ml-auto">
                                        <div className={"bg-"+(index == 0 ? "success text-white" : "secondary")+" text-xs font-semibold px-3 py-2 rounded-full inline-flex"}>
                                            {place.duration}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateWhenVisible>
                    )
                })}
            </div>
        </>
    )
}

export default Experience;