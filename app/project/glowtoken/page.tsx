import React from "react";
import GlobalLayout from "@/app/layouts/GlobalLayout";
import Link from "next/link";
import Container from "@/app/layouts/components/Container";

export default function GlowToken() {
    return(
        <GlobalLayout>
            <Container className="mb-32">
                <p className="text-4xl font-bold mb-3">GlowToken | Work History</p>
                <p className="mb-5">Published Feb. 29, 2024 by Jacob Smith</p>

                <p className="mb-4">
                    Website:{" "}
                    <Link href="https://glowtoken.net" target="_blank" rel="nofollow"
                        className="inline-block text-primary font-bold">
                        https://glowtoken.net
                    </Link>
                </p>

                <p className="mb-5 font-bold">
                    Coming Soon
                </p>
            </Container>
        </GlobalLayout>
    )
}