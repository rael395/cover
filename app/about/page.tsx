
import Hero from '@/components/about/Hero'
import Team from '@/components/about/Team'
import Whyus from '@/components/about/Whyus'
import Stories from '@/components/about/Reviews'
import Companies from '@/components/about/Companies'
import React from 'react'

export const metadata = {
  title: "About - CoverEffect Insurance",
};

const page = () => {
  return (
    <>
        <Hero className="pt-5 pb-24" title={undefined} subTitle={undefined}/>
        <Stories />
        <Whyus  />
        <Companies />
        <Team className="py-10 lg:py-32"/>
    </>
  )
}

export default page
