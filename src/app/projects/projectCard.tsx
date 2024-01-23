import Avatar from "@mui/joy/Avatar";
import Divider from "@mui/joy/Divider";
import Link from "next/link";
import ProjectTag from "./projectTag";
import { IconType } from "react-icons";


interface ProjectCardProps {
    title: string;
    date: string;
    tag?: 'personal project' | 'school club' | 'hackathon' | 'school' | 'hackathon winner';
    role: string;
    description: string[];
    image: string;
    icons?: IconType[];
    link: string
}


export const ProjectCard = ({ title, date, tag, description, image, icons, role, link }: ProjectCardProps) => {


    return (
        <div className='p-4 rounded-xl border-2 bg-white flex flex-col space-y-2'>


            <div className='flex flex-row justify-between'>
                <div className='flex flex-col'>
                    <p className='font-bold text-xl'>{title}</p>
                    <p className='text-xs font-light'>{date}</p>
                    {tag && <ProjectTag tag={tag} />}
                </div>


                <img src={image} className='w-16 object-cover' />

            </div>

            <Divider />

            {icons &&
                <div className='flex flex-row space-x-2'>
                    {icons.map((Icon, index) => {
                        return (
                            <Icon key={index} className='w-6 h-6' />
                        )

                    }
                    )}
                </div>
            }

            <p className='font-bold'>{role}</p>

            {description.map((paragraph, index) => {
                return (
                    <p key={index}>{paragraph}</p>
                )
            })}


            <Link href={link}>
                <p className='text-slate-500 text-sm hover:underline'> Learn More</p>
            </Link>

        </div>
    )
}

export default ProjectCard