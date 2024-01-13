'use client';
import React, {useRef} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BiArch, BiHardHat, BiSolidUser } from 'react-icons/bi';

import Image from 'next/image';

const  whyUsContent = {
    heading: {
        title: "Our Commitment to you",
        subTitle: "Why Choose Us",

    },
    whyusItems: [
        {
            icon: BiHardHat,
            title: "Personalized Experience",
            description: " At Cover Effect, we understand that you are not just a policy number. We provide an intimate, personalized experience. Your needs are our top priority, and our team is dedicated to ensuring your concerns are addressed efficiently and on time. Experience the difference of a service that truly understands and caters to you. ",
        },
        {
            icon: BiArch,
            title: "Flexible Payment Plans - Tailored to You",
            description: " Worried about rigid payment structures? We've got you covered.  We understand that flexibility matters. Benefit from our tailored payment plans designed to fit your budget, making your insurance experience not only comprehensive but also convenient. ",
        },
        {
            icon: BiSolidUser,
            title: "One-Stop Solution for All Hollard Offerings",
            description: " With Cover Effect, you get the best of both worlds under one roof. As an agent of Hollard, we bring together all the diverse offerings from Hollard, making it seamless for you to access the complete suite of insurance solutions without navigating different units. It's convenience at its best. ",
        },

    ],
};



const Whyus = ({className}:{className: any}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const img1 = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  return (
    <section className={`${className}`} ref={ref}>
        <div className='container px-4 mx-auto'>
            <div className='text-center lg:max-w-xl mx-auto mb-20 lg:mb-32'>
                {whyUsContent.heading.subTitle && (
                    <motion.span
                    initial={{opacity:0, y: 20 }}
                    whileInView={{
                        opacity: 1,
                        y:0,
                        transition: {
                            delay: 0.2,
                            duration: 0.5,
                        }
                    }}
                    viewport={{once: true}}
                    className="inline-block z-10 py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-primary before:left-0 before:top-0 before:bottom-0 before:z-[-1]"
                    data-aos="fade-up"
                    data-aos-delay="0">
                        {whyUsContent.heading.subTitle}
                    </motion.span>
                )}
                {whyUsContent.heading.title && (
                    <motion.h2
                    initial={{opacity:0, y: 10 }}
                    whileInView={{
                        opacity: 1,
                        y:0,
                        transition: {
                            delay: 0.3,
                            duration: 0.5,
                        }
                    }}
                    viewport={{once: true}}
                    className='text-2xl lg:text-4xl'>
                        {whyUsContent.heading.title}
                    </motion.h2>
                )}

            </div>
             
            <div className='lg:flex justify-center'>
                <div className='lg:w-8/12 lg:flex gap-20 items-start'>
                    <div className='mb-7 lg:w-6/12 lg:order-2'>
                        <motion.div 
                        initial={{opacity:0, x: 20 }}
                        whileInView={{
                            opacity: 1,
                            y:0,
                            transition: {
                                delay: 0.6,
                                duration: 0.5,
                            }
                        }}
                        viewport={{once: true}}
                        style={{y: img1 }}>
                            <Image 
                            src="/images/img-1.jpg"
                            className='object-cover !w-full h-[800px] lg:max-w-2xl
                            object-center'
                            width={400}
                            height={300}
                            alt="Image"
                            />
                        </motion.div>
                    </div>

                    <div className='lg:w-6/12'>
                        <motion.ul
                        initial={{opacity:0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y:0,
                            transition: {
                                delay: 0.9,
                                duration: 0.5,
                            }
                        }}
                        viewport={{once: true}}
                        >

                            
                            {whyUsContent.whyusItems.map((item, idx) => (
                                <li
                                className='flex space-x-4 items-start mb-7'
                                key={item.title}
                                >
                                    <span className='text-xl grow-0 flex-none inline-flex 
                                    justify-center items-center w-12 h-12 rounded-full relative
                                    bg-primary'>
                                        {<item.icon className='z-20 relative text-white'/>}

                                    </span>
                                    <div>
                                        <h3 className='text-gray-800 text-base mb-2'>
                                            {item.title}
                                        </h3>
                                        <p className='text-gray-500'>{item.description}</p>
                                    </div>
                                </li>
                            ))}


                        </motion.ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Whyus