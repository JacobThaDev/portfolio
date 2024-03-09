import React from "react";
import Container from "./Container";
import { HeartIcon } from "@heroicons/react/24/outline";

const Footer = () => {

    return(
        <div className="mb-10">
            <hr className="border-secondary mb-10" id="software"/>
            <Container>
                <p>Created with <HeartIcon height={20} className="inline-block text-danger" fill="currentColor" /> by Jacob Smith using NextJS, Tailwind, and Framer.</p>
            </Container>
        </div>
    )

}

export default Footer;