import Footer from "@/components/footer"
import NavBar from "@/components/navbar"
import ProjectCard from "./projectCard"

import { FaPython } from "react-icons/fa6";
import { IoGitBranch } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPytorch } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTwilio } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiKeras } from "react-icons/si";
import { SiRos } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { SiGooglebard } from "react-icons/si";



export default function Page() {

    return (
        <div className='flex flex-col'>
            <div className='flex justify-center border-b-2'>
                <div className='w-full max-w-[1200px]'>
                    <NavBar />
                </div>
            </div>

            <div className='flex justify-center bg-slate-50'>

                <div className='w-full max-w-[1200px] p-4 space-y-4 flex flex-col'>

                    <h1 className='text-4xl font-extrabold'>Projects</h1>


                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                        <ProjectCard
                            title="Project Code"
                            date="January 2022 - Present"
                            tag="school club" role='Co-founder'
                            description={[
                                'Established and expanded a UVA club with over 50 members, focusing on semester-long tech projects to simulate real-world software development life cycles. Projects, such as a stock market bot, an online version of the board game Strategy, and a music translation algorithm, provided practical experience for members of varying skill levels.',
                                'As a co-founder, I managed communication with members and organized events, honing my strong communication skills. Additionally, I oversaw onboarding and education for new members, covering basics like git and programming fundamentals to advanced topics like U-Nets, CNNs, and ML fundamentals. Currently, our ongoing project involves developing a model for pinpointing and diagnosing diseases from chest X-rays.'
                            ]}
                            image='/uvaLogo.png'
                            link='/projects'
                            icons={[FaPython, IoGitBranch, IoLogoJavascript, SiPytorch]}
                        />

                        <ProjectCard
                            title="Budget Buddy"
                            date="April 2023"
                            tag="hackathon winner" role='Developer'
                            description={[
                                "Frustrated by budgeting solutions unable to adapt to modern spending patterns, we developed a proactive budgeting tool. Users would register (implemented via Firebase Authentication) and link their financial accounts with Plaid. By leveraging Plaid's API, we retrieved and stored transactional data in Firebase's Firestore Database, enabling users to engage with a visual dashboard.",
                                "To curb spending, we integrated Twilio's API to create a 'text buddy.' Users could text this buddy to assess if a potential purchase aligned with their financial goals. Employing an LLM (OpenAI's GPT API), we categorized the text and provided users with responses encouraging more responsible spending."
                            ]}
                            image='/budget-buddy-logo.png'
                            link='https://devpost.com/software/budgetbuddy-wz0mh2'
                            icons={[FaPython, SiFlask, IoLogoJavascript, FaReact, SiTwilio, RiOpenaiFill, IoLogoFirebase]}
                        />

                        <ProjectCard
                            title="Receipt Reader"
                            date="January 2024"
                            tag="personal project" role='Developer'
                            description={[
                                "Tired of the manual effort of calculating individual shares after a dinner, I developed a web app. It takes a photo of a receipt as input, extracts item details and costs, and allows users to assign items or percentages for splitting. The app automates the calculation, including tax and tip.",
                                "For frontend development, I utilized ReactJS, and implemented a Flask and NodeJS backend with Google Gemini Visual Question Answering (VQA) API for receipt parsing. Although I initially trained my OCR with Keras, I opted for Google Gemini API for enhanced stability."
                            ]}
                            image='https://images.unsplash.com/photo-1545941962-1b6654eb8072?q=80&w=3164&auto=format&fit=crop'
                            link='https://splitthereceipt.vercel.app'
                            icons={[FaPython, SiFlask, IoLogoJavascript, FaReact, SiKeras, SiGooglebard]}
                        />

                        <ProjectCard
                            title="F 1/10"
                            date="August 2023 - December 2023"
                            tag="school" role='Developer'
                            description={[
                                "F 1/10 is an international program that races 1/10th model race cars autonomously. Utilizing a car equipped with LIDAR as the primary sensor, I and a team of 4 others implemented various driving and racing techniques, such as follow the gap (FTG), pure pursuit, and wall following.",
                                "Throughout the process, I acquired proficiency in using ROS for car control and gained insights into SLAM (Simultaneous Localization and Mapping), including hands-on experience with ROS Cartographer. Our efforts resulted in a commendable 2nd place finish in both head-to-head and time trials at our local school competition."
                            ]}
                            image='https://cdn.pixabay.com/photo/2020/09/21/00/51/toy-5588636_1280.jpg'
                            link='https://f1tenth.org'
                            icons={[FaPython, SiRos]}
                        />

                        <ProjectCard
                            title="Willow Study Tool"
                            date="April 2022"
                            tag="hackathon" role='Developer'
                            description={[
                                "As students facing the challenges of digital distractions, we addressed the prevalent issue of procrastination in the era where work and entertainment share the same devices. Recognizing the difficulty in maintaining personal accountability, especially during times of social distancing, we sought a solution. Our response was the creation of Willow, a web app that connects users with friends for mutual accountability and integrates proven study techniques like the Pomodoro Timer.",
                                "Willow consists of a web extension and a web server. The extension, primarily built with JavaScript, records user sessions and employs listeners to monitor browser activity. It gamifies the Pomodoro technique, allowing users to select study 'missions' for XP and Credits. If unproductive use is detected, the extension blocks distracting websites and notifies the server, enabling friends to support each other. The web server, built in Python with Flask, facilitates gamification, live updates through Ajax, and stores user data in a SQL database, contributing to an effective tool combating procrastination."
                            ]}
                            image='https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=3173&auto=format&fit=crop'
                            link='https://devpost.com/software/willow-study-app'
                            icons={[FaPython, SiFlask, IoLogoJavascript, TbFileTypeSql]}
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

