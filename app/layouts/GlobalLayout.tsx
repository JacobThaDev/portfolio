import React from "react";
import Navbar from "@/app/layouts/components/Navbar";
import Footer from "@/app/layouts/components/Footer";

interface LayoutProps {
    children?: React.ReactNode;
	showNav?:boolean;
	showFooter?:boolean
}

export default function GlobalLayout({ children, showNav = true, showFooter = true }: LayoutProps) {

	return (
		<>
			{showNav && <Navbar/>}
			{children}
            {showFooter && <Footer/>}
		</>
	);
	
}
