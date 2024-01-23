'use client';
import { CldImage } from 'next-cloudinary';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { allServices } from '.contentlayer/generated';


import { motion } from 'framer-motion';
import {getMDXComponent} from 'next-contentlayer/hooks';
import ServiceCard from '@/components/services/ServiceCard';




const ServiceContent: React.FC<{ service: any }> = ({ service }) => {
    const services = allServices.sort((a, b) => a.title.localeCompare(b.title));
  
    let MDXContent: React.FC | null = null;
  
    if (!services) return null;
  
    if (!service) {
      console.log('service not found');
    } else {
        MDXContent = getMDXComponent(service.body.code) as React.FC;
    }
  return (
    <motion.div
    initial={{ opacity: 0, y:20 }}
    whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5},
    }}
    viewport={{once: true}}
    className='pt-4 pb-20 lg:py-44 container px-4 mx-auto'
    >
        <div className='mx-auto max-w-4xl'>
            <div className='text-center mb-16 max-w-4xl mx-auto'>
                <h1 className='text-slate-900 text-center text-4xl/none lg:text-6xl/none
                font-medium' >{service.title}</h1>
                <p className='text-slate-500 mt-10' >
                    <span className='inline-flex space-x-3' >
                    <span> {service.category} </span>
                    </span>
                    
                </p>
            </div>

            <div className='mb-16' >
                <CldImage src={service.image} width={1065} height={644}  alt="image"
                className='object-cover object-top'
                />
            </div>

            <article className='prose mx-auto max-w-2xl' >
                
            {MDXContent && <MDXContent />}
            </article>
        </div>

        {/*More services */}
        <div className='max-w-4xl mx-auto mt-20 lg:mt-32' >
            <h2 className='text-2xl text-gray-700 mb-10' >More Services</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
                {services.filter((a) => service.title !== a.title).map((item, idx) => {
                    if (idx > 2 ) return null;
                    return <ServiceCard key={idx} index={idx} service={item} />
                })}
            </div>
            <div className='flex justify-center mt-10' >
                <Link href="/services" className='transition-all duration-300 ease-in-out 
                text-[11.5px] tracking-[2px] font-bold uppercase bg-primary py-4 px-5 text-white hover:bg-[#442359]
                hover:text-white hover:shadow-2xl' >View All Services</Link>
                
            </div>
        </div>
    </motion.div>
  )
}

export default ServiceContent