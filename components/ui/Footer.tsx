"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone, HiEnvelope} from "react-icons/hi2";

import logo from "/public/images/logo.svg";

const footerContent = {
  about: {
    logo: "/images/logo.svg",
    description:
      "CoverEffect is a licensed agent for and on behalf of Hollard Zambia,  which is an authorised General Insurance Provider, and Hollard Life Zambia, which is an authorised Life Insurance Provider.",
    cta: {
      href: "#_",
      label: "Learn more",
    },
  },
  footerLinks: [
    {
      heading: "Company",
      links: [
        {
          href: "#_",
          label: "Home",
        },
        {
          href: "#_",
          label: "How we work",
        },
        {
          href: "#_",
          label: "Our mission",
        },
        {
          href: "/about",
          label: "About",
        },
        {
          href: "#_",
          label: "Careers",
        },
        {
          href: "/contact",
          label: "Contact",
        },
      ],
    },
    {
      heading: "Resources",
      links: [
      
        {
          href: "#_",
          label: "Support",
        },
        {
          href: "#_",
          label: "Terms & conditions",
        },
        {
          href: "#_",
          label: "Privacy policy",
        },
      ],
    },
  ],
  contact: {
    heading: "Contact",
    description:
      "Please feel free to reach out to us with any inquiries, questions, or assistance you may need.",

    address: {
      street: "Shop No. 23 Woodlands Mall, Lusaka, Zambia.",
      phone: "+260979376721, +260977561754 ",
      email: "info@covereffect.com",
    },
  },
  copyright: {
    labelOne: "Copyright ",
    labelTwo: "Designed and Developed by Raeltec, a subsidiary of Agway Investments Limited. All rights reserved.",
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer role="contentinfo" className="pt-10 pb-20 bg-primary/5">
      <div className="container px-4 mx-auto">
        <div className="block lg:flex gap-20 mb-10 pb-10">
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src={footerContent.about.logo}
                width={157}
                height={30}
                alt="Logo"
              />
            </Link>
            <p className="leading-relaxed mb-7 text-gray-500">
              {footerContent.about.description}
            </p>
            <p>
              <Link
                href={footerContent.about.cta.href}
                className="flex space-x-2 outline-none items-center font-semibold text-primary">
                <span className="text-primary">{footerContent.about.cta.label}</span>
                <span className="w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center">
                  <BiChevronRight className="text-lg" />
                </span>
              </Link>
            </p>
          </div>
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <div className="grid grid-cols-2 gap-10">
              {footerContent.footerLinks.map((footerLink, idx) => (
                <div key={footerLink.heading}>
                  <h3 className="font-semibold text-heading mb-5">
                    {footerLink.heading}
                  </h3>
                  <ul className="p-0 m-0">
                    {footerLink.links.map((link, idx) => (
                      <li className="mb-3" key={link.label}>
                        <Link
                          href={link.href}
                          className="group flex items-center duration-300 transition-all ease-in-out hover:text-primary">
                          <span className="text-gray-500">{link.label}</span>
                          <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                            <BiChevronRight className="text-xl" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-4/12">
            <h3 className="font-semibold text-heading mb-5">
              {footerContent.contact.heading}
            </h3>
            <p className="leading-relaxed mb-7 text-gray-500">
              {footerContent.contact.description}
            </p>
            <ul>
              <li className="flex items-start space-x-3 mb-5">
                <HiLocationMarker className="text-xl text-primary" />
                <Link href='https://maps.app.goo.gl/Y1nGK9VkfHECEBL97' className="text-gray-500">{footerContent.contact.address.street}</Link>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <HiPhone className="text-xl text-primary" />
                <span className="text-gray-500">{footerContent.contact.address.phone}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <HiEnvelope className="text-xl text-primary" />
                <Link href='/' className="text-gray-500">{footerContent.contact.address.email}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-10 border-t border-gray-200">
        <p className="text-gray-500">
          {footerContent.copyright.labelOne}{" "}
          &copy; {currentYear} {"."} {footerContent.copyright.labelTwo}
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
