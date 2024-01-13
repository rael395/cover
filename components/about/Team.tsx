'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BiLogoLinkedinSquare, BiLogoFacebookCircle } from "react-icons/bi";


const teamContent ={
    heading: {
        title: "Introducing our Exceptional Team",
        subTitle: "Meet our Team",
        description: " Our team is a true embodiment of customer service. From the moment you walk in , we treat you with the utmost care and attention because we care about what matters most to you.",
    },
    team: [
        {
            image: "/images/team-1-min.jpg",
            name: "Martha Syamutondo",
            role: " Founder and CEO",
            linkedin: "https://linkedin.com",
            facebook: "https://facebook.com",
        },
        {
            image: "/images/team-2-min.jpg",
            name: "Israel Muyoba",
            role: "Head of IT",
            linkedin: "https://linkedin.com",
            facebook: "https://facebook.com",
        },
        {
            image: "/images/team-7-min.jpg",
            name: "Stella",
            role: "Sales Agent",
            linkedin: "https://linkedin.com",
            facebook: "https://facebook.com",
        },
        {
            image: "/images/contact-3.jpg",
            name: "Mutinta",
            role: "Sales Agent",
            linkedin: "https://linkedin.com",
            facebook: "https://facebook.com",
        },
        {
            image: "/images/team-8-min.jpg",
            name: "Bertha",
            role: "Sales Agent",
            linkedin: "https://linkedin.com",
            facebook: "https://facebook.com",
        },
        {
            image: "/images/team-6-min.jpg",
            name: "Lizzy",
            role: "Sales Agent",
            linkedin: "https://linkedin.com",
            facebook: "https://facebook.com",
        },
        
    ],
};

const Team = ({className }: {className: any}) => {

    return (
        <section className={`${className}`}>
            <div className='container px-4 mx-auto'>
                <div className='lg:flex justify-center mb-20 lg:mb-36'>
                    <div className='w-full lg:w-8/12 lg:flex gap-7 items-center'>
                        <div className='lg:w-7/12 mb-5 lg: mb-0'>
                            {teamContent.heading.subTitle && (

                                <motion.span
                                initial={{opacity:0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y:0,
                                    transition: {
                                        delay: 0.2,
                                        duration: 0.0,
                                    },
                                }}
                                viewport={{once: true}}
                                className="inline-block z-10 py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-primary before:left-0 before:top-0 before:bottom-0 before:z-[-1]"
                                data-aos="fade-up"
                                data-aos-delay="0"
                                >
                                    {teamContent.heading.subTitle}
                                </motion.span>
                            )}

                            {teamContent.heading.title && (

                            <motion.h2
                            initial={{opacity:0, y: 10 }}
                            whileInView={{
                                opacity: 1,
                                y:0,
                                transition: {
                                    delay: 0.5,
                                    duration: 0.3,
                                },
                            }}
                            viewport={{once: true}}
                            className='text-2xl lg:text-4xl'
                            >
                                {teamContent.heading.title}
                            </motion.h2>
                            )}
                        </div>
                        <div className='lg:w-5/12 self-end'>
                        {teamContent.heading.description && (

                            <motion.p
                            initial={{opacity:0, y: 10 }}
                            whileInView={{
                                opacity: 1,
                                y:0,
                                transition: {
                                    delay: 0.5,
                                    duration: 0.6,
                                },
                            }}
                            viewport={{once: true}}
                            className='text-gray-500'
                            >
                                {teamContent.heading.description}
                            </motion.p>
                            )}

                        </div>
                    </div>
                </div>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                 gap-7 lg:w-10/12 mx-auto'>
                    {teamContent.team.map((person, idx) => {
                        idx*= 0.2;
                        return (
                            <motion.div
                            key={person.name}
                            className='bg-white relative overflow-hidden'
                            initial={{opacity:0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y:0,
                                transition: {
                                    delay: idx,
                                    duration: 0.3,
                                }
                            }}
                            viewport={{once: true}}
                            >
                              <Link href="#">
                              <Image 
                              src={person.image}
                              width={300}
                              height={300}
                              className='object-cover object-center w-full !max-h-full !max-w-full 
                              duration-300 transition-all ease-in-out group-hover:scale-[1.05]'
                              alt='Image'
                              />  
                              </Link> 
                              <div className='p-8'>
                                <h3 className='mb-0.5'>{person.name}</h3>
                                <p className='text-gray-500 uppercase text-[12px] tracking-[1px] mb-4'>{person.role}</p>
                                <div>
                                    {person.facebook && (
                                        <Link
                                        href={person.facebook}
                                        className='duration-300 transition-all ease-in-out hover:opacity-30'
                                        >
                                        <BiLogoFacebookCircle className='text-lg'/>
                                        </Link>
                                    )}
                                    {person.linkedin && (
                                        <Link
                                        href={person.linkedin}
                                        className='duration-300 transition-all ease-in-out hover:opacity-30'
                                        >
                                        <BiLogoLinkedinSquare className='text-lg'/>
                                        </Link>
                                    )}
                                </div>
                              </div>
                            </motion.div>
                        );
                    })}
                 </div>
            </div>
        </section>
    );
};
export default Team;