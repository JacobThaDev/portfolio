import { Metadata } from "next";

import Providers from "./providers";

export const metadata: Metadata = {
    title: "JacobThaDev",
    description: "An independent website developer just vibin' and havin a good time. I build professional websites using NextJS, NodeJS, and Tailwind. This website also serves as my personal playground :)",
    keywords: ["jacob smith", "jacobthadev", "crypto", "web3", "crypto", "blockchain", "evm", "ethereum", "avalanche"],
    icons: ["/img/logo.png"],
    twitter: {
        title: "JacobThaDev",
        description: "An independent website developer just vibin' and havin a good time. I build professional websites using NextJS, NodeJS, and Tailwind. This website also serves as my personal playground :)",
        card: "summary_large_image",
        site: "@JacobThaDev", 
        creator: "@JacobThaDev", 
        images: "https://jacobtha.dev/img/logo_embed.png"
    }
};

interface RootTypes {
    children?: React.ReactNode
}

import "@/public/css/globals.css";
import "@/public/css/main.css";

export default function RootLayout({ children }: RootTypes) {
    return (
        <html lang="en">
            <body className="bg-background antialiased">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
