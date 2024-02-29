import React from "react";
import GlobalLayout from "@/layouts/GlobalLayout";
import Container from "@/components/global/Container";
import Link from "next/link";

export default function Safemoon() {
    return(
        <GlobalLayout 
            title="SafeMoon" 
            desc="Behind the scenes of my creative process in building the safemoon website.">
            <Container className="mb-32">
                <p className="text-4xl font-bold mb-3">Safemoon | Case Study</p>
                <p className="mb-5">Published Feb. 29, 2024 by Jacob Smith</p>

                <p className="mb-5 font-bold">
                    referenced version:{" "}
                    <Link href="https://web.archive.org/web/20220324010539/https://safemoon.com" className="inline-block"
                        target="_blank" rel="nofollow">
                        https://web.archive.org/web/20220324010539/https://safemoon.com
                    </Link>
                </p>

                <p className="mb-4">
                    Website:{" "}
                    <Link href="https://safemoon.com" target="_blank" rel="nofollow"
                        className="inline-block text-primary font-bold">
                        https://safemoon.com
                    </Link>
                </p>

                <p className="font-bold mb-3 text-lg">
                    Disclaimer: This case study outlines my creative process for creating the SafeMoon website. 
                    The design process was basic and rushed with limited time in an attempt to keep the project alive. 
                    Despite that I&apos;m being transparent.
                </p>

                <hr className="border-secondary my-5"/>

                <p className="mb-3 text-lg">
                    Immediately, coming into SafeMoon was stressful. I was given plenty of information but the pressure was high 
                    because they were beginning to &ldquo;moon&rdquo;. Their traffic had spiked to nearly 200,000 unique
                    concurrent users very quickly and their website had went offline because it was Wordpress.
                </p>

                <p className="mb-3 text-lg">
                    The first design I made was written with PHP. It was my language of choice at the time and I had written a
                    new framework prior that I wanted to use. I already knew it was fast enough to handle it, just needed 
                    that validation so I took the gamble. It had worked perfectly but there&apos;s one oversight I didn&apos;t 
                    catch in the rush.
                </p>

                <p className="mb-3 text-lg">
                    The API for some of the stats on the page were baked into the front-end, so each visit was making 5 calls
                    back to the same script. Basically, this was causing 6x the normal traffic for each visit. 200,000 
                    concurrent users where impacting the site with the power of 1,200,000 users and the server wasn&apos;t 
                    meant to handle that. It was only meant to handle around half of that. Lesson learned - don&apos;t be a 
                    moron.
                </p>

                <p className="text-lg mb-3">
                    This is when I begin to go down the rabbit hole of how to optimize and scale php and ended up just learning 
                    React and NextJS in favor of it&apos;s scalability right out of the box. After a few weeks of RND, the website was converted to 
                    NextJS and deployed on Vercel while the backend was deployed separately using NodeJS on a Linux machine.
                </p>

                <p className="mb-3 text-lg">
                    The design process is actually pretty simple here. I&apos;ll be quite frank on this one. I&apos;m not going
                    to sway you with color theory, foundations, or sketch boards. For a background in design I don&apos;t have 
                    much except a natural artistic ability and years of experience, but that doesn&apos;t always translate well 
                    to web design. It&apos;s like having to learn how to draw all over again. It comes in small steps and a lot 
                    of practice. For inspiration starting out I usually just surf around on the internet until I find a general 
                    theme I want to go for and just start building components in that style until I get something together that 
                    flows well to the eye.
                </p>

                <p className="mb-3 text-lg">
                    With everything from my block placements to colors and image placements, I&apos;m attempting to draw your eyes 
                    down a specific path so it&apos;s easier to follow. It&apos;s a technique I learned while taking Art classes. 
                    Some artists use the technique on paintings, for example, to lead your eyes from one part of the piece to the 
                    next. This can in some cases allows the artist to invoke deeper meaning into their pieces. The idea here is to
                    keep the viewer focused on the page and lead them along a linear path to prevent distraction.
                </p>

                <p className="mb-5 text-lg">
                    Color selection here was also relatively painless. Using their logo color and paint, I just darkened the colors 
                    and played with the saturation until I found a suitable background color for a dark themed website that had
                    a blue hue that wasn&apos;t too loud.
                </p>

                <div className="flex text-white text-sm items-stretch text-center mb-5">
                    <div className="w-52 bg-[#00A79D] rounded-2xl p-5 rounded-tr-none rounded-br-none">
                        Primary <br/>[#00A79D]
                    </div>
                    <div className="w-52 bg-[#1B1F26] p-5">
                        Secondary <br/>[#1B1F26]
                    </div>
                    <div className="w-52 bg-[#24282F] rounded-2xl p-5 rounded-tl-none rounded-bl-none">
                        Tertiary<br/> [#24282F]
                    </div>
                </div>

                <p className="mb-5 text-lg">
                    While I make this process sound fast, I tediously test all of my components for responsiveness, readability,
                    cohesiveness, accessibility, and more. I do this as I build out a page instead of building a rough draft first
                    then prettying it up later. This might mean I have a slower turnaround than some - but it also means I 
                    take more care in minor details to assure the viewing experience is pleasing.
                </p>

                <p className="mb-5  text-lg">
                    My "rough drafts" are basically already polished, responsive, and QA tested by the time it&apos;s submitted 
                    for review to upper management. This actually eases the burden on both parties, because I don&apos;t have to go back
                    and correct much of anything and the CEO doesn&apos;t have to stress with going over every little detail.
                </p>

                <p className="text-lg">
                    Of course my works aren&apos;t perfect, or anything &ldquo;god tier&rdquo;, but I&apos;m dedicated, and with practice
                    comes perfection.
                </p>
            </Container>
        </GlobalLayout>
    )
}