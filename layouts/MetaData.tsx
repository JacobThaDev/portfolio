import React, { useEffect } from "react";
import NextHead from "next/head";

interface MetaProps {
    title?:string;
	desc?:string
}

export const MetaData = ({ title, desc, }: MetaProps) => {

	return (
		<NextHead>
			<title>{`${title ? title+" | Foxtrot Labs" : "Foxtrot Labs"}`}</title>
			<meta name="description" content={`${desc ? desc : "Get access to hundreds of beautiful website templates, components, and more with our online library. Get started today for free, or pick up our premium plan for exclusive all-access."}`} />
			<meta name="viewport" key="viewport" content="width=device-width, initial-scale=0.87, shrink-to-fit=no" />
			<link href="/favicon.svg" rel="icon" />
		</NextHead>
	);

};
