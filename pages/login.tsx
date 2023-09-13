import React from 'react';
import GlobalLayout from '../layouts/GlobalLayout';
import Container from '../components/global/Container';
import { Logo } from '../components/icons/Logo';
import { useSession, signIn, signOut } from "next-auth/react"

function Login() {
    const { data: session } = useSession()
    console.log(session);
    
    return(
        <GlobalLayout title="Log In" showNav={false}>
            <Container>

                <div className="background_main__DNPzk">
                    <div className="background_content__Y5Uld"></div>
                </div>
            
                <div className="flex min-h-[100vh] items-center justify-center">

                {session && 
                    <div className="w-[100%] max-w-[450px] p-3 border-1 rounded-2xl shadow-xl bg-white">
                        <div className="flex login-header items-center justify-center flex-col py-5 gap-1">
                            <Logo width={50} className="text-primary mb-5"/>
                            <h3 className="text-xl font-semibold">Welcome to Foxtrot Labs</h3>
                            <p>Thanks for joining!</p>
                        </div>

                        <div className="flex flex-col items-center justify-center mb-10">
                            {session.user && 
                                <img src={""+session.user.image} 
                                    className="rounded-full border-[10px] w-32 h-32 border-gray-100" 
                                    alt=""/>}

                            <p className="font-[700] text-xl mt-3">{session.user && session.user.name}</p>
                            <p className="text-gray-600">{session.user && session.user.email}</p>
                        </div>

                        <div className="px-8 pb-10">
                            <a className="w-full text-center mb-3 inline-block px-3.5 py-2.5 rounded-lg bg-[#EFEFEF] hover:bg-primary hover:text-white transition-colors" 
                                href={"/"}>
                                Continue
                            </a>

                            <button className="w-full text-center py-3 bg-slate-600 hover:bg-slate-600/90 transition-colors rounded-lg text-white" 
                                onClick={() => signOut()}>
                                    Cancel
                            </button>
                        </div>
                    </div>}

                    {!session && 
                    <div className="w-[100%] max-w-[450px] p-3 border-1 rounded-2xl shadow-xl bg-white">
                        <div className="flex login-header items-center justify-center flex-col py-5 gap-1">
                            <Logo width={50} className="text-primary mb-5"/>
                            <h3 className="text-xl font-semibold">Log in to Code Canvas</h3>
                            <p>Join our legion or die.</p>
                        </div>

                        <div className="px-8 pb-10">
                            <button className="w-full mb-3 inline-block px-3.5 py-2.5 rounded-lg bg-[#EFEFEF] hover:bg-primary hover:text-white transition-colors" 
                                onClick={() => signIn("google")}>
                                Log in with Google
                            </button>
                            <button className="w-full inline-block px-3.5 py-2.5 rounded-lg bg-[#EFEFEF] hover:bg-primary hover:text-white transition-colors" 
                                onClick={() => signIn("twitter")}>
                                Log in with Twitter
                            </button>
                        </div>
                    </div>}
                </div>

            </Container>
        </GlobalLayout>
    )

}

export default Login;