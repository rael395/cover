'use client';
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "../../components/Form";
import Socials from "../../components/Socials";
import React, { useEffect } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";


const contactContent = {
  text: {
        description1:"Reach out to our dedicated team at Cover Effect. We're here to understand your unique needs and craft a personalized insurance plan that fits you perfectly.",
        description2: "Your peace of mind is just a conversation away. Whether you're safeguarding your home, business, or vehicle, our dedicated team at CoverEffect is here to tailor a solution that suits your unique needs.",
  },
  images: {
    img1: "/images/contact-2.jpg",
    img2: "/images/contact-3.jpg",
    img3: "/images/contact-pix-2.jpg",
    img4: "/images/team-7-min.jpg",
    img5: "/images/contact-4.jpg",
  },
};



const Contact =() => {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  });

  return (
   <section>
    <div className="container px-4 mx-auto pb-20">
        <div className="lg:flex justify-between ">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            {contactContent.text.description2 && (
              <p
                className="leading-relaxed text-gray-500 mb-0"
                data-aos="fade-up"
                data-aos-delay="200">
                {contactContent.text.description2}
              </p>
            )}
            {contactContent.text.description1 && (
              <p
                className="leading-relaxed text-gray-500 mb-10"
                data-aos="fade-up"
                data-aos-delay="200">
                {contactContent.text.description1}
              </p>
            )}

            <div
              className="flex space-x-3"
              data-aos="fade-up"
              data-aos-delay="300">
              {/*socials*/}
              <Socials  
                containerStyles='flex gap-x-6 mx-auto lg:mx-0' 
                iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
              />

            </div>
          </div>
          <div className="lg:w-6/12 space-y-2">
            <div className="flex space-x-2 items-stretch">
              <div className="w-8/12">
                {contactContent.images.img1 && (
                  <Image
                    src={contactContent.images.img1}
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
                  {contactContent.images.img2 && (
                    <div>
                      <Image
                        src={contactContent.images.img2}
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
                {contactContent.images.img3 && (
                  <div>
                    <Image
                      src={contactContent.images.img3}
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
                  {contactContent.images.img4 && (
                    <div>
                      <Image
                        src={contactContent.images.img4}
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
                {contactContent.images.img5 && (
                  <Image
                    src={contactContent.images.img5}
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
    {/* info text & form*/}
    <div className='grid lg:grid-cols-2 mb-24 lg:mb-32 mx-auto '>
         {/*info text*/}
        <div className="flex flex-col gap-y-4 lg:gap-y-14 mb-12 lg:mb-24 gap-x-8
            text-base lg:text-lg">
           {/*mail*/}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary " />
              <Link href="/">customercare@covereffectinsurance.com</Link>
            </div>
            {/*Address*/}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary " />
              <Link href="https://maps.app.goo.gl/Y1nGK9VkfHECEBL97">Shop No.21, Woodlands Mall, Lusaka, Zambia.</Link>
            </div>
            {/*Phone*/}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary " />
              <div>+260979376721, +260977561754</div>          
          </div>
       </div>
       
        <Form />
      </div>
  </section>
  );
};
export default Contact;
