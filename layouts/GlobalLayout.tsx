import React from "react";
import { MetaData } from "./MetaData";
import Navbar from "../components/global/Navbar";

interface LayoutProps {
    children: React.ReactNode;
	title?:string;
	desc?:string
}

export default function GlobalLayout({ children, title, desc, }: LayoutProps) {

	return (
		<>
			<MetaData title={title} desc={desc}/>
			<Navbar/>
			{children}
		</>
	);
	
}
