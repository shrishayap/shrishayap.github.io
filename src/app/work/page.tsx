import Footer from "@/components/footer"
import NavBar from "@/components/navbar"
import ProjectCard from "@/app/projects/projectCard"

import { FaPython } from "react-icons/fa6";
import { IoGitBranch } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { SiPytorch } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiVercel } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";



export function Page() {

    return (
        <div className='flex flex-col'>
            <div className='flex justify-center border-b-2'>
                <div className='w-full max-w-[1200px]'>
                    <NavBar />
                </div>
            </div>

            <div className='flex justify-center bg-slate-50'>

                <div className='w-full max-w-[1200px] p-4 space-y-4 flex flex-col'>

                    <h1 className='text-4xl font-extrabold'>Work and Research Experience</h1>


                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                        <ProjectCard
                            title="Yext"
                            date="May 2023 - July 2023"
                            role='Full Stack Software Engineering Intern'
                            description={[
                                "Revamped and optimized a deployment status page, reducing space by 40% while enhancing relevant data/metrics by 35%. The implementation involved setting up a backend using Java and Go, making AJAX requests, and building the frontend with React.",
                                "Introduced Lexical Rich Text and Markdown support with thorough unit testing, enabling increased customization of web pages. This feature was successfully deployed to millions of end users, enhancing the user experience.",
                                "Enhanced the Command Line Interface (CLI) for auto-authentication, resulting in a 38% reduction in login errors and a faster startup process. Additionally, constructed a Snowflake SQL table with a Go backend to log and backfill usage data, allowing for the analysis of user behavior and identification of high compute resource users, thus optimizing server efficiency."
                            ]}
                            image='/yext.png'
                            link='https://www.yext.com'
                            icons={[IoGitBranch, IoLogoJavascript, FaReact, TbFileTypeSql, SiTypescript, FaGolang, FaRegSnowflake]}
                        />

                        <ProjectCard
                            title="Hinkapin Health"
                            date="November 2023 - Present"
                            role='Sole Full Stack Developer'
                            description={[
                                "As the sole developer for Hinkapin Health, a medical care provider in the greater Dallas area, I designed and implemented a user-friendly website. The platform aimed to simplify patient access to a transparent database containing information on doctors, procedures, and prices.",
                                "Utilizing Firebase Firestore, I efficiently stored data on doctors, procedures, and pricing. Cloud storage (Google's blob storage) was used to store images. For the frontend, I employed React with NextJS as the framework, ensuring a responsive and seamless user experience. Backend computations, including database updates, were handled through Google Cloud Serverless functions (Cloud functions), contributing to the scalability of the platform.",
                                "The result is a scalable and accessible platform empowering customers to easily navigate and find the doctors and procedures they need for quality healthcare at Hinkapin Health."
                            ]}
                            image='/hinkapin-health.png'
                            link='https://hinkapin-health.vercel.app'
                            icons={[FaReact, IoLogoJavascript, SiTypescript, IoLogoFirebase, TbBrandNextjs, SiVercel, SiGooglecloud]}
                        />

                        <ProjectCard
                            title="UVA Link Lab"
                            date="August 2023 - December 2023"
                            role='Autonomous Vehicle Research Assistant'
                            description={[
                                "Implemented an LSTM (Long Short-Term Memory) model in PyTorch to assess AV (Autonomous Vehicle) motion planning systems' vulnerability to attacks. Analyzed the model outputs to identify markers indicative of security breaches in the motion planning systems.",
                                "Conducted an in-depth analysis of various image attack defenses and their effects, leading to the formulation of recommendations for image filtering strategies. This work aimed to enhance the resilience of autonomous vehicle systems against potential security threats."
                            ]}
                            image='/uvaLogo.png'
                            link='https://engineering.virginia.edu/link-lab'
                            icons={[FaPython, SiPytorch]}
                        />

                        <ProjectCard
                            title="UVA Link Lab"
                            date="June 2022 - May 2023"
                            role='Autonomous Surgery Research Assistant'
                            description={[
                                "Led the development of a data collection software at UVA Link Lab, addressing a critical obstacle in autonomous surgical systems research. The software allowed users to input settings, facilitating the integration of diverse data sources—Video (OpenCV), Kinematic data (from NDI Trickster), Smart Watch data, and Intel Camera data—into a unified platform for later analysis.",
                                "The platform streamlined data collection across 5+ pipelines, reducing setup time by an impressive 67%. Subsequently, I optimized data post-processing using Python and OpenCV, resulting in a remarkable 43% reduction in processing time. This initiative significantly enhanced the efficiency of data collection and analysis for Professor Alemzadeh's team at the forefront of cyber autonomous research in autonomous surgical systems."
                            ]}
                            image='/uvaLogo.png'
                            link='https://engineering.virginia.edu/link-lab'
                            icons={[FaPython, IoLogoJavascript, FaReact, CgCPlusPlus]}
                        />





                    </div>




                </div>
            </div>

            <div className='flex justify-center border-t-2'>
                <div className='w-full max-w-[1200px]'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Page