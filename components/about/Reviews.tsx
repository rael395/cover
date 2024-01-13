'use client';

 import Image from 'next/image';

 import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";


 import {Swiper, SwiperSlide} from 'swiper/react';

 import 'swiper/css';
 import 'swiper/css/pagination';
 
 
 import {Pagination} from 'swiper/modules';

 const reviewsData = [
    {
      avatar: "/images/person-5-min.jpg",
      name: "Martha Syamutondo",
      job: "CEO and Founder",
      review: "As the CEO of CoverEffect, I am proud to lead a team that is not only proficient in insurance but passionate about the well-being of our clients. Together, we envision a future where insurance transcends its traditional role, becoming a source of empowerment, resilience, and enduring peace. Join us on this journey, where CoverEffect is not just an insurance agency—it is a promise, a shield, and a partner in your journey towards a secure and flourishing future."
    },
    {
        avatar: "/images/person-1-min.jpg",
        name: "Lizzy",
        job: "Sales Agent",
        review: "At CoverEffect, our mission is to redefine the insurance experience. We believe that insurance is not just about policies; it's about safeguarding dreams, securing aspirations, and empowering individuals and businesses to thrive with confidence. Our commitment goes beyond coverage; it extends to cultivating trust through transparent communication, personalized solutions, and unwavering support."
      },
      {
        avatar: "/images/person-2-min.jpg",
        name: "Stella",
        job: "Sales Agent",
        review: "We are inspired by the resilience of our clients, and we see insurance as a catalyst for resilience. Our comprehensive offerings, whether in house, commercial, or car insurance, are crafted with precision to meet the dynamic needs of those we serve. We understand that each policy represents not just assets but the life's work and passions of our clients."
      },
      {
        avatar: "/images/team-5-min.jpg",
        name: "Bertha",
        job: "Sales Agent",
        review: "In every policy, we embed the values of integrity, empathy, and reliability. It is our firm belief that insurance should not be a transaction but a transformative partnership. We strive to be the ally our clients deserve, offering not just protection but a beacon of stability in an ever-changing world."
      },
      {
        avatar: "/images/contact-3.jpg",
        name: "Mutinta",
        job: "Sales Agent",
        review: "At CoverEffect, we are architects of assurance, dedicated to building a foundation of trust in an industry often associated with uncertainty. We stand as guardians of peace of mind, providing a sanctuary where individuals and businesses can thrive without fear of the unknown."
      },
      
 ];

 const swiperSettings = {
  slidesPerView: 1,
  breakpoints: {
    640: { slidesPerView: 1 },
    1080: { slidesPerView: 2 },
  },
  spaceBetween: 30,
  modules: [Pagination],
  pagination: {
    clickable: true,
  },
  autoplay: {
    delay: 2000, // Set the autoplay delay in milliseconds
  },
  loop: true, // Enable infinite loop
};
 

const Reviews = () => {
  return ( 
    <section className="mb-12 lg:mb-32" >
        <div className="container mx-auto" >
      {/*swiper*/}
      <Swiper 
      {...swiperSettings} 
      className='h-[600px] sm:h-[800px]'
      >
        {reviewsData.map((person, index) => {
            return (
                <SwiperSlide key={index} >
                    <Card className='bg-primary/10 group overflow-hidden relative p-8 h-[600px] sm:h-[800px]' >
                        <CardHeader className='p-0 mb-10' >
                            <div>
                                {/*image*/}
                                <Image 
                                src={person.avatar}
                                width={150}
                                height={150}
                                alt='image'
                                className='flex bottom-0 shadow-2xl'
                                priority
                                />
                                {/*name*/}
                                <div className="flex flex-col" >
                                    <CardTitle>{person.name}</CardTitle>
                                    <p className='text-gray-500'> {person.job} </p>
                                </div>
                            </div>
                        </CardHeader>
                        <span className='text-[100px] leading-[0] relative text-primary block pt-6'>&ldquo;</span>
                        <CardDescription className='text-lg text-muted-foreground italic sm:text-[22px]' > {person.review} </CardDescription>
                    </Card>
                </SwiperSlide>
            );
        })}
      </Swiper>
      
        </div>
    </section>
  );
};

export default Reviews;