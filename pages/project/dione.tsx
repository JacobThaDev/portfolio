import React from "react";
import GlobalLayout from "@/layouts/GlobalLayout";
import Link from "next/link";
import Container from "@/components/global/Container";

export default function Dione() {
    return(
        <GlobalLayout title="Home">
            <Container>
                <p className="text-4xl font-bold mb-3">
                    Dione Protocol | My Dev Experience
                </p>
                <p className="mb-5">
                    Coming soon.
                </p>
                <p className="mb-3 text-lg">
                    Coming Soon
                </p>
            </Container>
        </GlobalLayout>
    )
}