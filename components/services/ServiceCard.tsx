'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';


const ServiceCard = ({service, index}:{service: any, index: number}) => {
    index*= 0.05;
  return (
    <>
    <motion.div
    initial={{ opacity:0, y: 20}}
    whileInView={{
        opacity: 1,
        y: 0,
        transition: {delay: index, duration: 0.3},
    }}
    viewport={{once: true}}
    className={`relative overflow-hidden`}
    >
       <Link
       href={service.url} className='relative block overflow-hidden group'
       >
        <Image 
        src={service.image}
        alt={service.title}
        width={1064}
        height={644}
        className='object-cover object-center h-[400px] !max-w-full
       duration-300 transition-all ease-in-out group-hover:scale-[1.05]'
        />
        <div className='py-8 px-2' >
            <span className='block mb-1 text-gray-500' >{service.category}</span>
            <h3 className='mb-4' >
                <Link href={service.url} className='text-2xl leading-none' > {service.title} </Link>
            </h3> 
        </div>
       </Link> 
    </motion.div>
    </>
  )
}

export default ServiceCard;