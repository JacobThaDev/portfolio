import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Experience = () => {

    const places = [
        {
            name: "Dione Protocol",
            icon: null,
            duration: "2023-current",
            position: "Head of Website Development",
            link: "/project/dione"
        },
        {
            name: "GlowToken",
            icon: null,
            duration: "2022",
            position: "Head of Website Development",
            link: "/project/glowtoken"
        },
        {
            name: "SafeMoon",
            icon: null,
            duration: "2021",
            position: "Head of Website Development",
            link: "/project/safemoon"
        },
    ];

    return(
        <>
            <p className="text-2xl font-bold mb-1">
                Experience
            </p>
            <p className="mb-5">Click more information on how I got to each place and what I did and accomplished.</p>

            <div className="grid grid-cols-1 gap-5 mb-10 group">
                {places.map((place, index) => {
                    return(
                        <Link href={place.link} key={index}>
                            <div className="bg-white p-5 w-full inline-block rounded-2xl shadow-md transition-all group-hover:opacity-50 hover:!opacity-100 md:hover:translate-x-2 duration-[400ms]" key={"exp-"+index}>
                                <div className="flex gap-4 items-center">
                                    <div>
                                        <div className="bg-secondary p-3 rounded-2xl">
                                            <ComputerDesktopIcon width={30} />
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
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default Experience;