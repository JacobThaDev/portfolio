import React from "react";
import AnimateWhenVisible from "../misc/AnimateWhenVisible";

const Profession = () => {
    return(
        <AnimateWhenVisible direction="fade-down" duration={2.5} delay={0.3}>
            <p>My Profession</p>
            <p className="text-2xl font-bold mb-5">
                Website Developer
            </p>

            <p className="text-lg mb-10">
                I&apos;m <strong>Jacob Smith</strong>, a well respected and independent website developer and avid gamer 
                from Texarkana, Texas. Every website is hand crafted to be sleek and professional using NextJS, NodeJS, 
                and TailwindCSS. I focus on clean and maintainable code and like to experiment in my free time. I also 
                like to squash edge-cases for fun.
            </p>
        </AnimateWhenVisible>
    )
}

export default Profession;