"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

const heroContent = {
  text: {
    subheading: "Welcome to CoverEffect",
    heading: "Protecting What Matters To You Most: Your Trusted Insurance Partner",
    description:
      "We specialize in safeguarding your most valuable assets, offering tailored insurance solutions for your home, belongings, business, and vehicles. we prioritize your peace of mind. Our experienced team is dedicated to providing personalized service, guiding you through the insurance process with expertise and care. Trust us to be your insurance partner, ensuring that you and your assets are well-protected.",
  },
  images: {
    img1: "/images/pix-38.jpg",
    img2: "/images/hero-img-2.jpg",
    img3: "/images/hero-img-3.jpg",
    img4: "/images/hero-img-4.jpg",
    img5: "/images/hero-img-1.jpg",
  },
};

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  });

  return (
    <section className="pt-28 pb-20">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            {heroContent.text.subheading && (
              <span
                className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-primary before:left-0 before:top-0 before:bottom-0 before:z-[-1]"
                data-aos="fade-up">
                {heroContent.text.subheading}
              </span>
            )}
            {heroContent.text.heading && (
              <h1
                className="text-4xl lg:text-5xl font-bold text-heading mb-7"
                data-aos="fade-up"
                data-aos-delay="100">
                {heroContent.text.heading}
              </h1>
            )}
            {heroContent.text.description && (
              <p
                className="leading-relaxed text-gray-500 mb-10"
                data-aos="fade-up"
                data-aos-delay="200">
                {heroContent.text.description}
              </p>
            )}

            <div
              className="flex space-x-3"
              data-aos="fade-up"
              data-aos-delay="300">
              <Button className='bg-primary  hover:bg-[#442359] flex gap-x-1 items-center max-w-[166px]' >
                Get Started
                
              </Button>
            </div>
          </div>
          <div className="lg:w-6/12 space-y-2">
            <div className="flex space-x-2 items-stretch">
              <div className="w-8/12">
                {heroContent.images.img1 && (
                  <Image
                    src={heroContent.images.img1}
                    width={397}
                    height={406}
                    alt="Raeltec.com"
                    className="object-cover h-full w-full rounded-2xl"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  />
                )}
              </div>
              <div className="w-4/12 self-end space-y-2 ">
                <div className="grid grid-cols-2 gap-2">
                  {heroContent.images.img2 && (
                    <div>
                      <Image
                        src={heroContent.images.img2}
                        width={437}
                        height={437}
                        alt="Raeltec.com"
                        className="object-cover h-full w-full rounded-2xl"
                        data-aos="fade-down"
                        data-aos-delay="200"
                      />
                    </div>
                  )}

                  <div
                    className="bg-pink-300 rounded-2xl rounded-tr-[200px]"
                    data-aos="fade-in"
                    data-aos-delay="400"></div>
                </div>
                {heroContent.images.img3 && (
                  <div>
                    <Image
                      src={heroContent.images.img3}
                      width={374}
                      height={392}
                      alt="Raeltec.com"
                      className="object-cover h-full w-full rounded-2xl"
                      data-aos="fade-left"
                      data-aos-delay="300"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex space-x-2">
              <div className="w-4/12">
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className="bg-primary rounded-2xl rounded-bl-[200px]"
                    data-aos="fade-ip"
                    data-aos-delay="500"></div>
                  {heroContent.images.img4 && (
                    <div>
                      <Image
                        src={heroContent.images.img4}
                        width={394}
                        height={394}
                        alt="Raeltec.com"
                        className="object-cover h-full w-full rounded-2xl"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="w-5/12">
                {heroContent.images.img5 && (
                  <Image
                    src={heroContent.images.img5}
                    width={446}
                    height={495}
                    alt="Raeltec.com"
                    className="object-cover h-full w-full rounded-2xl"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
