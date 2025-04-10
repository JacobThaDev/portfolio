import React from "react";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import AnimateWhenVisible from "../../app/components/misc/AnimateWhenVisible";

const Services = () => {
    return(
        <>
            <p className="text-2xl font-bold mb-5">
                Services
            </p>
            
            <div className="grid grid-cols-1 gap-5 mb-10">

                <AnimateWhenVisible>
                    <div className="bg-white p-5 w-full inline-block rounded-2xl shadow-md">
                        <div className="flex gap-4 items-center">
                            <div>
                                <div className="bg-secondary p-3 rounded-2xl">
                                    <ComputerDesktopIcon width={30} />
                                </div>
                            </div>
                            <div>
                                <p className="text-lg font-bold">
                                    Design & Development
                                </p>
                                <p>Hire me as your website designer and developer!</p>
                            </div>
                            <div className="ml-auto">
                                <div className="bg-success text-white text-xs font-semibold px-3 py-2 rounded-full inline-flex">
                                    Available
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimateWhenVisible>
                
                <AnimateWhenVisible>
                <div className="bg-white p-5 w-full inline-block rounded-2xl shadow-md">
                    <div className="flex gap-4 items-center">
                        <div>
                            <div className="bg-secondary p-3 rounded-2xl">
                                <ComputerDesktopIcon width={30} />
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-bold">
                                Quality Assurance
                            </p>
                            <p>Hire me to check the quality and user experience of your website!</p>
                        </div>
                        <div className="ml-auto">
                            <div className="bg-success text-white text-xs font-semibold px-3 py-2 rounded-full inline-flex">
                                Available
                            </div>
                        </div>
                    </div>
                </div>
                </AnimateWhenVisible>
            </div>
        </>
    )
}

export default Services;