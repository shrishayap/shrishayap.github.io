import Image from "next/image";
import Link from "next/link";

import HomeNavbar from "@/components/homeNavbar";

import { ImMail } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

import metadata from "@/../public/metadata.json";
import bgImage from "@/../public/hero_bg.jpg";

export default function Home() {

  const links = metadata.Links;

  return (
    <main>
      <div className="relative h-screen overflow-hidden">

        <Image
          src={bgImage}
          alt="Overlooking Humpback Rocks in Central Virginia"
          className="object-cover w-full h-full brightness-[0.70]"
        />

        <div className='absolute top-0 w-full flex justify-center'>
          <div className='w-full max-w-[1200px]'>
            <HomeNavbar />
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-4 text-center">

          <p className='font-serif text-6xl text-white font-bold'>Shrisha Yapalparvi</p>
          <p className='text-xl text-white font-bold'>Computer Engineering Senior at UVA</p>

          <div className='flex flex-row space-x-2 self-center'>
            <Link href={links.Email}><ImMail className="w-8 h-8 text-white" /></Link>
            <Link href={links.LinkedIn}><FaLinkedin className="w-8 h-8 text-white" /></Link>
            <Link href={links.GitHub}><FaGithub className="w-8 h-8 text-white" /></Link>
            <Link href={links.Resume}><IoDocumentText className="w-8 h-8 text-white" /></Link>
          </div>

        </div>

        <div className='absolute bottom-4 w-full flex justify-center'>
          <p className='text-stone-200 text-center text-xs font-light'>Overlooking Humpback Rocks in Central Virginia</p>
        </div>

      </div>
    </main>
  );
}
