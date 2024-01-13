'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {allServices} from '.contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';

const serviceContent = {
    heading: {
        title: "Our Services",
        subTitle: "What We Offer",
        description: "",
    }
}

const ServiceCard = ({ index, service }: { index: number; service: any }) => {
  index *= 0.05;
    return (
        <motion.div 
                initial={{opacity: 0, y: 20 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: index,
                        duration: 0.5,
                                 }
                        }}
                viewport={{ once: true }}
             className='bg-white relative overflow-hidden group'>
            <Link href={service.url} className='relative block overflow-hidden'>
            <Image src={service.image} alt={service.title} width={1064} height={644}
            className='object-cover object-center h-[200px] duration-300 transition-all ease-in-out group-hover:scale-[1.05]' />
            </Link>
            <div className='p-8'>
                <p className='text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]'>
                   {service.author}

                </p>
                <h3 className='mb-4 '>
                    <Link href={service.url} className='text-lg leading-none'>
                    {service.title}
                    </Link>

                </h3>
                <p>
                    <Link href={service.url} className='text-[12px] tracking-[2px] uppercase
                    border-b-2 pb-2 inline-block border-primary'>
                        Read More
                    </Link>
                </p>
            </div>

        </motion.div>
    );
}


const Services = ({className}: {className: any}) => {

   const services = allServices.sort((a: { title: string; }, b: { title: any; }) =>  a.title.localeCompare(b.title)); 
  return (
    <section className={`${className}`}>
        <div className='container px-4 mx-auto'>

            <div className='lg:flex justify-center mb-24'>
                <div className='w-full lg:w-8/12 lg:flex gap-0 items-center'>
                    <div className='lg:w-7/12'>
                    {serviceContent.heading.subTitle && (
                        <motion.span 
                        initial={{opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 0.05,
                                duration: 0.5,
                            }
                        }}
                        viewport={{ once: true }}
                        className="inline-block z-10 py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-primary before:left-0 before:top-0 before:bottom-0 before:z-[-1]"
                        data-aos="fade-up"
                        data-aos-delay="0"> 
                        {serviceContent.heading.subTitle} 
                        </motion.span>
                    )}

                    {serviceContent.heading.title && (
                        <motion.h2 
                        initial={{opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 0.1,
                                duration: 0.5,
                            }
                        }}
                        viewport={{ once: true }}
                        className='text-2xl lg:text-4xl mb-4 lg:mb-0'>
                        {serviceContent.heading.title}
                        </motion.h2>
                    )}
                        
                    </div>

                    <div className='lg:w-5/12 self-end'>
                        <motion.p 
                        initial={{opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 0.15,
                                duration: 0.5,
                            }
                        }}
                        viewport={{ once: true }}
                        className='text-gray-500'>
                            {serviceContent.heading.description}
                        </motion.p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5
            w-full lg:w-10/12 mx-auto'>
               {services.slice(0, 3).map((service: any, idx: any) => (
                <ServiceCard key={idx} index={idx} service={service}/>
               ))} 
            </div>
            <div className='flex justify-center mt-10' >
                <Link href="/services" className='transition-all duration-300 ease-in-out 
                text-[11.5px] tracking-[2px] font-bold uppercase bg-primary py-4 px-5 text-white hover:bg-[#442359]
                hover:text-white hover:shadow-2xl' >View All Services</Link>
                
            </div>
        </div>
    </section>
  )
}

export default Services


