import GlobalLayout from '@/layouts/GlobalLayout';
import Container from '@/components/global/Container';
import { ReactIcon } from '@/components/icons/ReactIcon';
import { NodeIcon } from '@/components/icons/NodeIcon';
import { VsIcon } from '@/components/icons/VsIcon';
import { WindowsIcon } from '@/components/icons/WindowsIcon';
import { MySQLIcon } from '@/components/icons/MySQLIcon';
import { UbuntuIcon } from '@/components/icons/UbuntuIcon';
import { MemoryIcon } from '@/components/icons/MemoryIcon';
import Image from 'next/image';
import PcSetup from '@/components/setup/pcsetup';
import { TailwindIcon } from '@/components/icons/TailwindIcon';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { VercelIcon } from '@/components/icons/VercelIcon';
import Link from 'next/link';
import React from 'react';
import { NextIcon } from '@/components/icons/NextIcon';
import MySoftware from '@/components/home/Software';


export default function Setup() {

    const software = [
        { 
            title: "Windows 11",
            icon: <WindowsIcon height={30} width={30} />,
            link: "",
        },
        { 
            title: "VSCode",
            icon: <VsIcon height={30} width={30} />,
            link: "",
        },
        { 
            title: "NextJS",
            icon: <NextIcon height={30} width={30} strokeWidth={1.5} />,
            link: "",
        },
        { 
            title: "ReactJS",
            icon: <ReactIcon height={30} width={30} strokeWidth={1.5} />,
            link: "",
        },
        { 
            title: "TailwindCSS",
            icon: <TailwindIcon height={30} width={30} />,
            link: "",
        },
        { 
            title: "NodeJS",
            icon: <NodeIcon height={30} width={30} />,
            link: "",
        },
        { 
            title: "MySQL",
            icon: <MySQLIcon height={30} width={30} />,
            link: "",
        },
        { 
            title: "Ubuntu 20",
            icon: <UbuntuIcon height={30} width={30} />,
            link: "",
        },
        { 
            title: "Github",
            icon: <GithubIcon height={30} width={30} />,
            link: "",
        },
        { 
            title: "Vercel",
            icon: <VercelIcon height={30} width={30} />,
            link: "",
        }
    ]

    return (
        <GlobalLayout title="Home">
            
            <div className="flex items-center mb-20">
                <Container>
                    <PcSetup/>
                    <MySoftware/>
                </Container>
            </div>
        </GlobalLayout>
    );
}