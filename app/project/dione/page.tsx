import React from "react";
import GlobalLayout from "@/app/layouts/GlobalLayout";
import Link from "next/link";
import Container from "@/app/layouts/components/Container";

export default function Dione() {
    return(
        <GlobalLayout>
            <Container className="mb-32">
                <p className="text-4xl font-bold mb-3">Dione Protocol | Work History</p>
                <p className="mb-5">Published Feb. 29, 2024 by Jacob Smith</p>

                <div className="flex items-center gap-5 mb-2">
                    <p>Position</p>
                    <div className="bg-success text-white px-4 py-1.5 inline-block rounded-full">
                        Head of Website Development
                    </div>
                </div>

                <div className="flex items-center gap-5 mb-2">
                    <div>Website</div>
                    <Link href="https://dioneprotocol.com" target="_blank" rel="nofollow"
                        className="inline-block text-primary font-bold">
                        https://dioneprotocol.com
                    </Link>
                </div>

                <div className="flex items-center gap-5 mb-2">
                    <div>Projects</div>
                    <div>
                        <p>Main website, Dione Portal + all portal apps</p>
                    </div>
                </div>

                <div className="flex items-center gap-5 mb-5">
                    <div>Duration</div>
                    <div>
                        <p>2 years (Dec. 2022 - Feb. 2025)</p>
                    </div>
                </div>

                <p className="mb-5">
                    As head of website development, I was responsible for building and maintaining the website and all of it&apos;s content, along with the Dione 
                    Portal app. The Dione Portal is designed to be an all-in-one app for several dapps. Each project was always completed ahead of schedule 
                    usually with a 2 week deadline. This included:
                </p>

                <ul className="list-styled">
                    <li>Validators</li>
                    <li>Staking</li>
                    <li>NFT Bridging</li>
                    <li>Token Bridging</li>
                    <li>Testnet Faucet</li>
                </ul>
            </Container>
        </GlobalLayout>
    )
}