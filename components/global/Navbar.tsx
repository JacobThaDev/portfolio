import React from "react";

import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'

import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { Logo, LogoWithTag } from "../icons/Logo";

const Navbar = () => {

    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)

    return (
        <header className={`sticky top-0 w-full z-50 bg-white shadow-md mb-20`}>
            <Container>
                <nav className="mx-auto flex items-center py-2 gap-10" aria-label="Global">
                    <div className="flex">
                        <Link href="#" className="inline-block">
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
                        <Link href="/works" className="font-semibold leading-6 text-gray-900 hover:bg-secondary px-6 py-4 rounded-xl transition-colors">
                            Works
                        </Link>
                        <Link href="/services" className="font-semibold leading-6 text-gray-900 hover:bg-secondary px-6 py-4 rounded-xl transition-colors">
                            Services
                        </Link>
                        <Link href="/library" className="font-semibold leading-6 text-gray-900 hover:bg-secondary px-6 py-4 rounded-xl transition-colors">
                            GitHub
                        </Link>
                        <Link href="/contact" className="font-semibold leading-6 text-gray-900 hover:bg-secondary px-6 py-4 rounded-xl transition-colors">
                            Contact
                        </Link>
                    </Popover.Group>
                </nav>

                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 z-50 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                                    <Link href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Features
                                    </Link>
                                    <Link href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Marketplace
                                    </Link>
                                    <Link href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Company
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