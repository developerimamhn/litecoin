'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import numbeingss from './image/Frame 2147225683.png';
import image2 from './image/Frame 2147225683e42.png';
import image3 from './image/Frame 2147225683gads.png';
import image4 from './image/Frame 2147225683segvedsfv.png';
import image5 from './image/Frame 21472scsc25683.png';
import image6 from './image/Frame 214722scscsa5683.png';
import image7 from './image/Frame ascs2147225683.png';
import linetwo from './image/smslide3.png';
import lineone from './image/smslide4.png';

gsap.registerPlugin(ScrollTrigger);

const cardItems = [
  { title: "Dapp", image: image2 },
  { title: "Whitepaper", image: numbeingss },
  { title: "Website", image: image3 },
  { title: "Medium", image: image4 },
  { title: "Telegram", image: image5 },
  { title: "Linktree", image: image6 },
];


const Pagetwo = () => {
  const wrapperRef = useRef(null);
  const gridItem1Ref = useRef(null);
  const gridItem2Ref = useRef(null);
  const gridItem3Ref = useRef(null);
  const titleRef = useRef(null);
  const acquireRef = useRef(null);
  
  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;
  
        // Skip all animations on mobile
        if (isMobile) return;
  
        // Main wrapper animation (desktop only)
        gsap.fromTo(
          wrapperRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 0.8,
            },
          }
        );
  
        // Title animation (desktop only)
        gsap.fromTo(
          titleRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.8,
            },
          }
        );
  
        // Grid items animation (desktop only)
        [gridItem1Ref, gridItem2Ref, gridItem3Ref].forEach((ref, index) => {
          gsap.fromTo(
            ref.current,
            { y: 50, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              delay: index * 0.25,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 0.8,
              },
            }
          );
        });
  
        // Acquire CRX section animation (desktop only)
        gsap.fromTo(
          acquireRef.current,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: acquireRef.current,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 0.8,
            },
          }
        );
      }
    );
  
    return () => mm.revert(); // Cleanup
  }, []);
  
  const itemRefs = useRef([]);
  
  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isMobile } = context.conditions;
  
        // Skip animations on mobile
        if (isMobile) return;
  
        // Item animations (desktop only)
        itemRefs.current.forEach((el, index) => {
          if (!el) return;
  
          gsap.fromTo(
            el,
            {
              autoAlpha: 0,
              y: 50,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 100%',
                toggleActions: 'play none none none',
              },
              delay: index * 0.1,
            }
          );
        });
      }
    );
  
    return () => mm.revert(); // Cleanup
  }, []);

 const listRef = useRef([]);
  
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isMobile } = context.conditions;

        if (isMobile) return; // Skip mobile animation

        // Animate each <li> one by one
        gsap.fromTo(
          listRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15, // one by one effect
            ease: 'power3.out',
            scrollTrigger: {
              trigger: listRef.current[0], // start animation when first li comes
              start: 'top 85%',
              end: 'bottom 50%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    );

    return () => mm.revert();
  }, []);
  

    
    return (
        <div id='About' ref={wrapperRef} className='py-[40px] sm:py-[40px] md:py-[48px] lg:py-[64px] xl:py-[96px] 2xl:py-[120px] px-6 sm:px-0 relative overflow-hidden'>
          <Image className='sm:w-2/5 absolute top-0 left-0 ' src={lineone} alt='Loadding...'/>
          <Image className='sm:w-2/5 absolute top-0 right-0' src={linetwo} alt='Loadding...'/>
           <div className='container mx-auto'>
              <div  className='flex items-center justify-center flex-col pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[64px]'>
                <h2 className='tradines !text-center text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]'>Join the Neuro Network</h2>
                <p className='bitstartpsss text-white/80 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] text-center '>Connect with innovators shaping the Proof of Brain era.</p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]'>
                  {cardItems.map((item, index) => (
                    <div key={index} ref={(el) => (listRef.current[index] = el)} className='group netkcasetge overflow-hidden relative p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[32px] col-span-2 md:col-span-1'>

                      <div class="absolute inset-0 top-0 left-5 block h-0 w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[75px] animate-gradient bg-gradient-to-r from-[#0C004A]  to-[#FFFFFF] bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[2px] ![mask-composite:subtract] animate-border-spin"></div>

                      <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-0 left-0' width="185" height="139" viewBox="0 0 185 139" fill="none">
                      <g filter="url(#filter0_f_1466_2100)">
                        <ellipse cx="16.9203" cy="6.13946" rx="99.0328" ry="35.0387" transform="rotate(-35.6004 16.9203 6.13946)" fill="white" fill-opacity="0.4"/>
                      </g>
                      <defs>
                        <filter id="filter0_f_1466_2100" x="-151.166" y="-143.18" width="336.173" height="298.639" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="42.5" result="effect1_foregroundBlur_1466_2100"/>
                        </filter>
                      </defs>
                      </svg>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px]'>
                          <Image className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[75px]' src={item.image} alt='Loading...'/>
                          <h3 className='whitepase text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]'>{item.title}</h3>
                        </div>
                        <div>
                          <div className='flex items-center justify-center'>
                              <button className='buttonauditeltsss relative  cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center py-[10px] sm:py-[11px] md:py-[12px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] group gap-[7.50px]'>
                                  <div
                                      class="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-b from-[#0C004A]  to-[#774FCF] bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"
                                  ></div>
                                  Join Community
                              </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className='netkcasetge overflow-hidden col-span-2 relative p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[32px] group'>

                      <div class="absolute inset-0 block h-0 w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[75px] animate-gradient bg-gradient-to-r from-[#0C004A]  to-[#FFFFFF] bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[2px] ![mask-composite:subtract] animate-border-spin"></div>

                      <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-0 left-0' width="185" height="139" viewBox="0 0 185 139" fill="none">
                      <g filter="url(#filter0_f_1466_2100)">
                        <ellipse cx="16.9203" cy="6.13946" rx="99.0328" ry="35.0387" transform="rotate(-35.6004 16.9203 6.13946)" fill="white" fill-opacity="0.4"/>
                      </g>
                      <defs>
                        <filter id="filter0_f_1466_2100" x="-151.166" y="-143.18" width="336.173" height="298.639" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="42.5" result="effect1_foregroundBlur_1466_2100"/>
                        </filter>
                      </defs>
                      </svg>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px]'>
                          <Image className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[75px]' src={image7} alt='Loading...'/>
                          <h3 className='whitepase text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]'>X</h3>
                        </div>
                        <div>
                          <div className='flex items-center justify-center'>
                              <button className='buttonauditeltsss relative  cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center py-[10px] sm:py-[11px] md:py-[12px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] group gap-[7.50px]'>
                                  <div
                                      class="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-b from-[#0C004A]  to-[#774FCF] bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"
                                  ></div>
                                  Join Community
                              </button>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
           </div>
        </div>
    );
};

export default Pagetwo;