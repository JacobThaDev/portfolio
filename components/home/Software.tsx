import React from "react";
import Link from 'next/link';

import { 
    BattleNetIcon, SteamIcon, TelegramIcon, DiscordIcon, SpotifyIcon,
    NextIcon, VercelIcon, GithubIcon, TailwindIcon, UbuntuIcon, MySQLIcon, WindowsIcon, 
    VsIcon, NodeIcon, ReactIcon
} from "@/components/icons/brands";

const MySoftware = () => {

    const software = [
        { 
            title: "Windows 11",
            icon: <WindowsIcon height={30} width={30} />,
            link: "https://www.microsoft.com/en-us/windows",
        },
        { 
            title: "VSCode",
            icon: <VsIcon height={30} width={30} />,
            link: "https://code.visualstudio.com/",
        },
        { 
            title: "NextJS",
            icon: <NextIcon height={30} width={30} strokeWidth={1.5} />,
            link: "https://nextjs.org/",
        },
        { 
            title: "ReactJS",
            icon: <ReactIcon height={30} width={30} strokeWidth={1.5} />,
            link: "https://reactjs.org/",
        },
        { 
            title: "TailwindCSS",
            icon: <TailwindIcon height={30} width={30} />,
            link: "https://tailwindcss.com/",
        },
        { 
            title: "NodeJS",
            icon: <NodeIcon height={30} width={30} />,
            link: "https://nodejs.org",
        },
        { 
            title: "MySQL",
            icon: <MySQLIcon height={30} width={30} />,
            link: "https://www.mysql.com/",
        },
        { 
            title: "Ubuntu 20",
            icon: <UbuntuIcon height={30} width={30} />,
            link: "https://ubuntu.com/",
        },
        { 
            title: "Github",
            icon: <GithubIcon height={30} width={30} />,
            link: "https://github.com",
        },
        { 
            title: "Vercel",
            icon: <VercelIcon height={30} width={30} />,
            link: "https://vercel.com",
        },
        { 
            title: "Spotify",
            icon: <SpotifyIcon height={30} width={30} className="text-[#1DB954]" />,
            link: "https://spotify.com",
        },
        {
            title: "Discord",
            icon: <DiscordIcon height={30} width={30} className="text-[#5865F2]" />,
            link: "https://discord.com/users/150486701695827968",
        },
        {
            title: "Telegram",
            icon: <TelegramIcon height={30} width={30} className="text-[#0088cc]" />,
            link: "https://t.me/JacobThaDev",
        },
        {
            title: "Steam",
            icon: <SteamIcon height={30} width={30} />,
            link: "https://steamcommunity.com/id/JacobThaDev/",
        },
        {
            title: "BattleNet",
            icon: <BattleNetIcon height={30} width={30} />,
            link: "https://us.shop.battle.net/en-us",
        }
    ]

    return(
        <>
            <p className="font-bold text-2xl">
                My Software
            </p>
            <p className="mb-5">
                Software and apps that I use during my development process.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 text-nowrap group">
                {software.map((software, index:number) => {
                    return(
                        <Link key={index}
                                href={software.link}
                                target="_blank"
                                rel="nofollow"
                                className="bg-white p-5 shadow-md rounded-xl flex items-center gap-3 group-hover:opacity-30 hover:!opacity-100 transition-opacity">
                            {software.icon}
                            <p>{software.title}</p>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default MySoftware;