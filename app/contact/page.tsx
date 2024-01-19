import React from "react";
import Link from "next/link";
import Hero from "@/components/about/Hero";
import Contact from "@/components/contact/Contact";




export const metadata = {
    title: "Contact - CoverEffect Insurance",
  };

function page() {
    return (
        <>
        <Hero className="pt-28 pb-24 " title="Let's Tailor Your Insurance Solution Together!" subTitle="Contact us" />
        <Contact />
        
        
        </>
    );
}
export default page;