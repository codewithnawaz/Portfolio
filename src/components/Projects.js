import React from 'react'
import { Button } from './ui/button'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectCard from './ProjectCard';

const projectData = [
    {
        img: "./bookStore1.png",
        title: "bookStore",
        desc: "This is an online bookreading platform which offers ample amount of books to read.It is made using Reactjs and it fetches  data from the RESTAPI which is easily available on google. It uses search functionality which helps in retrieving data from the API.",
        link: "https://codewithnawaz.github.io/bookStore/",
    },
    {
        img: "./e-com.png",
        title: "E-commerce (Front-End)",
        desc: "This Attractive and Responsive e-commerce frontend website is made using ReactJs with Redux for global state management and Tailwind css for responsive and eye caching UI",
        link: "https://codewithnawaz.github.io/shopify/",

    },
    {
        img: "./todo.png",
        title: "MERN TO-DO App",
        desc: "This is an full stack (MERN) Todo App, made to provide yourself with a list of your priorities in order to ensure that you don't forget anything and are able to effectively plan out your tasks so that they are all accomplished in the correct time frame.",
        link: "https://client-todo-cc3fbjkjd-nawazs-projects-3fa3d52f.vercel.app/",
    },

]
function Projects() {
    return (
        <section className='relative mb-12 xl:mb-20 mt-28 xl:mt-12 '>
            <div className='container mx-auto'>
                <div className=' mx-auto xl:mx-0 
            text-center xl:text-left mb-12  flex flex-col justify-center items-center '  id='project'>
                    <h2 className='section-title mb-4'>
                        <svg className='text-primary' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".05" d="M12.1398 3.88617C13.8553 4.94159 15 6.83701 15 9.00001C15 12.3137 12.3137 15 9.00002 15C6.84351 15 4.95296 13.8621 3.89569 12.1552L4.32076 11.8919C5.29069 13.4578 7.02376 14.5 9.00002 14.5C12.0376 14.5 14.5 12.0375 14.5 9.00001C14.5 7.01781 13.4516 5.28027 11.8778 4.31203L12.1398 3.88617Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path opacity=".2" d="M12.851 5.07321C13.8684 6.07106 14.5 7.46199 14.5 9C14.5 12.0375 12.0376 14.5 9.00004 14.5C7.46215 14.5 6.07132 13.8685 5.07349 12.8513L5.43043 12.5011C6.3381 13.4264 7.60186 14 9.00004 14C11.7614 14 14 11.7614 14 9C14 7.60171 13.4264 6.33786 12.5009 5.43017L12.851 5.07321Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path opacity=".35" d="M13.3022 6.45071C13.7455 7.19737 14 8.06935 14 9.00001C14 11.7614 11.7614 14 9.00002 14C8.04868 14 7.15868 13.7341 6.40118 13.2724L6.66142 12.8454C7.34275 13.2607 8.14306 13.5 9.00002 13.5C11.4853 13.5 13.5 11.4853 13.5 9.00001C13.5 8.16165 13.271 7.37754 12.8722 6.70599L13.3022 6.45071Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path opacity=".5" d="M13.3745 7.94022C13.4566 8.28031 13.5 8.63525 13.5 9.00001C13.5 11.4853 11.4853 13.5 9.00003 13.5C8.61104 13.5 8.23323 13.4506 7.87268 13.3576L7.99759 12.8734C8.31768 12.956 8.65353 13 9.00003 13C11.2091 13 13 11.2091 13 9.00001C13 8.67509 12.9613 8.35953 12.8884 8.05757L13.3745 7.94022Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path opacity=".65" d="M12.9155 9.82133C12.5898 11.3813 11.3562 12.6072 9.79205 12.9215L9.69354 12.4313C11.0613 12.1565 12.1413 11.0834 12.4261 9.71915L12.9155 9.82133Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M1.2771 7.50253C1.2771 4.06456 4.06413 1.27753 7.5021 1.27753C10.94 1.27753 13.7271 4.06456 13.7271 7.50253C13.7271 10.9405 10.94 13.7275 7.5021 13.7275C4.06413 13.7275 1.2771 10.9405 1.2771 7.50253ZM7.5021 2.22753C4.5888 2.22753 2.2271 4.58923 2.2271 7.50253C2.2271 10.4158 4.5888 12.7775 7.5021 12.7775C10.4154 12.7775 12.7771 10.4158 12.7771 7.50253C12.7771 4.58923 10.4154 2.22753 7.5021 2.22753Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        My Projects</h2>
                    {/* <p className='subtitle mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, eveniet.</p> */}
                </div>
                <div className='xl:max-w-full'>
                    <Swiper className='h-[480px]'
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2
                            }
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: 'true' }}>

                        {projectData.map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Projects