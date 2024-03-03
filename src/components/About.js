import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Briefcase, GraduationCap, LocateIcon, LocateOffIcon, MailIcon, MapPin, PhoneCall, School, ShieldCheck, ShieldCheckIcon, User2 } from 'lucide-react';
import { LuCircle } from "react-icons/lu";


const personalData = [
    {
        icon: <User2 size={20} />,
        text: "Nawaz Usmani"
    },
    {
        icon: <PhoneCall size={20} />,
        text: "9718760907"
    },
    {
        icon: <MailIcon size={20} />,
        text: "nawazusmani321@gmail.com"
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Bachelors of Computer Applications"
    },
    {
        icon: <School size={20} />,
        text: "Jamia Hamdard University"
    },
    {
        icon: <MapPin size={20} />,
        text: "Delhi, India"
    },
]

const expData = [
    {
        title: "Experience",
        data: [
            {
                title: "Seoczar IT Services Pvt Ltd",
                company: "Digital Marketing Internship",
                year: "2022-2023"
            },
            {
                title: "Linear Web Development Pvt Ltd",
                company: "SEO Executive",
                year: "2023-Present"
            },
        ]
    },
    {
        title: "Certification",
        data: [
            {
                title: "Digital Marketing",
                company: "From Google",
                year: "2022-Present"
            },
            {
                title: "Complete Web Development",
                company: "From Udemy",
                year: "2023 - Present"
            }
        ]
    }

]

