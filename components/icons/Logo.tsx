import Image from "next/image";
import React from "react";

interface LogoProps {
    width: number;
    height: number;
}

const BRANCH = process.env.NEXT_PUBLIC_BRANCH;

export const Logo = ({ width, height }: LogoProps) => {
    if (BRANCH == "development") {
        return (
            <Image src="/img/logo_preview.png" 
                width={width}
                height={height}
                alt="Logo.png" 
                className="h-auto" />)
    } else {
        return (
            <Image src="/img/logo.png" 
                width={width}
                height={height}
                alt="Logo.png" 
                className="h-auto" />)
    }
};

export const LogoWithTag = ({ width, height }: LogoProps) => {
    if (BRANCH == "development") {
        return (
            <Image src="https://jacobtha.dev/img/logo_with_tag_preview.png" 
                width={width}
                height={height}
                alt="Logo.png" 
                className="h-auto" />)
    } else {
        return (
            <Image src="/img/logo_with_tag.png" 
                width={width}
                height={height}
                alt="Logo.png" 
                className="h-auto" />)
    }
};

export const EmbedCard = ({ width, height }: LogoProps) => {
    if (BRANCH == "development") {
        return (
            <Image src="https://jacobtha.dev/img/logo_embed_preview.png" 
                width={width}
                height={height}
                alt="Logo.png" 
                className="h-auto" />)
    } else {
        return (
            <Image src="/img/logo_embed.png" 
                width={width}
                height={height}
                alt="Logo.png" 
                className="h-auto" />)
    }
};