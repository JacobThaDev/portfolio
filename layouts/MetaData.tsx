import React, { useEffect } from "react";
import NextHead from "next/head";

interface MetaProps {
    title?:string;
	desc?:string
}

export const MetaData = ({ title, desc, }: MetaProps) => {

	return (
		<NextHead>
			<title>{`${title ? title+" | Credo Construction" : "Credo Construction"}`}</title>
			<meta name="description" content={`${desc ? desc : "Top general contractor in Whatcom and Skagit Counties in Washington, we offer a variety of building services tailored to meet your needs."}`} />
			<meta name="viewport" key="viewport" content="width=device-width, initial-scale=0.87, shrink-to-fit=no" />
			<link href="/favicon.svg" rel="icon" />
		</NextHead>
	);

};