const skillData = [
    {
        title: "Skills",
        data: [
            {
                name: "Front-end Development",
            },
            {
                name: "HTML, CSS",
            },
            {
                name: "Javascript",
            },
            {
                name: "MongoDB",
            },
            {
                name: "Express",
            },
            {
                name: "React Js",
            },
            {
                name: "Node Js",
            }
        ]
    },
    {
        title: "tools",
        data: [
            {
                image: "./html.png",
            },
            {
                image: "./css.png",
            },
            {
                image: "./javaScript.png",
            },
            {
                image: "./mongo.png",
            },
            {
                image: "./express.png",
            },
            {
                image: "./react.png",
            },
            {
                image: "./node.png",
            },
        ]
    }
]
function About() {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }
    return (
        <section className='xl:h-[860px] pb-12 xl:py-24' >
            <div className='container mx-auto'id="about">
                <h2 className='section-title gap-2 mx-auto text-center mt-20 mb-8 xl:mb-16 md:mt-16'>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-primary'><path opacity=".05" d="M12.1398 3.88617C13.8553 4.94159 15 6.83701 15 9.00001C15 12.3137 12.3137 15 9.00002 15C6.84351 15 4.95296 13.8621 3.89569 12.1552L4.32076 11.8919C5.29069 13.4578 7.02376 14.5 9.00002 14.5C12.0376 14.5 14.5 12.0375 14.5 9.00001C14.5 7.01781 13.4516 5.28027 11.8778 4.31203L12.1398 3.88617Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path opacity=".2" d="M12.851 5.07321C13.8684 6.07106 14.5 7.46199 14.5 9C14.5 12.0375 12.0376 14.5 9.00004 14.5C7.46215 14.5 6.07132 13.8685 5.07349 12.8513L5.43043 12.5011C6.3381 13.4264 7.60186 14 9.00004 14C11.7614 14 14 11.7614 14 9C14 7.60171 13.4264 6.33786 12.5009 5.43017L12.851 5.07321Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path opacity=".35" d="M13.3022 6.45071C13.7455 7.19737 14 8.06935 14 9.00001C14 11.7614 11.7614 14 9.00002 14C8.04868 14 7.15868 13.7341 6.40118 13.2724L6.66142 12.8454C7.34275 13.2607 8.14306 13.5 9.00002 13.5C11.4853 13.5 13.5 11.4853 13.5 9.00001C13.5 8.16165 13.271 7.37754 12.8722 6.70599L13.3022 6.45071Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path opacity=".5" d="M13.3745 7.94022C13.4566 8.28031 13.5 8.63525 13.5 9.00001C13.5 11.4853 11.4853 13.5 9.00003 13.5C8.61104 13.5 8.23323 13.4506 7.87268 13.3576L7.99759 12.8734C8.31768 12.956 8.65353 13 9.00003 13C11.2091 13 13 11.2091 13 9.00001C13 8.67509 12.9613 8.35953 12.8884 8.05757L13.3745 7.94022Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path opacity=".65" d="M12.9155 9.82133C12.5898 11.3813 11.3562 12.6072 9.79205 12.9215L9.69354 12.4313C11.0613 12.1565 12.1413 11.0834 12.4261 9.71915L12.9155 9.82133Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M1.2771 7.50253C1.2771 4.06456 4.06413 1.27753 7.5021 1.27753C10.94 1.27753 13.7271 4.06456 13.7271 7.50253C13.7271 10.9405 10.94 13.7275 7.5021 13.7275C4.06413 13.7275 1.2771 10.9405 1.2771 7.50253ZM7.5021 2.22753C4.5888 2.22753 2.2271 4.58923 2.2271 7.50253C2.2271 10.4158 4.5888 12.7775 7.5021 12.7775C10.4154 12.7775 12.7771 10.4158 12.7771 7.50253C12.7771 4.58923 10.4154 2.22753 7.5021 2.22753Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    About me
                </h2>
                <div className='flex flex-col xl:flex-row'>
                    <div className="Image hidden xl:block flex-1 flex mx-auto items-center
                     justify-center">
                        <img className='h-[505px] w-full' src="about_us.gif" alt="" />
                    </div>
                    <div className="flex-1 ">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="experience">Experience</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                            </TabsList>
                            <div className='text-lg mt-6 xl:mt-10'>
                                <TabsContent value="personal">
                                    <div className='text-center xl:text-left'>
                                        <h2 className='h2 mb-4 '>Unmatched Service</h2>
                                        <p className='subtitle max-w-xl mx-auto xl:mx-0 mb-4'>I am a Mern Developer with passion of building user friendly and interactive websites. I have strong understanding of both front-end and back-end development. </p>
                                        <div className='grid xl:grid-cols-2 mb-10 gap-4'>
                                            {personalData.map((info, index) => {
                                                return <div className="flex items-center gap-x-3 mx-auto xl:mx-0" key={index}>
                                                    <div className='text-primary'>{info.icon}</div>
                                                    <div>{info.text}</div>
                                                </div>
                                            })}
                                        </div>
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-primary'>Language</div>
                                            <div className='border-b border-border'></div>
                                            <div>English, Hindi</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="experience">
                                    <div>
                                        <h2 className='h2 mb-8 text-center xl:text-left'>My Awesome Journey</h2>
                                        <div className='grid grid-cols-2 gap-y-8'>
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex items-center text-primary text-[22px] gap-x-2 mb-2'>
                                                    <Briefcase />
                                                    <h4 className='capitalized font-medium'>
                                                        {getData(expData, 'Experience').title}
                                                    </h4>
                                                </div>
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(expData, 'Experience').data.map((item, index) => {
                                                        const { title, company, year } = item;
                                                        return <div className="flex gap-x-8 group" key={index}>
                                                            <div className='h-[84px] w-[1px] bg-primary relative ml-2'>
                                                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                            </div>
                                                            <div>
                                                                <div className='font-semibold text-xl leading-none mb-4'>{title}</div>
                                                                <div className='text-lg leading-none text-muted-foreground mb-2'>{company}</div>
                                                                <div className='text-base font-medium'>{year}</div>
                                                            </div>
                                                        </div>
                                                    })}
                                                </div>
                                            </div>

                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex items-center text-primary text-[22px] gap-x-2 mb-2'>
                                                    <ShieldCheckIcon />
                                                    <h4 className='capitalized font-medium'>
                                                        {getData(expData, 'Certification').title}
                                                    </h4>
                                                </div>
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(expData, 'Certification').data.map((item, index) => {
                                                        const { title, company, year } = item;
                                                        return <div className="flex gap-x-8 group" key={index}>
                                                            <div className='h-[84px] w-[1px] bg-primary relative ml-2'>
                                                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                            </div>
                                                            <div>
                                                                <div className='font-semibold text-xl leading-none mb-4'>{title}</div>
                                                                <div className='text-lg leading-none text-muted-foreground mb-2'>{company}</div>
                                                                <div className='text-base font-medium'>{year}</div>
                                                            </div>
                                                        </div>
                                                    })}
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </TabsContent>
                                <TabsContent value="skills">
                                    <div className=' text-center xl:text-left'>
                                        <h2 className='h2 mb-8'>What I Use Everyday</h2>
                                        <div className='mb-8'>
                                            <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                            <div className='border-b border-border mb-4'></div>
                                            <div>
                                                {getData(skillData, "Skills").data.map((skill, index) => {
                                                    return <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'
                                                        key={index}>
                                                        <div className='font-medium'>{skill.name}</div>
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                                            <div className='border-b border-border mb-4'></div>
                                            <div className='flex gap-x-5 justify-center xl:justify-start'>
                                                {getData(skillData, "tools").data.map((item, index) => {
                                                    const {image} = item;
                                                    return <div key={index}>
                                                        <img src={image} height={30} width={30}/>
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
