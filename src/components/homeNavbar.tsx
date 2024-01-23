'use client'

import { useState } from "react";
import Link from "next/link"
import { IoMenu } from "react-icons/io5";
import { Drawer } from "@mui/joy";


import metadata from "@/../public/metadata.json";


export const HomeNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = metadata.PageStructure;

    return (
        <nav >


            <div className="flex p-4 space-x-10 hidden sm:block">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.path}
                        className="font-semibold relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-30 text-white text-lg"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>


            <div className="flex sm:hidden p-2 justify-end">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='rounded-lg p-1 border-2'
                >
                    <div>
                        <IoMenu className='text-white w-6 h-6' />
                    </div>
                </button>
            </div>



            <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex flex-col p-8 space-y-4">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className="font-semibold text-black text-lg"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </Drawer>


        </nav >
    );

}


export default HomeNavbar;