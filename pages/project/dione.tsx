import React from "react";
import GlobalLayout from "@/layouts/GlobalLayout";
import Container from "@/components/global/Container";
import Link from "next/link";

export default function Dione() {
    return(
        <GlobalLayout title="Dione">
            <Container className="mb-32">
                <p className="text-4xl font-bold mb-3">Dione Protocol | Case Study</p>
                <p className="mb-5">Published Feb. 29, 2024 by Jacob Smith</p>

                <p className="mb-4">
                    Website:{" "}
                    <Link href="https://dioneprotocol.com" target="_blank" rel="nofollow"
                        className="inline-block text-primary font-bold">
                        https://dioneprotocol.com
                    </Link>
                </p>

                <p className="mb-5 font-bold">
                    Coming Soon
                </p>
            </Container>
        </GlobalLayout>
    )
}