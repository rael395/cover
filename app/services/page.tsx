import React from "react";
import Link from "next/link";
import Hero from "@/components/about/Hero";
import Services from "@/components/services/Services";
import Sponsor from "@/components/Sponsor";



export const metadata = {
    title: "Services - CoverEffect Insurance",
  };

function page() {
    return (
        <>
        <Hero className="pt-5 pb-24 " title="Services" subTitle="Our Services" />
        <Services className="pt-0 pb-32" itemsPerPage={4} />
        <Sponsor />
        
        </>
    );
}
export default page;