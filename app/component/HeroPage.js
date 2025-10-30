'use client';

import { gsap } from "gsap";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import pageone from './image/slide7.png';




const HeroPage = () => {
   const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const textElement = textRef.current;

    // Wrap each letter in a span, ignore spaces and <br>
    textElement.innerHTML = Array.from(textElement.childNodes)
      .map(node => {
        if (node.nodeName === "BR") return "<br/>";
        return node.textContent
          .split("")
          .map(letter =>
            letter === " " ? " " : `<span class="inline-block">${letter}</span>`
          )
          .join("");
      })
      .join("");

    const spans = textElement.querySelectorAll("span");

    // Simple but uncommon animation: pop + rotate + wave
    gsap.fromTo(
      spans,
      { opacity: 0, y: 40, rotation: -10, scale: 0.5 },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.05,
      }
    );

    // Optional continuous wave motion
    gsap.to(spans, {
      y: 4,
      duration: 1,
      ease: "sine.inOut",
      repeat: 0,
      yoyo: true,
      stagger: {
        amount: 1.5,
      },
    });
  }, []);

  const textRefs = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5, // starts after a short delay
      }
    );
  }, []);

    const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { y: 300, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".glass-card",
      { opacity: 0, y: 120, scale: 0.9, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".glass-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
    return (
        <div id="hero" className='relative'>
          <div className='relative z-2 '>
            <div className='container mx-auto px-[24px] sm:px-0 w-full relative flex items-center justify-center flex-col'>
                <div  className='flex items-center justify-between flex-col h-screen pt-[70px] sm:pt-[70px] md:pt-[90px] lg:pt-[120px] xl:pt-[130px] 2xl:pt-[8%] relative'>
                  <div className='flex items-center flex-col justify-center glass-card'>
                    <h2 ref={textRef} className="tradines  text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[86px] font-bold text-center mt-10">
                      The Cryptocurrency <br className="sm:block hidden" /> For Payments
                    </h2>
                    <p ref={textRefs} className='bitstartp text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[30px] text-center '>Based on Blockchain Technology</p>
                    <div className='flex items-center justify-center gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]'>
                        <button className='buttonauditelt !bg-transparent relative  cursor-pointer text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] group gap-[7.50px] group duration-300'>
                            Download Litecoin
                        </button>
                      </div>
                  </div>
                  <Image ref={imgRef} className='mx-auto w-fit h-[65%] mt-auto z-10 pt-[24px] sm:pt-[32px] md:pt-[36px] lg:pt-[40px] xl:pt-[48px] 2xl:pt-[64px]' src={pageone} alt=''/>
                </div>
                
            </div>
          </div>
        </div>
    );
};

export default HeroPage;