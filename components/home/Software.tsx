import React, { useState } from "react";
import Link from 'next/link';

import { 
    BattleNetIcon, SteamIcon, TelegramIcon, DiscordIcon, SpotifyIcon,
    NextIcon, VercelIcon, GithubIcon, TailwindIcon, UbuntuIcon, MySQLIcon, WindowsIcon, 
    VsIcon, NodeIcon, ReactIcon, FramerIcon
} from "@/components/icons/brands";
import { classNames } from "@/helpers/Functions";
import { m } from "framer-motion";

const MySoftware = () => {

    const [ active, setActive ] = useState<string[]>([]);

    const categories = [
        "os", 
        "editing",
        "frontend",
        "backend",
        "comms",
        "collab",
        "gaming",
        "jams"
    ];

    const software = [
        { 
            title: "Windows 11",
            icon: <WindowsIcon height={30} width={30} />,
            link: "https://www.microsoft.com/en-us/windows",
            category: "os"
        },
        { 
            title: "VSCode",
            icon: <VsIcon height={30} width={30} />,
            link: "https://code.visualstudio.com/",
            category: "editing"
        },
        {
            title: "NextJS",
            icon: <NextIcon height={30} width={30} strokeWidth={1.5} />,
            link: "https://nextjs.org/",
            category: "frontend"
        },
        { 
            title: "ReactJS",
            icon: <ReactIcon height={30} width={30} strokeWidth={1.5} />,
            link: "https://reactjs.org/",
            category: "frontend"
        },
        { 
            title: "TailwindCSS",
            icon: <TailwindIcon height={30} width={30} />,
            link: "https://tailwindcss.com/",
            category: "frontend"
        },
        { 
            title: "Framer",
            icon: <FramerIcon height={30} width={30} />,
            link: "https://www.framer.com/",
            category: "frontend"
        },
        { 
            title: "NodeJS",
            icon: <NodeIcon height={30} width={30} />,
            link: "https://nodejs.org",
            category: "backend"
        },
        { 
            title: "MySQL",
            icon: <MySQLIcon height={30} width={30} />,
            link: "https://www.mysql.com/",
            category: "backend"
        },
        { 
            title: "Ubuntu *",
            icon: <UbuntuIcon height={30} width={30} />,
            link: "https://ubuntu.com/",
            category: "os"
        },
        { 
            title: "Github",
            icon: <GithubIcon height={30} width={30} />,
            link: "https://github.com/JacobThaDev",
            category: "collab"
        },
        { 
            title: "Vercel",
            icon: <VercelIcon height={30} width={30} />,
            link: "https://vercel.com",
            category: "frontend"
        },
        { 
            title: "Spotify",
            icon: <SpotifyIcon height={30} width={30} className="text-[#1DB954]" />,
            link: "https://spotify.com",
            category: "jams"
        },
        {
            title: "Discord",
            icon: <DiscordIcon height={30} width={30} className="text-[#5865F2]" />,
            link: "https://discord.com/users/150486701695827968",
            category: "comms"
        },
        {
            title: "Telegram",
            icon: <TelegramIcon height={30} width={30} className="text-[#0088cc]" />,
            link: "https://t.me/JacobThaDev",
            category: "comms"
        },
        {
            title: "Steam",
            icon: <SteamIcon height={30} width={30} />,
            link: "https://steamcommunity.com/id/JacobThaDev/",
            category: "gaming"
        },
        {
            title: "BattleNet",
            icon: <BattleNetIcon height={30} width={30} />,
            link: "https://us.shop.battle.net/en-us",
            category: "gaming"
        }
    ];

    /**
     * copies the array so we can manipulate
     * @param category <string> toggle category on or off
     */
    const toggleCategories = (category:string) => {
        const copy = active.map(x => x);

        if (copy.includes(category)) {
            copy.splice(active.indexOf(category), 1);
        } else {
            copy.push(category);
        }

        setActive(copy);
    }

    return(
        <>
            <p className="font-bold text-2xl">
                My Software
            </p>
            <p className="mb-5">
                Software and apps that I use during my development process.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
                {categories.map((category:string, index:number) => {

                    const isActive = active.includes(category);

                    const classes:string = classNames(
                        isActive ? "bg-primary text-white" : "bg-white",
                        "p-3",
                        "px-4",
                        "rounded-full",
                        "min-w-[70px]",
                        "shadow-md",
                        "transition-all"
                    );

                    return(
                        <button 
                            key={index}
                            onClick={() => toggleCategories(category)}
                            className={classes}>
                            {category}
                        </button>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 text-nowrap group">
                {software.map((software, index:number) => {
                    
                    const classes:string = classNames(
                        "bg-white",
                        "p-5",
                        "shadow-md",
                        "relative",
                        "rounded-xl",
                        "flex",
                        "items-center",
                        "gap-3",
                        active.includes(software.category) ? "" : "group-hover:opacity-40",
                        active.includes(software.category) ? "" : "hover:!opacity-100",
                        "transition-opacity",
                        (active.length == 0 ? "" : active.includes(software.category) ? "" : "!opacity-40"),

                    )

                    return(
                        <Link key={index}
                                href={software.link}
                                target="_blank"
                                rel="nofollow"
                                className={classes}>
                            {software.icon}

                            {active.includes(software.category) && 
                                <div className="absolute bg-primary border-[3px] border-background w-4 h-4 rounded-full -top-1 -right-1 pulse-active"/>}
                            
                            <p>{software.title}</p>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default MySoftware;