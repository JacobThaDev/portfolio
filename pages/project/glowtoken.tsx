import React from "react";
import GlobalLayout from "@/layouts/GlobalLayout";
import Container from "@/components/global/Container";
import Link from "next/link";

export default function GlowToken() {
    return(
        <GlobalLayout 
            title="GlowToken" 
            desc="Behind the scenes of my creative process in building the GlowToken website.">
            <Container className="mb-32">
                <p className="text-4xl font-bold mb-3">GlowToken | Case Study</p>
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