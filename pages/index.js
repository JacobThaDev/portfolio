import GlobalLayout from '@/layouts/GlobalLayout';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/global/Container';
import { TwitterIcon } from '@/components/icons/TwitterIcon';
import { DiscordIcon } from '@/components/icons/DiscordIcon';
import { LinkedinIcon } from '../components/icons/LinkedinIcon';
import { CakeIcon, EnvelopeOpenIcon, MapPinIcon } from '@heroicons/react/24/outline';

function Homepage() {

    return (
        <GlobalLayout title="Home">
            
            <div className="flex items-center">
                <Container>
                    <div className="flex gap-10">
                        <div className="min-w-[300px] bg-white rounded-3xl shadow-md p-5 pt-8">

                            <Image src="/img/avatar.jpg" 
                                width={150}
                                height={300} 
                                className="rounded-full relative z-10 mx-auto h-auto mb-10"
                                alt=""/>

                            <div className="mb-10 text-center">
                                <p className="text-2xl font-bold mb-3">Jacob Smith</p>
                                <div className="px-4 py-2 bg-secondary inline-block rounded-xl text-xs font-bold">
                                    <p>Web Developer</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center justify-center mb-10">
                                <Link href=""
                                    className="inline-block bg-secondary p-2 rounded-xl">
                                    <TwitterIcon width={24} height={24} />
                                </Link>
                                <Link href=""
                                    className="inline-block bg-secondary p-2 rounded-xl">
                                    <DiscordIcon width={24} height={24}/>
                                </Link>
                                <Link href=""
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
                                            <p>Texarkana, Arkansas</p>
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
                                    <div className="flex items-center ">
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
                    </div>
                </Container>
            </div>
            
        </GlobalLayout>
    );

}

export default Homepage;