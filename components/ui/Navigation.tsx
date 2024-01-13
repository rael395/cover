"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";
import logo from "../../public/images/logo.svg";
import { usePathname } from 'next/navigation';

const navigationMenu = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navigation = () => {
  let wHeight = null;
  let wWidth = null;
  if (typeof window !== "undefined") {
    wHeight = window.innerHeight;
    wWidth = window.innerWidth;
  }
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();
    let newPathname = '';

    newPathname = pathname;
    if (pathname.includes('/blog')) {
        newPathname = '/blog';
    } else if (pathname.includes('/projects')) {
        newPathname = '/projects';
    }

  const [dimensions, setDimensions] = useState({
    height: wHeight || 0,
    width: wWidth || 0,
  });

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      if (dimensions.width > 768 && navOpen) {
        setNavOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    // Explicitly specify the return type as void
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dimensions.width, navOpen]);

  return (
    <>
      <header className="py-4">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <Image src={logo} width={400} height={400} alt="Logo" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-7 ml-auto ">
              <ul className="flex space-x-7">
                {navigationMenu.map((item, idx) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full
                        before:h-[2px] before:bg-primary before:origin-[100%, 50%] before:transition-all before:duration-300
                        before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] before:will-change-transform hover:before:origin-[100%, 0%]
                        hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1] text-[12px] tracking-[2px] uppercase font-semibold pb-2 ${newPathname === item.href ? 
                        "border-primary text-primary before:scale-x-[1.05]" : "border-transparent"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center">
              <button
                className="block lg:hidden"
                onClick={mobileMenuHandler}
              >
                <HiBars3 className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={
          navOpen
            ? "py-0 block fixed w-screen z-[9999]"
            : "py-0 hidden fixed w-screen z-[9999]"
        }
      >
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
          onClick={mobileMenuHandler}
        ></div>

        <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
          <div className="h-14 px-10 border-b flex items-center">
            <button
              onClick={mobileMenuHandler}
              className="flex items-center space-x-3"
            >
              <GrClose /> <span>Close</span>
            </button>
          </div>
          <div className="h-[calc(100%-0px)]  py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
            <ul className="block mb-7">
              {navigationMenu.map((item, idx) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={mobileMenuHandler}
                    className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
                  >
                    <span>{item.label}</span>
                    <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                      <BiChevronRight className="text-xl" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#"
              onClick={mobileMenuHandler}
              className="py-4 px-5 bg-primary inline-block text-white rounded-lg duration-300 transition-all ease-in-out relative top-0 hover:bg-[#134761] hover:shadow-lg hover:-top-1"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
