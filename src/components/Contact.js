import React from 'react'

function Contact() {
    return (
        <section id='contact'>
            <div className='container mx-auto ' >
                <div className='grid xl:grid-cols-2 xl:h-[480px] mb-10 xl:mb-24 text-center xl:text-left '>
                    <div className='flex flex-col justify-center items-center xl:items-start '>
                        <div className='flex items-center gap-x-4 text-primary text-lg mb-4 justify-center xl:text-left xl:justify-start'>
                            <span className='w-[30px] h-[2px] bg-primary '></span>
                            <div>Hello Everyone</div>
                        </div>
                        <h1 className='text-6xl font-bold max-w-md mb-8'>Let's Work Together</h1>
                        <p className='subtitle max-w-[400px]'>Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Eveniet unde enim, odio nobis voluptates distinctio.</p>
                    </div>
                    <div className='flex flex-col justify-center item-center mt-10 xl:w-[380px] mx-auto '>
                        <form>
                            <input className='input' type="text" placeholder='Name' />
                            <input className='input' type="email" placeholder='Email' />
                            <textarea className='text-area' name="Message" id="" cols="30" rows="8" placeholder='Messaage'></textarea>
                            <button className='bg-primary p-2 rounded-xl flex mx-auto text-white font-semibold'>Let's Talk</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact