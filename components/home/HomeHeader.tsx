import React from "react";
import Container from "../global/Container";
import Link from "next/link";

const HomeHeader = () => {

    return (
        <div className="relative overflow-hidden pt-40 pb-32 bg-white lg:bg-background z-1 home-header">
            {<div 
            className="absolute inset-y-0 right-1/2 -mr-10 w-[200%] z-2 skew-x-[-30deg] lg:bg-white lg:shadow-xl md:-mr-20 lg:-mr-36"
                aria-hidden="true" />}

            <Container className="relative z-3">
                <div className="flex max-w-[900px] items-center z-3">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <p className="text-xl mb-0 text-primary font-[700]">
                                Credo Construction Inc.
                            </p>
                        </div>

                        <p className="text-4xl sm:text-6xl font-[800] leading-tight mb-8">
                            We can make your vision come to life.
                        </p>

                        <p className="text-lg mb-8">
                            Top general contractor in Whatcom and Skagit Counties in Washington, we offer a variety of building services
                            tailored to meet your needs.
                        </p>

                        <div className="flex gap-3">
                            <Link href="/login" className="inline-block bg-primary px-3.5 py-2.5 rounded-lg text-white">
                                Get a Quote
                            </Link>
                            <Link href="/contact" className="inline-block px-3.5 py-2.5 rounded-lg bg-[#EFEFEF] hover:bg-primary hover:text-white transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )

}

export default HomeHeader;