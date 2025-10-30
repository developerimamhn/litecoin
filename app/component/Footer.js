"use client";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import { useEffect } from "react";
import logo from './image/logo.png';
gsap.registerPlugin(ScrollTrigger);




const Footer = () => {
  useEffect(() => {
        const texts = gsap.utils.toArray(".text");
    
        texts.forEach((text) => {
          gsap.fromTo(
            text,
            { opacity: 0, y: -300 },
            {
              opacity: 1,
              y: 0,
              duration: 1.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: text,
                start: "top 95%", // when the top of the card hits 80% of viewport
                toggleActions: "play none none none", // play only once
              },
            }
          );
        });
      }, []);
    return (
        <div id='Community' className='relative -mt-[1] pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[84px]'>
          <div className='voerflow w-full h-full absolute top-0 left-0 z-[-2] ' ></div>
          <div className=' container mx-auto sm:px-0 px-6 text'>
            <div className='flex items-center sm:items-start justify-center sm:justify-between sm:flex-row flex-col'>
              <div className='flex sm:block items-center jsutify-center '>
                <Image className='mb-[13px] sm:mb-[14px] md:mb-[15px] lg:mb-[16px] xl:mb-[20px] 2xl:mb-[24px] w-fit h-[20px] sm:h-[26px] 2xl:h-[30px]' src={logo} alt='Logo...'/>
                <svg className='h-px sm:block hidden' viewBox="0 0 230 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="230" height="1" fill="url(#paint0_linear_1401_2985)"/>
                  <defs>
                  <linearGradient id="paint0_linear_1401_2985" x1="0" y1="0.5" x2="230" y2="0.5" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0"/>
                  <stop offset="0.5" stop-color="white" stop-opacity="0.15"/>
                  <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className='flex sm:block items-center jsutify-center flex-col'>
                <h3 className='subsecnow text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pb-[10px] sm:pb-[11px] md:pb-[12px] lg:pb-[13px]'>Subscribe Now</h3>
                <div className='inputfielssec pr-1.5 py-[6px]'><input className='inputfimain text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] pl-[12px] sm:pl-[13px] md:pl-[14px] lg:pl-[15px] xl:pl-[16px] 2xl:pl-[18px]' placeholder="Enter Your Email...." type='email'/> <button className='subscrbuttonmail text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] py-[5px] lg:py-[7px] px-[10px] sm:px-[11px] md:px-[12px] lg:px-[13px] xl:px-[14px] 2xl:px-[15px]'>Subscribe Us</button></div>
              </div>
            </div>
            <div className='flex items-center justify-between gap-3.5 pt-[16px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[40px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px] sm:flex-row flex-col'>
              <div>
                <h3 className='copyright text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Copyright © 2011-2024 Litecoin Project. All rights reserved.</h3>
              </div>
              <div className='flex gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px]'>
                <h3 className='copyright text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Terms & Conditions</h3>
                <svg width="1" height="26" viewBox="0 0 1 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1" height="26" fill="url(#paint0_linear_1401_3004)"/>
                <defs>
                <linearGradient id="paint0_linear_1401_3004" x1="0.5" y1="0" x2="0.5" y2="26" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" stop-opacity="0"/>
                <stop offset="0.5" stop-color="white" stop-opacity="0.15"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
                </linearGradient>
                </defs>
                </svg>
                <h3 className='copyright text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Privacy Policy</h3>
              </div>
            </div>
            <svg className='w-full pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]' viewBox="0 0 1281 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1281" height="1" fill="url(#paint0_linear_1401_3007)"/>
            <defs>
            <linearGradient id="paint0_linear_1401_3007" x1="0" y1="0.5" x2="1281" y2="0.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0"/>
            <stop offset="0.5" stop-color="white" stop-opacity="0.1"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            </defs>
            </svg>
          </div>
        </div>
    );
};

export default Footer;