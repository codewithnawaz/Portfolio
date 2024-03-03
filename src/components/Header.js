import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'About', href: '#about', current: true },
    { name: 'Projects', href: '#project', current: false },
    { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Header() {
    return (
        <Disclosure as="nav" className="my-nav bg-white shadow-md fixed w-full z-10">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 ">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-1 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-red-500 hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                                    <span className="absolute -inset-0.5 " />
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                                <a href="#" className="flex flex-shrink-0 items-center font-bold tracking-wide hover:text-red-600 cursor-pointer">
                                    MyPortfolio
                                </a>

                            </div>
                            <div className="hidden sm:ml-6 sm:block ">
                                <div className="flex space-x-4" >
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                'text-gray-600 hover:text-primary  border-primary',
                                                'rounded-ee-none px-3 py-2 text-sm font-bold'
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2 divide-primary">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        'text-gray-600 hover:text-primary',
                                        'block rounded-md px-3 py-2 text-base font-bold'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Header