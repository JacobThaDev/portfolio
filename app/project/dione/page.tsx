import React from "react";
import GlobalLayout from "@/app/layouts/GlobalLayout";
import Link from "next/link";
import Container from "@/app/layouts/components/Container";
import Image from "next/image";

export default function Dione() {
    return(
        <GlobalLayout>
            <Container className="mb-32">
                <p className="text-4xl font-bold mb-3">Dione Protocol | History</p>
                <p>Published Feb. 29, 2024 by Jacob Smith</p>
                <p className="mb-5 text-sm">Last Updated April 10, 2025</p>

                <div className="flex flex-col lg:flex-row lg:items-center gap-x-5 gap-y-2 mb-2">
                    <div className="w-[70px] font-bold">Position</div>
                    <div className="">
                        Head of Website Development
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-x-5 gap-y-2 mb-2">
                    <div className="w-[70px] font-bold">Website</div>
                    <Link href="https://dioneprotocol.com" target="_blank" rel="nofollow"
                        className="inline-block text-primary font-bold">
                        https://dioneprotocol.com
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-x-5 gap-y-2 mb-2">
                    <div className="w-[70px] font-bold">Projects</div>
                    <div>
                        <p>Main website, Dione Portal + all portal apps</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-x-5 gap-y-2 mb-2">
                    <div className="w-[70px] font-bold">Duration</div>
                    <div>
                        <p>2 years (Dec. 2022 - Feb. 2025)</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-x-5 gap-y-2 mb-5">
                    <div className="w-[70px] font-bold">Status</div>
                    <div>
                        <p className="text-success">Dione is operating normally.</p>
                    </div>
                </div>

                <p className="mb-5">
                    As head of website development, I was responsible for building and maintaining the website and 
                    all of it&apos;s content, along with the Dione Portal app. The Dione Portal is designed to be 
                    an all-in-one app for several dapps. Each project was always completed ahead of schedule usually 
                    with a 2-4 week deadline:
                </p>

                <ul className="list-disc ms-10 mb-5">
                    <li>Main website design and development</li>
                    <li>
                        <p>Portal designed and developed which also included:</p>
                        <ul className="list-disc ms-5">
                            <li>Validators dApp</li>
                            <li>Staking dApp</li>
                            <li>NFT Cross-Chain Bridge</li>
                            <li>Token Cross-Chain Bridge</li>
                            <li>Testnet Faucet</li>
                        </ul>
                    </li>
                </ul>

                <p className="mb-5">
                    The portal was designed and built from the ground up using NextJS, TailwindCSS, TypeScript, 
                    ReOwn AppKit and a few other small packages. I was also fully responsible for the success 
                    of the portal and it's overall setup.
                </p>

                <div className="flex flex-col lg:flex-row gap-5 items-center">
                    <div className="overflow-hidden rounded-2xl relative shadow">
                        <Image src="/img/previews/dione/homepage2.png" width={1280} height={720} alt=""/>
                    </div>
                    <div className="overflow-hidden rounded-2xl relative shadow">
                        <Image src="/img/previews/dione/odybridge1.png" width={1280} height={720} alt=""/>
                    </div>
                    <div className="overflow-hidden rounded-2xl relative shadow">
                        <Image src="/img/previews/dione/validators1.png" width={1280} height={720} alt=""/>
                    </div>
                </div>
            </Container>
        </GlobalLayout>
    )
}