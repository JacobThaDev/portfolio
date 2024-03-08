import React from "react";
import { MetaData } from "./MetaData";
import Navbar from "@/components/global/Navbar";

interface LayoutProps {
    children: React.ReactNode;
	title?:string;
	desc?:string;
	showNav?:boolean;
	showFooter?:boolean
}

export default function GlobalLayout({ children, title, desc, showNav = true, showFooter = true }: LayoutProps) {

	return (
		<>
			<MetaData title={title} description={desc}/>
			{showNav && <Navbar/>}
			{children}
		</>
	);
	
}
