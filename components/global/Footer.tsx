import React from "react";
import Container from "./Container";
import { HeartIcon } from "@heroicons/react/24/outline";

interface ContainerProps {
    children?: React.ReactNode;
    props?:any;
    className?:any
}

const Footer = () => {

    return(
        <div className="mb-10">
            <hr className="border-secondary mb-10" id="software"/>
            <Container>
                <p>Created with <HeartIcon height={20} className="inline-block text-danger" fill="currentColor" /> by Jacob Smith</p>
            </Container>
        </div>
    )

}

export default Footer;