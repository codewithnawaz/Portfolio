import React from 'react'
import { Card, CardHeader } from './ui/card'
import { Link2Icon } from 'lucide-react'
import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
    return (
        <Card className="group overflow-hidden relative">
            <CardHeader>
                <div className='relative w-full h-[250px] flex items-center justify-center
                  xl:bg-[110%] xl:bg-no-repeat overflow-hidden bg-pink-100' >
                    <img src={project.img} alt=""
                        className='absolute bottom-0 shadow-2xl h-full'
                         priority
                    />
                    <div>
                        <a href={project.link} target="_blank" className='bg-slate-700 w-[54px]
                        h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0
                        group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'>
                    <Link2Icon className='text-white' /></a>
                    </div>
                </div>
            </CardHeader>
            <div className='h-full px-8 py-6'>
                <h4 className='text-2xl mb-1 font-semibold'>{project.title}</h4>
                <p className='text-muted-forground text-md'>{project.desc.substring(0,120)+"..read more"}</p>
            </div>
        </Card>
    )
}

export default ProjectCard