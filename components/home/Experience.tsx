import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import React from "react";

const Experience = () => {

    const places = [
        {
            name: "Dione Protocol",
            icon: null,
            duration: "2023-current",
            position: "Head of Website Development"
        },
        {
            name: "SafeMoon",
            icon: null,
            duration: "2021",
            position: "Head of Website Development"
        },
        {
            name: "GlowToken",
            icon: null,
            duration: "2022",
            position: "Head of Website Development"
        },
        {
            name: "Fyb3r",
            icon: null,
            duration: "2022",
            position: "Quality Assurance"
        }
    ];

    return(
        <>
            <p className="text-2xl font-bold mb-5">
                Experience
            </p>

            <div className="grid grid-cols-1 gap-5 mb-10">
                {places.map((place, index) => {
                    return(
                        <div className="bg-white p-5 w-full inline-block rounded-2xl shadow-md" key={"exp-"+index}>
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
                    )
                })}
            </div>
        </>
    )
}

export default Experience;