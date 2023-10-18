import React from "react";

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'

import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Container from "./Container";
import { Logo } from "../icons/Logo";

import { censorEmail, capitalize } from "../../helpers/Functions";

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

import Link from "next/link";
import { useSession, signOut } from "next-auth/react"

const Navbar = () => {

    const { data:session } = useSession()
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)

    return (
        <header className={`absolute w-full top-0 left-0 z-50 ${mobileMenuOpen && "bg-white"}`}>
            <Container>
                <nav className="mx-auto flex items-center justify-between py-6" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Foxtrot Labs</span>
                            <img src="https://www.credoconstruction.com/wp-content/uploads/2020/02/3-300x99.jpg" 
                            style={{ height: 40 }}/>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <Popover.Group className="hidden lg:flex lg:gap-x-12">
                        <Popover className="relative">
                            
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus-visible:outline-none">
                                Product
                                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-4">
                                        {products.map((item) => (
                                            <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                </div>
                                                <div className="flex-auto">
                                                    <Link href={item.href} className="block font-semibold text-gray-900">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </Link>
                                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Features
                        </Link>
                        <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Marketplace
                        </Link>
                        <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Company
                        </Link>
                    </Popover.Group>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {session && <>
                            <Popover.Group className="hidden lg:flex lg:gap-x-12">
                                <Popover className="relative">
                            
                                    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus-visible:outline-none">
                                    <div className="flex items-center gap-3 text-left">
                                        <div>
                                            <img src={""+(session.user && session.user.image)} 
                                                width={40}
                                                height={40}
                                                alt="" className="rounded-full"/>
                                        </div>
                                        <div>
                                            <p className="text-md leading-3 mb-1">
                                                {session.user && session.user.name}
                                            </p>
                                            <p className="text-gray-300 font-[400] leading-3">
                                                {session.user 
                                                    && session.user.email 
                                                    && censorEmail(session.user.email)}
                                            </p>
                                        </div>
                                    </div>
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute -right-0 top-full z-10 mt-3 w-screen max-w-[200px] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                            <div className="p-4">
                                                <p className="text-gray-500 text-sm text-center">
                                                    Signed in with <br/>{capitalize(session.provider)}
                                                </p>
                                                <div className="group relative flex items-center gap-x-4 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50">
                                                    <Link href={"/user/profile"} className="block font-semibold">
                                                        Profile
                                                    </Link>
                                                </div>
                                                <div className="group relative flex items-center gap-x-4 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50">
                                                    <Link href={"/user/profile/downloads"} className="block font-semibold">
                                                        My Downloads
                                                    </Link>
                                                </div>
                                                <div className="group relative flex items-center gap-x-4 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50">
                                                    <Link href={"/user/profile/settings"} className="block font-semibold">
                                                        Settings
                                                    </Link>
                                                </div>
                                                <div className="group relative flex items-center gap-x-4 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50">
                                                    <button onClick={() => signOut()} className="block font-semibold text-danger">
                                                        Log Out
                                                    </button>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </Popover>
                            </Popover.Group>
                        </>}
                        {!session && <Link href="/login" className="text-sm font-semibold leading-6 text-white">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>}
                    </div>
                </nav>



                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 z-50 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Code Canvas</span>
                                <Logo width={40} className="text-primary"/>
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
                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 focus:outline-none border-0">
                                                    Product
                                                    <ChevronDownIcon
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...products, ...callsToAction].map((item) => (
                                                        <Disclosure.Button
                                                            key={item.name}
                                                            as="a"
                                                            href={item.href}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                        >
                                                            {item.name}
                                                        </Disclosure.Button>
                                                    ))}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
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
                                <div className="py-6">
                                    <Link href="/login"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Log in
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