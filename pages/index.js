import GlobalLayout from '@/layouts/GlobalLayout';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/global/Container';
import { TwitterIcon } from '@/components/icons/TwitterIcon';
import { DiscordIcon } from '@/components/icons/DiscordIcon';
import { LinkedinIcon } from '../components/icons/LinkedinIcon';
import { CakeIcon, EnvelopeOpenIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/outline';

function Homepage() {

    return (
        <GlobalLayout title="Home">
            
            <div className="flex items-center">
                <Container>
                    <div className="flex lg:flex-row flex-col gap-10 items-start">
                        <div className="min-w-[400px] bg-white rounded-3xl shadow-md p-5 pt-8">

                            <Image src="/img/avatar.jpg" 
                                width={150}
                                height={150} 
                                className="rounded-full relative z-10 mx-auto h-auto mb-10"
                                alt="avatar"/>

                            <div className="mb-10 text-center">
                                <p className="text-3xl font-bold mb-3">Jacob Smith</p>
                                <div className="px-4 py-2 bg-secondary inline-block rounded-xl text-xs font-bold">
                                    <p>Web Developer</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center justify-center mb-10">
                                <Link href=""
                                    target="_blank"
                                    rel="nofollow"
                                    className="inline-block bg-secondary p-2 rounded-xl">
                                    <TwitterIcon width={24} height={24} />
                                </Link>
                                <Link href=""
                                    target="_blank"
                                    rel="nofollow"
                                    className="inline-block bg-secondary p-2 rounded-xl">
                                    <DiscordIcon width={24} height={24}/>
                                </Link>
                                <Link href=""
                                    target="_blank"
                                    rel="nofollow"
                                    className="inline-block bg-secondary p-2 rounded-xl">
                                    <LinkedinIcon width={24} height={24} />
                                </Link>
                            </div>

                            <div className="flex flex-col gap-2 text-sm my-5">
                                <div>
                                    <div className="flex items-center">
                                        <div className="min-w-[34px]">
                                            <MapPinIcon height={20}/>
                                        </div>
                                        <div className="inline-block bg-secondary p-3 rounded-xl w-full">
                                            <p>Texarkana, Texas</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center">
                                        <div className="min-w-[34px]">
                                            <EnvelopeOpenIcon height={20}/>
                                        </div>
                                        <Link href="mailto:rune.evo2012@gmail.com"
                                            target="_blank"
                                            rel="nofollow"
                                            className="inline-block bg-secondary p-3 rounded-xl w-full">
                                            rune.evo2012@gmail.com
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center">
                                        <div className="min-w-[34px]">
                                            <CakeIcon height={20}/>
                                        </div>
                                        <div className="inline-block bg-secondary p-3 rounded-xl w-full">
                                            <p>October 21, 1990</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <p>My Profession</p>
                            <p className="text-2xl font-bold mb-5">
                                Full-Stack Website Developer
                            </p>

                            <p className="text-lg mb-10">
                                I&apos;m <strong>Jacob Smith</strong>, a well respected and independent website developer and avid gamer from Texarkana, Texas. 
                                Every website is hand crafted to be sleek and professional using NextJS, NodeJS, and TailwindCSS. I focus on clean and maintainable
                                code and like to experiment in my free time. I also like to squash edge-cases for fun.
                            </p>

                            <hr className="border-secondary mb-6"/>

                            <p className="text-2xl font-bold mb-5">
                                My Projects
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-10 group">
                                <div className="group-hover:opacity-30 hover:!opacity-[1] transition-opacity duration-700">
                                    <div className="bg-white w-full rounded-2xl shadow-md overflow-hidden p-5 lg:hover:translate-y-[-0.7em] transition-all duration-700 relative">
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
                                    </div>
                                </div>

                                <div className="bg-white w-full rounded-2xl shadow-md overflow-hidden p-5 lg:hover:translate-y-[-0.7em] transition-all duration-700">
                                    <div className="group-hover:opacity-30 hover:!opacity-[1] transition-opacity duration-700">
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
                                    </div>
                                </div>
                            </div>

                            <hr className="border-secondary mb-6"/>

                            <p className="text-2xl font-bold mb-5">
                                Services
                            </p>




                        </div>
                    </div>
                </Container>
            </div>
            
        </GlobalLayout>
    );

}

export default Homepage;