import React from "react";
import Container from "../global/Container";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
    return(
        <>
            <p className="text-2xl font-bold mb-5">
                My Projects
            </p>

            <div className="grid group grid-cols-1 md:grid-cols-2 gap-3 mb-10">

                <div className="group-hover:opacity-30 hover:!opacity-[1] transition-opacity duration-700">
                    <Link href="https://dioneprotocol.com" target="_blank" rel="nofollow" className="inline-block bg-white w-full rounded-2xl shadow-md overflow-hidden p-5 lg:hover:translate-y-[-0.7em] transition-all duration-700 relative">
                        <Image src="/img/dione2.png" 
                            width={400} 
                            height={200} 
                            alt="" 
                            className="rounded-lg"/>

                        <div className="pt-5 pb-3">
                            <div className="flex flex-col-reverse xl:flex-row xl:items-center gap-3 xl:justify-between">
                                <div className="w-full">
                                    <p className="text-sm">Crypto</p>
                                    <p className="text-lg font-bold">Dione Protocol</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="bg-secondary text-xs font-semibold px-3 py-2 rounded-full inline-flex">
                                        Website
                                    </div>
                                    <div className="bg-secondary text-xs font-semibold px-3 py-2 rounded-full inline-flex">
                                        UI/UX
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="group-hover:opacity-30 hover:!opacity-[1] transition-opacity duration-700">
                    <Link href="https://safemoon.com" target="_blank" rel="nofollow" className="inline-block bg-white w-full rounded-2xl shadow-md overflow-hidden p-5 lg:hover:translate-y-[-0.7em] transition-all duration-700">
                        <Image src="/img/safemoon.png" 
                            width={400} 
                            height={200} 
                            alt="" 
                            className="inline-block rounded-lg"/>

                        <div className="pt-5 pb-3">
                            <div className="flex flex-col-reverse xl:flex-row xl:items-center gap-3 xl:justify-between">
                                <div className="w-full">
                                    <p className="text-sm">Crypto</p>
                                    <p className="text-lg font-bold">SafeMoon</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="bg-secondary text-xs font-semibold px-3 py-2 rounded-full inline-flex">
                                        Website
                                    </div>
                                    <div className="bg-secondary text-xs font-semibold px-3 py-2 rounded-full inline-flex">
                                        UI/UX
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Projects;