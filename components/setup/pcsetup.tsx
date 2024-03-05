import React from "react";
import Image from "next/image";

const PcSetup = () => {
    return(
        <>
            <p className="font-bold text-2xl">
                My Setup
            </p>
            <p className="mb-5">
                What I use for development on a daily basis. Also is my gaming rig.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
                <div className="bg-white p-5 shadow-md rounded-xl relative overflow-hidden text-white h-[180px] group">
                    <Image src="/img/misc/cpu.jpg?v=sd2" width={1280} height={960} alt=""
                        className="absolute top-0 left-0 bottom-0 grayscale group-hover:grayscale-0 transition-all duration-500" />
                    
                    <div className="absolute top-0 left-0 bottom-0 h-full w-full z-[9] inset-shadow"/>
                    
                    <div className="absolute bottom-5 z-10 text-shadow">
                        <p className="text-sm">Processor</p>
                        <p className="text-lg font-bold">Ryzen 7 5800X</p>
                    </div>
                </div>
                <div className="bg-white p-5 shadow-md rounded-xl relative overflow-hidden text-white h-[180px] group">
                    <Image src="/img/misc/gpu.jpg?t=1231" width={1280} height={960} alt="" 
                        className="absolute top-0 left-0 bottom-0 grayscale group-hover:grayscale-0 transition-all duration-500" />
                    
                    <div className="absolute top-0 left-0 bottom-0 h-full w-full z-[9] inset-shadow"/>
                    
                    <div className="absolute bottom-5 z-10 text-shadow">
                        <p className="text-sm">Graphics Card</p>
                        <p className="text-lg font-bold">MSI RTX 3070 Ventus 2X</p>
                    </div>
                </div>
                <div className="bg-white p-5 shadow-md rounded-xl relative overflow-hidden text-white h-[180px] group">
                    <Image src="/img/misc/memory.jpg?t=1231" width={1280} height={960} alt=""
                        className="absolute top-0 left-0 bottom-0 grayscale group-hover:grayscale-0 transition-all duration-500 mx-auto" />
                    
                    <div className="absolute top-0 left-0 bottom-0 h-full w-full z-[9] inset-shadow"/>
                    
                    <div className="absolute bottom-5 z-10 text-shadow">
                        <p className="text-sm">Memory</p>
                        <p className="text-lg font-bold">32GB DDR4 3200</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PcSetup;