"use client";

import React from "react";

import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'

import {
    ArrowTopRightOnSquareIcon,
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import Link from "next/link";
import Image from "next/image";
import { Logo } from "../../components/icons/Logo";
import Container from "./Container";

const Navbar = () => {

    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)

    return (
        <header className={`w-full z-50 mb-20 pt-10`}>
            <Container>
                <nav className="flex mx-auto items-center py-2 gap-10 relative z-[1000]" aria-label="Global">
                    <div className="flex">
                        <Link href="/" className="inline-block">
                            <span className="sr-only">{process.env.NEXT_PUBLIC_SITE_NAME}</span>
                            <Logo width={140} height={79}/>
                        </Link>
                    </div>

                    <div className="flex lg:hidden ml-auto">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}>
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <Popover.Group className="hidden lg:flex ">
                        <Link href="/" className="font-semibold leading-6 text-gray-900 hover:bg-secondary px-6 py-4 rounded-xl transition-colors">
                            Home
                        </Link>
                        <Link href="/#works" className="font-semibold leading-6 text-gray-900 hover:bg-secondary px-6 py-4 rounded-xl transition-colors">
                            Works
                        </Link>
                        <Link href="/#services" className="font-semibold leading-6 text-gray-900 hover:bg-secondary px-6 py-4 rounded-xl transition-colors">
                            Services
                        </Link>
                        <Link href="/#setup" className="font-semibold leading-6 text-gray-900 hover:bg-secondary px-6 py-4 rounded-xl transition-colors">
                            My Setup
                        </Link>
                        <Link href="https://read.cv/jacobthadev" 
                            target="_blank" 
                            rel="nofollow" 
                            className="font-semibold flex gap-1 items-center leading-6 text-gray-900 hover:bg-secondary px-6 py-4 rounded-xl transition-colors">
                            Experience <ArrowTopRightOnSquareIcon height={22}/>
                        </Link>
                    </Popover.Group>
                </nav>

                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 z-[1000] right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">{process.env.NEXT_PUBLIC_SITE_NAME}</span>
                                <Image src="/img/logo.png" width={110} height={143} alt="" className="h-auto" />
                            </Link>
                            <button type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}>
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Home
                                    </Link>
                                    <Link href="/#works" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Works
                                    </Link>
                                    <Link href="/#services" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Services
                                    </Link>
                                    <Link href="/#setup" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        My Setup
                                    </Link>
                                    <Link href="https://read.cv/jacobthadev"
                                        target="_blank"
                                        rel="nofollow"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Experience
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </Container>
        </header>
    )

}

export default Navbar;