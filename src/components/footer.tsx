
import Link from "next/link";

import { ImMail } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";


import metadata from "@/../public/metadata.json";


export const Footer = () => {

    const links = metadata.Links;

    return (
        <footer className="bg-white p-4 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">

                <p>Made with ❤️ by Shrisha</p>

                <div className="flex sm:justify-end space-x-3">
                    <Link href={links.Email}><ImMail className="w-6 h-6" /></Link>
                    <Link href={links.LinkedIn}><FaLinkedin className="w-6 h-6" /></Link>
                    <Link href={links.GitHub}><FaGithub className="w-6 h-6" /></Link>
                    <Link href={links.Resume}><IoDocumentText className="w-6 h-6" /></Link>
                </div>

            </div>
        </footer>
    )
}

export default Footer;