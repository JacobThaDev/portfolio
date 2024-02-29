import React from "react";
import Link from "next/link";
import Image from "next/image";

import { TwitterIcon } from '@/components/icons/TwitterIcon';
import { DiscordIcon } from '@/components/icons/DiscordIcon';
import { ReadcvIcon } from '@/components/icons/ReadcvIcon';
import { CakeIcon, EnvelopeOpenIcon, MapPinIcon } from '@heroicons/react/24/outline';
import AnimateWhenVisible from "../misc/AnimateWhenVisible";

const Profile = () => {
    return(
        <AnimateWhenVisible>
        <div className="bg-white rounded-2xl shadow-md p-5 pt-8 mb-10">
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
                <Link href="https://twitter.com/JacobThaDev"
                    target="_blank"
                    rel="nofollow"
                    className="inline-block bg-secondary p-2 rounded-xl">
                    <TwitterIcon width={24} height={24} />
                </Link>
                <Link href="https://discord.com/users/150486701695827968"
                    target="_blank"
                    rel="nofollow"
                    className="inline-block bg-secondary p-2 rounded-xl">
                    <DiscordIcon width={24} height={24}/>
                </Link>
                <Link href="https://read.cv/jacobthadev"
                    target="_blank"
                    rel="nofollow"
                    className="inline-block bg-secondary p-2 rounded-xl">
                    <ReadcvIcon width={24} height={24} />
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
        </AnimateWhenVisible>
    )

}

export default Profile;