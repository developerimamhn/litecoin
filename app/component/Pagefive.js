'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import { Autoplay, EffectFlip, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

gsap.registerPlugin(ScrollTrigger);


import Image from 'next/image';
import imagedoted from './image/Figure - Abstract Dots → 1xOqMa4sAAwBCscscsrdkiSJfIXups.png.png';
import imageone from './image/Frame 19.png';

const Pagefive = () => {
  const swiperRef = useRef(null);
  return (
    <div id="Blog" className="relative py-8 sm:py-9 md:py-10 lg:py-12 xl:py-16 2xl:py-[100px] mt-[36px] sm:mt-[40px] md:mt-[48px] lg:mt-[64px] xl:mt-[96px] 2xl:mt-[128px] 2xl:mx-6">
      <div className='coonatainaedgaewf w-full h-full absolute top-0 left-1/2 -translate-x-1/2 '></div>
      <div id='pin-windmill' className="relative container md:flex-row flex-col mx-auto flex jusitfy-between md:grid grid-cols-12 gap-4 items-center sm:px-0 px-6">

        <button  className="custom-next cursor-pointer md:block hidden transition hover:scale-110 hover:opacity-80 duration-300 col-span-2 relative mr-auto 2xl:w-1/2 h-fit rounded-full lg:col-start-3">
          <div class="absolute inset-0 block h-full w-full animate-gradient bg-linear-to-tr from-[#ffffff63] via-[#fff0] to-[#ffffff63] bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"></div>
          <svg
            className='rounded-full w-[36px] sm:w-[40px] md:w-[48px] lg:w-[64px] xl:w-[96px] 2xl:w-full'
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="120"
              height="120"
              rx="60"
              transform="matrix(-1 0 0 1 120 0)"
              fill="black"
              fillOpacity="0.01"
            />
            <path
              d="M57.5703 53.9299L51.5003 59.9999L57.5703 66.0699"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M68.5 60H51.67"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <Swiper
          effect={'flip'}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 25000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          modules={[EffectFlip, Pagination, Navigation,Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mySwiper w-full col-span-8 lg:col-span-5 2xl:col-span-4 relative"
        >
          <SwiperSlide className=''>
            <div className='leadingsderad p-px'>
              <div className='borderanotherfeds px-3.5 sm:px-[15px] md:px-4 lg:px-5 xl:px-6 2xl:px-[30px] pt-3.5 sm:pt-[15px] md:pt-4 lg:pt-5 xl:pt-6 2xl:pt-[31px] pb-4 sm:pb-5 md:pb-6 lg:pb-8 xl:pb-9 2xl:pb-10 relative'>
                {/* <div
                  class="block h-full w-full absolute top-0 left-0 animate-gradient bg-linear-to-t from-[#1A40D600] via-[#1A40D6] bg-size-[var(--bg-size)_100%] rounded-[inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] mask-subtract! z-[9999]"
              ></div> */}
                <Image className='absolute top-0 mx-auto' src={imagedoted} alt='Loading...'/>
                <Image className='w-8 md:w-9 lg:w-10 xl:w-12 2xl:w-[60px] h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[60px] mx-auto' src={imageone} alt='Loading...'/>
                <h3 className='sodigasaswe text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>Community</h3>
                <p className='fdisannumbelit text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] pt-1 pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16px]'>Find support across a growing number of <br className='sm:block hidden'/> Litecoin communities:</p>
                <div className='lineroneaszd mx-auto'></div>
                <ul className='grid grid-cols-2 gap-1 md:gap-2 pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                  <button className='px-3 sm:px-[13px] md:px-3.5 lg:px-[15px] xl:px-4 2xl:px-5 py-[11px] sm:py-3 md:py-[13px] lg:py-3.5 xl:py-[15px] 2xl:py-4 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                      <defs>
                        <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                          <stop stop-color="#080808"/>
                          <stop offset="1" stop-color="#8059E3"/>
                        </radialGradient>
                      </defs>
                    </svg> Litecoin Forums
                  </button>
                  <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                      <defs>
                        <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                          <stop stop-color="#080808"/>
                          <stop offset="1" stop-color="#8059E3"/>
                        </radialGradient>
                      </defs>
                    </svg> Litecoin Forums
                  </button>
                  <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                      <defs>
                        <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                          <stop stop-color="#080808"/>
                          <stop offset="1" stop-color="#8059E3"/>
                        </radialGradient>
                      </defs>
                    </svg> Litecoin Forums
                  </button>
                  <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                      <defs>
                        <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                          <stop stop-color="#080808"/>
                          <stop offset="1" stop-color="#8059E3"/>
                        </radialGradient>
                      </defs>
                    </svg> Litecoin Forums
                  </button>
                  <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                      <defs>
                        <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                          <stop stop-color="#080808"/>
                          <stop offset="1" stop-color="#8059E3"/>
                        </radialGradient>
                      </defs>
                    </svg> Litecoin Forums
                  </button>
                  <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                      <defs>
                        <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                          <stop stop-color="#080808"/>
                          <stop offset="1" stop-color="#8059E3"/>
                        </radialGradient>
                      </defs>
                    </svg> Litecoin Forums
                  </button>
                </ul>
              </div>
            </div>
            <svg className='w-full px-[20px]' viewBox="0 0 498 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" width="458" height="40" rx="20" fill="#060A1F"/>
            <path d="M0 0H498V0C498 11.0457 489.046 20 478 20H20C8.95431 20 0 11.0457 0 0V0Z" fill="#0C133A"/>
            </svg>
          </SwiperSlide>

          <SwiperSlide>
            <div className='leadingsderad p-px'>
           <div className='borderanotherfeds px-3.5 sm:px-[15px] md:px-4 lg:px-5 xl:px-6 2xl:px-[30px] pt-3.5 sm:pt-[15px] md:pt-4 lg:pt-5 xl:pt-6 2xl:pt-[31px] pb-4 sm:pb-5 md:pb-6 lg:pb-8 xl:pb-9 2xl:pb-10 relative'>
              <Image className='absolute top-0 mx-auto' src={imagedoted} alt='Loading...'/>
              <Image className='w-8 md:w-9 lg:w-10 xl:w-12 2xl:w-[60px] h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[60px] mx-auto' src={imageone} alt='Loading...'/>
              <h3 className='sodigasaswe text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>Community</h3>
              <p className='fdisannumbelit text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] pt-1 pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16px]'>Find support across a growing number of <br className='sm:block hidden'/> Litecoin communities:</p>
              <div className='lineroneaszd mx-auto'></div>
              <ul className='grid grid-cols-2 gap-1 md:gap-2 pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                <button className='px-3 sm:px-[13px] md:px-3.5 lg:px-[15px] xl:px-4 2xl:px-5 py-[11px] sm:py-3 md:py-[13px] lg:py-3.5 xl:py-[15px] 2xl:py-4 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
              </ul>
            </div>
            </div>
            <svg className='w-full px-[20px]' viewBox="0 0 498 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" width="458" height="40" rx="20" fill="#060A1F"/>
            <path d="M0 0H498V0C498 11.0457 489.046 20 478 20H20C8.95431 20 0 11.0457 0 0V0Z" fill="#0C133A"/>
            </svg>
          </SwiperSlide>

          <SwiperSlide>
            <div className='leadingsderad p-px'>
           <div className='borderanotherfeds px-3.5 sm:px-[15px] md:px-4 lg:px-5 xl:px-6 2xl:px-[30px] pt-3.5 sm:pt-[15px] md:pt-4 lg:pt-5 xl:pt-6 2xl:pt-[31px] pb-4 sm:pb-5 md:pb-6 lg:pb-8 xl:pb-9 2xl:pb-10 relative'>
              <Image className='absolute top-0 mx-auto' src={imagedoted} alt='Loading...'/>
              <Image className='w-8 md:w-9 lg:w-10 xl:w-12 2xl:w-[60px] h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[60px] mx-auto' src={imageone} alt='Loading...'/>
              <h3 className='sodigasaswe text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>Community</h3>
              <p className='fdisannumbelit text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] pt-1 pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16px]'>Find support across a growing number of <br className='sm:block hidden'/> Litecoin communities:</p>
              <div className='lineroneaszd mx-auto'></div>
              <ul className='grid grid-cols-2 gap-1 md:gap-2 pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                <button className='px-3 sm:px-[13px] md:px-3.5 lg:px-[15px] xl:px-4 2xl:px-5 py-[11px] sm:py-3 md:py-[13px] lg:py-3.5 xl:py-[15px] 2xl:py-4 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
              </ul>
            </div>
            </div>
            <svg className='w-full px-[20px]' viewBox="0 0 498 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" width="458" height="40" rx="20" fill="#060A1F"/>
            <path d="M0 0H498V0C498 11.0457 489.046 20 478 20H20C8.95431 20 0 11.0457 0 0V0Z" fill="#0C133A"/>
            </svg>
          </SwiperSlide>

          <SwiperSlide>
            <div className='leadingsderad p-px'>
            <div className='borderanotherfeds px-3.5 sm:px-[15px] md:px-4 lg:px-5 xl:px-6 2xl:px-[30px] pt-3.5 sm:pt-[15px] md:pt-4 lg:pt-5 xl:pt-6 2xl:pt-[31px] pb-4 sm:pb-5 md:pb-6 lg:pb-8 xl:pb-9 2xl:pb-10 relative'>
              <Image className='absolute top-0 mx-auto' src={imagedoted} alt='Loading...'/>
              <Image className='w-8 md:w-9 lg:w-10 xl:w-12 2xl:w-[60px] h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[60px] mx-auto' src={imageone} alt='Loading...'/>
              <h3 className='sodigasaswe text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>Community</h3>
              <p className='fdisannumbelit text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] pt-1 pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16px]'>Find support across a growing number of <br className='sm:block hidden'/> Litecoin communities:</p>
              <div className='lineroneaszd mx-auto'></div>
              <ul className='grid grid-cols-2 gap-1 md:gap-2 pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                <button className='px-3 sm:px-[13px] md:px-3.5 lg:px-[15px] xl:px-4 2xl:px-5 py-[11px] sm:py-3 md:py-[13px] lg:py-3.5 xl:py-[15px] 2xl:py-4 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
              </ul>
            </div>
            </div>
            <svg className='w-full px-[20px]' viewBox="0 0 498 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" width="458" height="40" rx="20" fill="#060A1F"/>
            <path d="M0 0H498V0C498 11.0457 489.046 20 478 20H20C8.95431 20 0 11.0457 0 0V0Z" fill="#0C133A"/>
            </svg>
          </SwiperSlide>

          <SwiperSlide>
            <div className='leadingsderad p-px'>
            <div className='borderanotherfeds px-3.5 sm:px-[15px] md:px-4 lg:px-5 xl:px-6 2xl:px-[30px] pt-3.5 sm:pt-[15px] md:pt-4 lg:pt-5 xl:pt-6 2xl:pt-[31px] pb-4 sm:pb-5 md:pb-6 lg:pb-8 xl:pb-9 2xl:pb-10 relative'>
              <Image className='absolute top-0 mx-auto' src={imagedoted} alt='Loading...'/>
              <Image className='w-8 md:w-9 lg:w-10 xl:w-12 2xl:w-[60px] h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[60px] mx-auto' src={imageone} alt='Loading...'/>
              <h3 className='sodigasaswe text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>Community</h3>
              <p className='fdisannumbelit text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] pt-1 pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16px]'>Find support across a growing number of <br className='sm:block hidden'/> Litecoin communities:</p>
              <div className='lineroneaszd mx-auto'></div>
              <ul className='grid grid-cols-2 gap-1 md:gap-2 pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                <button className='px-3 sm:px-[13px] md:px-3.5 lg:px-[15px] xl:px-4 2xl:px-5 py-[11px] sm:py-3 md:py-[13px] lg:py-3.5 xl:py-[15px] 2xl:py-4 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
              </ul>
            </div>
            </div>
            <svg className='w-full px-[20px]' viewBox="0 0 498 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" width="458" height="40" rx="20" fill="#060A1F"/>
            <path d="M0 0H498V0C498 11.0457 489.046 20 478 20H20C8.95431 20 0 11.0457 0 0V0Z" fill="#0C133A"/>
            </svg>
          </SwiperSlide>

          <SwiperSlide>
            <div className='leadingsderad p-px'>
            <div className='borderanotherfeds px-3.5 sm:px-[15px] md:px-4 lg:px-5 xl:px-6 2xl:px-[30px] pt-3.5 sm:pt-[15px] md:pt-4 lg:pt-5 xl:pt-6 2xl:pt-[31px] pb-4 sm:pb-5 md:pb-6 lg:pb-8 xl:pb-9 2xl:pb-10 relative'>
              <Image className='absolute top-0 mx-auto' src={imagedoted} alt='Loading...'/>
              <Image className='w-8 md:w-9 lg:w-10 xl:w-12 2xl:w-[60px] h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[60px] mx-auto' src={imageone} alt='Loading...'/>
              <h3 className='sodigasaswe text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>Community</h3>
              <p className='fdisannumbelit text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] pt-1 pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16px]'>Find support across a growing number of <br className='sm:block hidden'/> Litecoin communities:</p>
              <div className='lineroneaszd mx-auto'></div>
              <ul className='grid grid-cols-2 gap-1 md:gap-2 pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                <button className='px-3 sm:px-[13px] md:px-3.5 lg:px-[15px] xl:px-4 2xl:px-5 py-[11px] sm:py-3 md:py-[13px] lg:py-3.5 xl:py-[15px] 2xl:py-4 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
                <button className='px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center gap-1 md:gap-2 litecoin'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px]' viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="url(#paint0_radial_1401_2733)"/>
                    <defs>
                      <radialGradient id="paint0_radial_1401_2733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 6) rotate(-90) scale(6 5)">
                        <stop stop-color="#080808"/>
                        <stop offset="1" stop-color="#8059E3"/>
                      </radialGradient>
                    </defs>
                  </svg> Litecoin Forums
                </button>
              </ul>
            </div>
            </div>
            <svg className='w-full px-[20px]' viewBox="0 0 498 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" width="458" height="40" rx="20" fill="#060A1F"/>
            <path d="M0 0H498V0C498 11.0457 489.046 20 478 20H20C8.95431 20 0 11.0457 0 0V0Z" fill="#0C133A"/>
            </svg>
          </SwiperSlide>
        </Swiper>
          <div className='flex itmes-center gap-5 col-span-2'  id="pin-windmill-svg">
            <button className="block md:hidden custom-next transition hover:scale-110 hover:opacity-80 duration-300 col-span-1 relative h-fit rounded-full col-start-3">
              <div class="absolute inset-0 block h-full w-full animate-gradient bg-linear-to-tr from-[#ffffff63] via-[#fff0] to-[#ffffff63] bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"></div>
              <svg
                className='rounded-full w-[36px] sm:w-[40px] md:w-[48px] lg:w-[64px] xl:w-[96px] 2xl:w-full'
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="120"
                  height="120"
                  rx="60"
                  transform="matrix(-1 0 0 1 120 0)"
                  fill="black"
                  fillOpacity="0.01"
                />
                <path
                  d="M57.5703 53.9299L51.5003 59.9999L57.5703 66.0699"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M68.5 60H51.67"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Custom Next Button */}
            <button className="custom-prev cursor-pointer transition hover:scale-110 hover:opacity-80 duration-300 col-span-1 2xl:col-span-2 relative 2xl:w-1/2 h-fit rounded-full ml-auto">
              <div class="absolute inset-0 block h-full w-full animate-gradient bg-linear-to-br from-[#ffffff63] via-[#fff0] to-[#ffffff63] bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"></div>
              <svg className='rounded-full w-[36px] sm:w-[40px] md:w-[48px] lg:w-[64px] xl:w-[96px] 2xl:w-full' viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="120" rx="60" fill="black" fill-opacity="0.01"/>
              <path d="M62.4297 53.9299L68.4997 59.9999L62.4297 66.0699" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M51.5 60H68.33" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </button>
        </div>
      </div>
    </div>
  );
};

export default Pagefive;
