import React from 'react';
import GlobalLayout from '../layouts/GlobalLayout';
import Container from '../components/global/Container';
import { Logo } from '../components/icons/Logo';

import { useSession, signIn, signOut } from "next-auth/react"
import { GithubIcon } from '../components/icons/GithubIcon';
import { GoogleIcon } from '../components/icons/GoogleIcon';
import { DiscordIcon } from '../components/icons/DiscordIcon';
import Image from 'next/image';

function Login() {
    
    const { data: session } = useSession()
    
    return(
        <GlobalLayout title="Log In" showNav={false}>
            <Container>

                <div className="background_main__DNPzk">
                    <div className="background_content__Y5Uld"></div>
                </div>
            
                <div className="flex min-h-[100vh] items-center justify-center">
                    {!session && 
                    <div className="w-[100%] max-w-[450px] border-1 rounded-2xl shadow-xl bg-white">
                        <div className="flex login-header items-center justify-center flex-col py-5 pt-10 gap-1">
                            
                            <Image src="/img/logo.png" 
                                width={64} 
                                height={64} 
                                alt="" 
                                className="text-primary mb-5" />

                            <h3 className="text-xl font-semibold">
                                Sign in to get started
                            </h3>
                            <p>No need to register.</p>
                        </div>

                        <div className="inline-block h-[1px] w-full bg-gray-200"/>

                        <div className="px-8 pb-10 pt-7">
                            <button className="w-full mb-3 flex items-center justify-center px-3.5 py-2.5 rounded-lg bg-[#EFEFEF] hover:bg-[#333] hover:text-white transition-colors" 
                                onClick={() => signIn("github")}>
                                <GithubIcon className="h-5 w-5" />&nbsp;Continue with Github
                            </button>
                            <button className="w-full mb-3 flex items-center justify-center px-3.5 py-2.5 rounded-lg bg-[#EFEFEF] hover:bg-[#ea4335] hover:text-white transition-colors"
                                onClick={() => signIn("google")}>
                                <GoogleIcon className="h-5 w-5" />&nbsp;Continue with Google
                            </button>
                            <button className="w-full flex items-center justify-center px-3.5 py-2.5 rounded-lg bg-[#EFEFEF] hover:bg-[#5865F2] hover:text-white transition-colors" 
                                onClick={() => signIn("discord")}>
                                <DiscordIcon className="h-5 w-5" />&nbsp;Continue with Discord
                            </button>
                        </div>
                    </div>}
                </div>

            </Container>
        </GlobalLayout>
    )

}

export default Login;