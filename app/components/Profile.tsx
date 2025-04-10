import React from "react";
import Link from "next/link";
import Image from "next/image";

import { 
    TwitterIcon, DiscordIcon, ReadcvIcon, GithubIcon, GoogleIcon 
} from '@/app/components/icons/brands';
import { CakeIcon, EnvelopeOpenIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Profile = () => {
    return(
        <div className="bg-white rounded-2xl shadow-md px-10 pb-5 pt-8 mb-10 flex flex-col items-center">
            <div className="relative inline-block text-center mb-10">
                <Image src="/img/avatar.jpg" 
                    width={150}
                    height={150} 
                    className="rounded-full relative z-10 mx-auto h-auto border-[3px] border-success p-1 inline-block"
                    alt="avatar"/>

                <div className="absolute py-2 bg-success text-white z-10 rounded-full text-xs w-[80px] left-[50%] ml-[-40px] -bottom-2 border-4">
                    Available
                </div>
            </div>

            <div className="mb-10 text-center">
                <p className="text-3xl font-[900] mb-3">Jacob Smith</p>
                <div className="px-4 py-2 bg-secondary inline-block rounded-xl text-xs font-bold">
                    <p>Web Developer</p>
                </div>
            </div>

            <div className="flex gap-2 items-center justify-center mb-10 flex-wrap">
                <Link href="https://twitter.com/JacobThaDev"
                    target="_blank"
                    rel="nofollow"
                    className="inline-block p-2 rounded-xl hover:bg-secondary">
                    <TwitterIcon width={24} height={24} />
                </Link>
                <Link href="https://discord.com/users/150486701695827968"
                    target="_blank"
                    rel="nofollow"
                    className="inline-block p-2 rounded-xl hover:bg-secondary">
                    <DiscordIcon width={24} height={24}/>
                </Link>
                <Link href="https://github.com/JacobThaDev"
                    target="_blank"
                    rel="nofollow"
                    className="inline-block p-2 rounded-xl hover:bg-secondary">
                    <GithubIcon width={24} height={24}/>
                </Link>
                <Link href="mailto:jacobthad3v@gmail.com"
                    target="_blank"
                    rel="nofollow"
                    className="inline-block p-2 rounded-xl hover:bg-secondary">
                    <EnvelopeOpenIcon width={24} height={24} />
                </Link>
                <Link href="https://read.cv/jacobthadev"
                    target="_blank"
                    rel="nofollow"
                    className="inline-block p-2 rounded-xl hover:bg-secondary">
                    <ReadcvIcon width={24} height={24} />
                </Link>
            </div>

            <div className="flex flex-col gap-2 my-5">
                <div>
                    <div className="flex items-center gap-3">
                        <div>
                            <MapPinIcon height={20}/>
                        </div>
                        <div className="inline-block rounded-xl w-full">
                            <p>Texarkana, Texas</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-3">
                        <div>
                            <EnvelopeOpenIcon height={20}/>
                        </div>
                        <Link href="mailto:rune.evo2012@gmail.com"
                            target="_blank"
                            rel="nofollow"
                            className="inline-block rounded-xl w-full">
                            rune.evo2012@gmail.com
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-3">
                        <div>
                            <CakeIcon height={20}/>
                        </div>
                        <div className="inline-block rounded-xl w-full">
                            <p>October 21, 1990</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Profile;