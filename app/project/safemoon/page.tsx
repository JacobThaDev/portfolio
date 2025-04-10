import React from "react";
import GlobalLayout from "@/app/layouts/GlobalLayout";
import Link from "next/link";
import Container from "@/app/layouts/components/Container";

export default function Safemoon() {
    return(
        <GlobalLayout>
            <Container className="mb-32">
                <p className="text-4xl font-bold mb-3">Safemoon | Work History</p>
                <p className="mb-5">Published Feb. 29, 2024 by Jacob Smith</p>

                <p className="mb-5 font-bold">
                    referenced version:{" "}
                    <Link href="https://web.archive.org/web/20220324010539/https://safemoon.com" 
                        className="inline-block text-primary font-bold"
                        target="_blank" rel="nofollow">
                        web.archive.org
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
                    Coming soon
                </p>

            </Container>
        </GlobalLayout>
    )
}