import React, { useEffect } from "react";
import NextHead from "next/head";

interface MetaProps {
    title?:string;
	description?:string
}

export const MetaData = ({ title, description, }: MetaProps) => {

    const default_desc = "An independent website developer just vibin' and havin a good time. I build websites using NextJS, NodeJS, and Tailwind.";

	return (
		<NextHead>
			<title>{`${title ? title+" | "+process.env.NEXT_PUBLIC_SITE_NAME : process.env.NEXT_PUBLIC_SITE_NAME}`}</title>
			<meta name="description" content={ description ? description : default_desc } />
			<meta name="viewport" key="viewport" content="width=device-width, initial-scale=0.87, shrink-to-fit=no" />
			<link href="/favicon.svg" rel="icon" />

            <meta property="og:title" content={`${(title ? title + " | " : "")}JacobThaDev`} />
            <meta property="og:image:type" content="image/png"/>
            <meta property="og:image:width" content="1280"/>
            <meta property="og:image:height" content="640"/>
            <meta property="og:image" content="https://jacobthadev.com/img/embed.png" />
            <meta name="twitter:description" content={description ? description : default_desc}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@JacobThaDev"/>
            <meta name="twitter:title" content={`${(title ? title + " | " : "")}JacobThaDev`}/>
            <meta name="twitter:creator" content="@JacobThaDev"/>
            <meta name="twitter:image:alt" content="@JacobThaDev"/>
		</NextHead>
	);

};
