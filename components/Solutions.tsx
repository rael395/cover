"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import {motion} from 'framer-motion';
import CountUp from 'react-countup';

import { BiCheck } from "react-icons/bi";

const solutionContent = {
  text: {
    headingSubTitle: "Why us?",
    headingTitle:
      "Why choose Cover Effect?",
      description: " At Cover Effect it's about enhancing your insurance experience. Our partnership with Hollard ensures you receive top-notch service, a one-stop solution for all your insurance needs, and a commitment to transparency. Discover the difference of a personalized, efficient, and cost-effective insurance experience with Cover Effect. Your peace of mind is our priority.",
    
    features: [
      {
        title: " Personalized Experience",
        description: "At Cover Effect, we understand that you are not just a policy number. We provide an intimate, personalized experience. Your needs are our top priority, and our team is dedicated to ensuring your concerns are addressed efficiently and on time. Experience the difference of a service that truly understands and caters to you. ",
      },
      {
        title: "Flexible Payment Plans - Tailored to You",
        description: "Worried about rigid payment structures? We've got you covered.  We understand that flexibility matters. Benefit from our tailored payment plans designed to fit your budget, making your insurance experience not only comprehensive but also convenient. ",
      },
      {
        title: " No Extra Costs, Just Added Value:",
        description: "Concerned about hidden costs or mark-ups? Rest assured, our partnership with Hollard is designed to benefit you. There are no extra costs or hidden fees imposed on our clients. You receive the same comprehensive coverage and service, with the added advantage of our personalized touch. ",
      },
      {
        title: "One-Stop Solution for All Hollard Offerings",
        description: "With Cover Effect, you get the best of both worlds under one roof. As an agent of Hollard, we bring together all the diverse offerings from Hollard, making it seamless for you to access the complete suite of insurance solutions without navigating different units. It's convenience at its best. ",
      },
    ],
  },
  images: {
    img1: "/images/solution-img-2.jpg",
    img2: "/images/solution-img-3.jpg",
    img3: "/images/solution-img-6.jpg",
    img4: "/images/solution-img-7.jpg",
    img5: "/images/solution-img-5.jpg",
    img6: "/images/solution-img-1.jpg",
    
    
    
    
    
  },
  experience: {
    year: "15",
    text: "+",
    label: "years of experience",
  },
};

const Solutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  });
  return (
    <section className="pt-32 pb-32 bg-light overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="lg:flex space-x-2 justify-between">
          <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:content-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20  before:bg-white before:-bottom-20">
            <div className="flex gap-2 mb-48">
              <div className="flex flex-col space-y-2">
                <div>
                  <Image
                    src={solutionContent.images.img1}
                    width={626}
                    height={640}
                    className="object-cover h-full w-full rounded-lg"
                    alt="Raeltec.com"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <div className="w-4/12 flex">
                    <div className="ml-auto">
                      <div
                        className="bg-primary w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]"
                        data-aos="fade-in"
                        data-aos-delay="600"></div>
                    </div>
                  </div>

                  <div>
                    <Image
                      src={solutionContent.images.img3}
                      width={626}
                      height={640}
                      className="object-cover h-full w-full rounded-lg"
                      alt="Raeltec.com"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    />
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="mt-auto">
                <div className="flex flex-col gap-2">
                  <div>
                    <div
                      className="bg-primary w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px]"
                      data-aos="fade-in"
                      data-aos-delay="700"></div>
                  </div>

                  <div>
                    <Image
                      src={solutionContent.images.img2}
                      width={626}
                      height={640}
                      className="object-cover h-full w-full rounded-lg shadow-2xl"
                      alt="Raeltec.com"
                      data-aos="fade-left"
                      data-aos-delay="300"
                    />
                  </div>
                  {solutionContent.experience.label && (
                    <div data-aos="fade-up" data-aos-delay="200">
                      <div className="p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5">
                        <strong className="block font-bold text-primary text-xl lg:text-5xl">
                        <AnimatedNumber value={solutionContent.experience.year} />{solutionContent.experience.text}
                        </strong>
                        <span>{solutionContent.experience.label}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* end col */}
            </div>

              {/* second col*/}
            <div className="flex gap-2">
              <div className="flex flex-col space-y-2">
                <div>
                  <Image
                    src={solutionContent.images.img4}
                    width={626}
                    height={640}
                    className="object-cover h-full w-full rounded-lg"
                    alt="Raeltec.com"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <div className="w-4/12 flex">
                    <div className="ml-auto">
                      <div
                        className="bg-primary w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]"
                        data-aos="fade-in"
                        data-aos-delay="600"></div>
                    </div>
                  </div>

                  <div>
                    <Image
                      src={solutionContent.images.img5}
                      width={626}
                      height={640}
                      className="object-cover h-full w-full rounded-lg"
                      alt="Raeltec.com"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    />
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="mt-auto">
                <div className="flex flex-col gap-2">
                  <div>
                    <div
                      className="bg-primary w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px]"
                      data-aos="fade-in"
                      data-aos-delay="700"></div>
                  </div>

                  <div>
                    <Image
                      src={solutionContent.images.img6}
                      width={626}
                      height={640}
                      className="object-cover h-full w-full rounded-lg shadow-2xl"
                      alt="Raeltec.com"
                      data-aos="fade-left"
                      data-aos-delay="300"
                    />
                  </div>
                  {solutionContent.experience.label && (
                    <div data-aos="fade-up" data-aos-delay="200">
                      <div className="p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5">
                        <strong className="block font-bold text-primary text-xl lg:text-5xl">
                        <AnimatedNumber value={solutionContent.experience.year} />{solutionContent.experience.text}
                        </strong>
                        <span>{solutionContent.experience.label}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* end col */}
            </div>
          </div>
          <div className="lg:w-5/12 relative z-10">
            {solutionContent.text.headingSubTitle && (
              <span
                className="inline-block z-10 py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-primary before:left-0 before:top-0 before:bottom-0 before:z-[-1]"
                data-aos="fade-up"
                data-aos-delay="0">
                {solutionContent.text.headingSubTitle}
              </span>
            )}
            {solutionContent.text.headingTitle && (
              <h2
                className="text-heading text-2xl lg:text-4xl font-bold mb-5"
                data-aos="fade-up"
                data-aos-delay="100">
                {solutionContent.text.headingTitle}
              </h2>
            )}
            {solutionContent.text.headingTitle && (
              <p
                className="text-body leading-relaxed mb-10"
                data-aos="fade-up"
                data-aos-delay="100">
                {solutionContent.text.description}
              </p>
            )}

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

                            
                              {solutionContent.text.features.map((feature, idx) => (
                                  <li
                                  className='flex space-x-4 items-start mb-7'
                                  key={feature.title}
                                  >
                                      <span className='text-xl grow-0 flex-none inline-flex 
                                      justify-center items-center w-12 h-12 rounded-full relative
                                      bg-primary'>
                                          {<BiCheck className='z-20 relative text-white'/>}

                                      </span>
                                      <div>
                                          <h2 className='text-gray-800 text-heading font-bolf mb-2'>
                                              {feature.title}
                                          </h2>
                                          <p className='text-gray-500'>{feature.description}</p>
                                      </div>
                                  </li>
                              ))}


                        </motion.ul>

            <div
              className="flex flex-center space-x-3"
              data-aos="fade-up"
              data-aos-delay="300">
              <Button className='bg-primary hover:bg-[#442359] mx-auto flex gap-x-1 items-center max-w-[166px]' >
                Get Started
                
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const AnimatedNumber = ({ value }: { value: any }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <span
      ref={nodeRef}
      data-aos="count-up"
      data-aos-once="true"
      data-aos-duration="2000"
    >
      <CountUp
        start={0}
        end={value}
        duration={5}
        decimals={value % 1 === 0 ? 0 : 1}
      />
    </span>
  );
};

export default Solutions;
