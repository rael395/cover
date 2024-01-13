'use client';
import React from 'react';
import { motion } from 'framer-motion';

const aboutContent = {
    heading: {
        title: "Your One-Stop Solution for all your insurance needs",
        subTitle: "About Us",
    },

};


const Hero = ({className, title, subTitle }: {className: any, title: any, subTitle: any}) => {
    if (title) {title=title;} else {title = aboutContent.heading.title}
    if (subTitle) {subTitle=subTitle;} else {subTitle = aboutContent.heading.subTitle}
  return (
    <section className={`${className}`}>
    <div className='lg:flex w-full lg:w-10/12 mx-auto items-center
    justify-between'>
        <div className='text-center lg:max-w-3xl mx-auto'>
            {subTitle && (
                <motion.span 
                initial={{opacity: 0, y:20 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.03,
                        duration: 0.5
                    }
                }}
                viewport={{ once: true }}
                className="inline-block z-10 py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-primary before:left-0 before:top-0 before:bottom-0 before:z-[-1]"
                data-aos="fade-up"
                data-aos-delay="0"> 
                { subTitle} 
                </motion.span>
            )}
            {title && (
                <motion.h1
                initial={{opacity: 0, y:20 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.06,
                        duration: 0.5
                    }
                }}
                viewport={{ once: true }}
                className='text-3xl sm:text-4xl md:text-5xl'
                >
                    {title}
                </motion.h1>
            )}
        </div> 
    </div>
    </section>
  )
}

export default Hero