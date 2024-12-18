"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si'

// about data
const about = {
    title: "About me",
    description:"I’m dedicated to growing and excited to learn new things. I’m open to taking on any " +
        "challenges and enjoy working with others to achieve common goals. My strong problem-solving abilities, " +
        "attention to detail, and adaptability make me a valuable asset to any team. I believe in leveraging my skills " +
        "to contribute positively while learning from every opportunity.",
    info: [
        {
            fieldName:"Name",
            fieldValue:"Vladimir Ursatii"
        },
        {
            fieldName:"Phone",
            fieldValue:"(+373) 68184788"
        },
        {
            fieldName:"Experience",
            fieldValue:"1+ Year"
        },
        {
            fieldName:"Email",
            fieldValue:"ursatiivladimir@gmail.com"
        },
        {
            fieldName:"Freelance",
            fieldValue:"Available"
        },
        {
            fieldName:"Languages",
            fieldValue:"Russian, English, Romanian"
        },
    ]
}
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: "I’ve worked across various domains, gaining valuable insights and skills. My diverse background " +
        "helps me approach challenges with a fresh perspective, ensuring creative and effective solutions.",
    items: [
        {
            company: "Foc de Artficii",
            position: "Pyrotechnician",
            duration: " 2018 - 2023"
        },
        {
            company: "NVGroup SRL",
            position: "Front-end Developer",
            duration: "Feb. - Apr. 2022"
        },
        {
            company: "Crowd Marketing SRL",
            position: "SEO content-manager",
            duration: "Sep. - Dec. 2022"
        },
        {
            company: "MetaLabs",
            position: "Game designer",
            duration: "Dec. 2023 - Apr. 2024"
        },

    ]
}
const education = {
    icon: '/assets/resume/badge.svg',
    title: 'My education',
    description: "I graduated from university with a solid foundation in development. I also completed a bootcamp that" +
        " enhanced my practical skills. Currently, I’m taking online courses to continually expand my knowledge and" +
        " stay updated with industry trends.",
    items: [
        {
            institution: "Technical University of Moldova",
            degree: "Engineering",
            duration: "2019 - 2023"
        },
        {
            institution: "Technical University of Moldova",
            degree: "C++ BOOTCAMP",
            duration: "Dec. 2021"
        },
        {
            institution: "Online Platform UDEMY",
            degree: "Javascript + React",
            duration: " 2024 - Present"
        },


    ]
}
const skills = {
    title: 'My skills',
    description: "I’m proficient in various technologies that help me create effective web solutions. My passion" +
        " for learning drives me to continually enhance my skill set.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "css 3"
        },
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaReact />,
            name: "react.js"
        },
        // {
        //     icon: <SiNextdotjs />,
        //     name: "next.js"
        // },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css"
        },
        // {
        //     icon: <FaNodeJs />,
        //     name: "node.js"
        // },
        {
            icon: <FaFigma />,
            name: "figma"
        },
    ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import {ScrollArea} from "@/components/ui/scroll-area"
import {motion} from "framer-motion"

const Resume = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px] items-center xl:items-start">
                    <TabsList className="flex flex-col w-full xl:mx-0 max-w-[380px] gap-6 justify-center">
                        <TabsTrigger value="experience">
                            Experience
                        </TabsTrigger>
                        <TabsTrigger value="education">
                            Education
                        </TabsTrigger>
                        <TabsTrigger value="skills">
                            Skills
                        </TabsTrigger>
                        <TabsTrigger value="about">
                            About me
                        </TabsTrigger>
                    </TabsList>
                    {/*content*/}
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col xl:text-left gap-[30px] text-center">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-4 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-1 box-content">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col xl:text-left gap-[30px] text-center">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    className="bg-[#232329] h-[184px] py-4 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-1 box-content">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize font-semibold">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                    </div>

                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;