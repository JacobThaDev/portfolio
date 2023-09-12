import React, { useEffect } from "react";
import Container from "../global/Container";
import { Logo } from "../icons/Logo";

const HomeHeader = () => {

    return (
        <div className="relative overflow-hidden pt-32 pb-24">
            <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl md:-mr-20 lg:-mr-36"
                aria-hidden="true" />

            <Container>
                <div className="flex max-w-[900px] items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <p className="text-xl mb-0 text-primary font-[700]">
                                Welcome to CodeCanvas
                            </p>
                        </div>

                        <p className="text-4xl sm:text-6xl font-[800] leading-tight mb-8">
                            We do the code, so you can focus on your vision.
                        </p>

                        <p className="text-lg mb-8">
                            Get access to hundreds of beautiful website templates, components, and more with 
                            our online library. Get started today for free, or pick up our premium plan for exclusive
                            all-access.
                        </p>

                        <div className="flex gap-3">
                            <a href="/signup" className="inline-block bg-primary px-3.5 py-2.5 rounded-lg text-white">
                                Get Started
                            </a>
                            <a href="/signup" className="inline-block px-3.5 py-2.5 rounded-lg bg-[#EFEFEF] hover:bg-primary hover:text-white transition-colors">
                                Become a Creator
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )

}

export default HomeHeader;