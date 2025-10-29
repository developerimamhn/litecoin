'use client';


import { useEffect, useRef } from "react";
import Image from 'next/image';
import imageone from './image/Figure - Abstract Dots → 1xOqMa4sAAwBCrdkiSJfIXups.png.png';
import imagetwo from './image/image 13.png';
import imagethree from './image/image 14.png';
import imagefore from './image/image 15.png';
import imagefive from './image/image 16.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PageLogo = () => {
    const listRefs = useRef([]);
    const wrapperRef = useRef(null); // Outer container
  const gridItem1Ref = useRef(null); // First grid item (text content)
  const acquireRef = useRef(null); // Second grid item (image)
  

  useEffect(() => {
    // Create GSAP context for proper scoping and cleanup
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
        },
        (context) => {
          const { isDesktop } = context.conditions;

          if (isDesktop) {
            // Create a timeline for better control and sequencing
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: 'top 80%',
                end: 'bottom 10%', // Desktop-specific values
                scrub: 0.8,
              },
            });
            tl.fromTo(
              wrapperRef.current,
              { y: -100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out',
              },
              0 
            );
            tl.fromTo(
              gridItem1Ref.current,
              { y: 150, opacity: 0, scale: 0.95 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
              },
              0.1 // Slight stagger
            );

            // Second grid item (image) animation (faster right to left)
            tl.fromTo(
              acquireRef.current,
              { y: 50, opacity: 0, scale: 0.95 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6, // Faster animation
                ease: 'power3.out',
              },
              0.25 // Stagger for visual hierarchy
            );
          }
        }
      );
    }, wrapperRef); // Scope animations to wrapperRef for React's strict mode

    // Cleanup GSAP context and animations
    return () => ctx.revert();
  }, []);

  // useEffect(() => {
  //   gsap.fromTo(
  //     listRefs.current,
  //     { y: 30, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.6,
  //       stagger: 0.15,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: listRefs.current[0],
  //         start: "top 85%",
  //         end: "bottom 50%",
  //         toggleActions: "play none none none",
  //       },
  //     }
  //   );
  // }, []);

  const textReff = useRef(null);

  useEffect(() => {
    const el = textReff.current;
    const words = el.textContent.split(" ");
    el.textContent = "";

    words.forEach((word) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.style.display = "inline-block";
      // span.style.opacity = 0;
      // span.style.transform = "translateY(30px)";
      span.style.color = "#565363";
      el.appendChild(span);
    });

    gsap.to(el.children, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%", // start animation when paragraph comes 80% into view
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      color: "#ffffff",
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1,
    });
  }, []);
  // 
    return (
        <div className='relative  pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[96px] 2xl:pt-[131px] sm:px-0 px-[24px] 2xl:px-[128px]'>
          <Image className="absolute top-0 left-0 h-1/2 z-2" src={imageone} alt="Loading..."/>
          <div className="flex items-center flex-col  justify-center relative z-10 container mx-auto">
            <div ref={wrapperRef} className='svgsasdf w-fit flex items-center justify-center mb-[32px] sm:mb-[36px] md:mb-[40px] lg:mb-[48px] xl:mb-[64px] 2xl:mb-[84px]'>
                <button className='buttonauditeltsss relative cursor-pointer text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center py-[7px] sm:py-[8px] md:py-[6px] pr-[10px] sm:pr-[11px] md:pr-[12px] lg:pr-[13px] xl:pr-[14px] 2xl:pr-[15px] group gap-[7.50px] pl-[7px] sm:pl-[8px] md:pl-[6px]'>
                    <div
                        class="absolute left-1/2 -translate-x-1/2 -top-px block h-px w-[80%]  animate-gradient bg-linear-to-r from-[#4f1ad600]  via-[#4F1AD6] bg-size-[var(--bg-size)_100%] rounded-[inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-px mask-subtract!"
                    ></div>
                    <svg className="w-[22px] md:w-[25px] xl:w-[29px]" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="29" height="29" rx="14.5" fill="url(#paint0_linear_1401_2768)"/>
<path opacity="0.2" d="M18.5556 14.2551L19.4077 13.1887C19.2928 12.7567 19.1208 12.3419 18.8964 11.9553L17.5405 11.8029C17.4322 11.6809 17.3167 11.5654 17.1947 11.4571L17.0423 10.1007C16.6553 9.87761 16.2403 9.70685 15.8084 9.59292L14.742 10.4445C14.5789 10.4349 14.4155 10.4349 14.2524 10.4445L13.186 9.59241C12.7554 9.70768 12.342 9.87964 11.9566 10.1038L11.8043 11.4596C11.6822 11.5679 11.5667 11.6834 11.4584 11.8055L10.1021 11.9578C9.87895 12.3448 9.70819 12.7598 9.59426 13.1918L10.4459 14.2582C10.4362 14.4212 10.4362 14.5847 10.4459 14.7477L9.59375 15.8141C9.70868 16.2462 9.88065 16.661 10.1051 17.0476L11.461 17.1999C11.5693 17.322 11.6848 17.4375 11.8068 17.5458L11.9591 18.9021C12.3462 19.1253 12.7611 19.296 13.1931 19.4099L14.2595 18.5583C14.4226 18.568 14.586 18.568 14.7491 18.5583L15.8155 19.4105C16.2475 19.2955 16.6623 19.1236 17.0489 18.8991L17.2013 17.5432C17.3233 17.4349 17.4388 17.3194 17.5471 17.1974L18.9035 17.0451C19.1266 16.658 19.2974 16.2431 19.4113 15.8111L18.5597 14.7447C18.568 14.5816 18.5666 14.4181 18.5556 14.2551ZM14.5002 16.5312C14.0985 16.5312 13.7058 16.412 13.3717 16.1888C13.0377 15.9656 12.7773 15.6484 12.6236 15.2772C12.4699 14.9061 12.4296 14.4977 12.508 14.1036C12.5864 13.7096 12.7798 13.3477 13.0639 13.0636C13.348 12.7795 13.7099 12.5861 14.104 12.5077C14.498 12.4293 14.9064 12.4695 15.2776 12.6233C15.6487 12.777 15.966 13.0374 16.1892 13.3714C16.4124 13.7054 16.5315 14.0982 16.5315 14.4999C16.5315 15.0386 16.3175 15.5553 15.9365 15.9362C15.5556 16.3172 15.039 16.5312 14.5002 16.5312Z" fill="white"/>
<path d="M14.5003 12.0625C14.0182 12.0625 13.547 12.2054 13.1461 12.4733C12.7453 12.7411 12.4329 13.1218 12.2484 13.5672C12.0639 14.0126 12.0156 14.5027 12.1097 14.9755C12.2037 15.4483 12.4359 15.8826 12.7768 16.2235C13.1176 16.5644 13.552 16.7966 14.0248 16.8906C14.4976 16.9847 14.9877 16.9364 15.4331 16.7519C15.8785 16.5674 16.2592 16.255 16.527 15.8542C16.7949 15.4533 16.9378 14.9821 16.9378 14.5C16.9372 13.8537 16.6801 13.2341 16.2232 12.7771C15.7662 12.3202 15.1466 12.0631 14.5003 12.0625ZM14.5003 16.125C14.1789 16.125 13.8648 16.0297 13.5975 15.8511C13.3303 15.6725 13.122 15.4188 12.999 15.1218C12.876 14.8249 12.8439 14.4982 12.9066 14.1829C12.9693 13.8677 13.124 13.5782 13.3513 13.3509C13.5785 13.1237 13.8681 12.9689 14.1833 12.9062C14.4985 12.8435 14.8253 12.8757 15.1222 12.9987C15.4191 13.1217 15.6729 13.3299 15.8515 13.5972C16.03 13.8644 16.1253 14.1786 16.1253 14.5C16.1253 14.9309 15.9541 15.3443 15.6494 15.649C15.3446 15.9538 14.9313 16.125 14.5003 16.125ZM18.9691 14.6096C18.9711 14.5365 18.9711 14.4634 18.9691 14.3903L19.7267 13.4437C19.7665 13.394 19.794 13.3357 19.807 13.2734C19.8201 13.2111 19.8183 13.1467 19.8019 13.0852C19.6775 12.6184 19.4917 12.1701 19.2494 11.7522C19.2176 11.6975 19.1736 11.651 19.1207 11.6163C19.0678 11.5817 19.0075 11.5599 18.9447 11.5526L17.7402 11.4186C17.6901 11.3657 17.6393 11.315 17.5878 11.2662L17.4456 10.0586C17.4383 9.99577 17.4164 9.93549 17.3817 9.88259C17.347 9.82969 17.3003 9.78564 17.2456 9.75395C16.8276 9.51185 16.3794 9.32639 15.9126 9.20246C15.8511 9.18604 15.7866 9.18428 15.7243 9.19734C15.6621 9.21039 15.6037 9.23789 15.554 9.27762L14.61 10.0312C14.5369 10.0312 14.4638 10.0312 14.3906 10.0312L13.4441 9.27508C13.3944 9.23535 13.336 9.20785 13.2738 9.1948C13.2115 9.18175 13.147 9.1835 13.0856 9.19992C12.6188 9.32435 12.1705 9.51014 11.7526 9.75242C11.6979 9.78417 11.6514 9.82825 11.6167 9.88115C11.5821 9.93404 11.5602 9.9943 11.553 10.0571L11.4189 11.2637C11.3661 11.3141 11.3153 11.3649 11.2666 11.416L10.059 11.5546C9.99614 11.562 9.93586 11.5839 9.88296 11.6186C9.83006 11.6533 9.78601 11.7 9.75431 11.7547C9.51226 12.1727 9.32665 12.621 9.20232 13.0877C9.18597 13.1492 9.18429 13.2137 9.19744 13.276C9.21058 13.3383 9.23817 13.3966 9.27798 13.4463L10.0316 14.3903C10.0316 14.4634 10.0316 14.5365 10.0316 14.6096L9.27545 15.5562C9.23572 15.6059 9.20822 15.6642 9.19517 15.7265C9.18211 15.7888 9.18387 15.8533 9.20029 15.9147C9.32472 16.3815 9.5105 16.8298 9.75279 17.2477C9.78454 17.3024 9.82862 17.3489 9.88151 17.3836C9.93441 17.4182 9.99466 17.44 10.0575 17.4473L11.262 17.5814C11.3125 17.6342 11.3632 17.685 11.4144 17.7337L11.555 18.9413C11.5623 19.0042 11.5842 19.0644 11.619 19.1173C11.6537 19.1702 11.7003 19.2143 11.7551 19.246C12.1731 19.488 12.6213 19.6736 13.0881 19.798C13.1496 19.8143 13.2141 19.816 13.2764 19.8029C13.3386 19.7897 13.397 19.7621 13.4466 19.7223L14.3906 18.9687C14.4638 18.9707 14.5369 18.9707 14.61 18.9687L15.5566 19.7264C15.6063 19.7661 15.6646 19.7936 15.7269 19.8066C15.7892 19.8197 15.8536 19.8179 15.9151 19.8015C16.382 19.6773 16.8302 19.4915 17.2481 19.249C17.3028 19.2173 17.3493 19.1732 17.3839 19.1203C17.4186 19.0674 17.4404 19.0072 17.4477 18.9443L17.5817 17.7398C17.6345 17.6897 17.6853 17.6389 17.7341 17.5875L18.9417 17.4453C19.0045 17.438 19.0648 17.4161 19.1177 17.3813C19.1706 17.3466 19.2147 17.3 19.2463 17.2452C19.4884 16.8272 19.674 16.3789 19.7983 15.9122C19.8147 15.8507 19.8164 15.7862 19.8032 15.7239C19.7901 15.6616 19.7625 15.6033 19.7227 15.5537L18.9691 14.6096ZM18.1515 14.2796C18.1601 14.4264 18.1601 14.5736 18.1515 14.7204C18.1455 14.8209 18.1769 14.92 18.2399 14.9986L18.9604 15.899C18.8778 16.1618 18.7719 16.4167 18.6441 16.6607L17.4964 16.7907C17.3965 16.8018 17.3042 16.8496 17.2374 16.9248C17.1397 17.0347 17.0356 17.1388 16.9256 17.2366C16.8504 17.3033 16.8027 17.3956 16.7916 17.4955L16.6641 18.6422C16.4201 18.7701 16.1652 18.8759 15.9024 18.9586L15.0015 18.238C14.9295 18.1804 14.8399 18.149 14.7476 18.1491H14.7233C14.5765 18.1577 14.4293 18.1577 14.2825 18.1491C14.182 18.1433 14.0829 18.1748 14.0042 18.2375L13.1013 18.9586C12.8385 18.8759 12.5836 18.77 12.3396 18.6422L12.2096 17.4961C12.1985 17.3961 12.1507 17.3038 12.0755 17.2371C11.9656 17.1393 11.8615 17.0352 11.7637 16.9253C11.697 16.8501 11.6047 16.8023 11.5047 16.7912L10.3581 16.6632C10.2302 16.4192 10.1244 16.1643 10.0417 15.9015L10.7623 15.0007C10.8252 14.9221 10.8567 14.8229 10.8507 14.7224C10.842 14.5756 10.842 14.4284 10.8507 14.2816C10.8567 14.1811 10.8252 14.0819 10.7623 14.0033L10.0417 13.1009C10.1244 12.8382 10.2303 12.5833 10.3581 12.3392L11.5042 12.2092C11.6042 12.1981 11.6965 12.1504 11.7632 12.0752C11.861 11.9652 11.9651 11.8611 12.075 11.7634C12.1505 11.6966 12.1985 11.6041 12.2096 11.5039L12.337 10.3577C12.5811 10.2299 12.836 10.124 13.0988 10.0414L13.9996 10.762C14.0782 10.8249 14.1774 10.8564 14.2779 10.8503C14.4247 10.8417 14.5719 10.8417 14.7187 10.8503C14.8192 10.8561 14.9182 10.8246 14.997 10.762L15.8994 10.0414C16.1621 10.1241 16.417 10.2299 16.6611 10.3577L16.7911 11.5039C16.8022 11.6038 16.8499 11.6961 16.9251 11.7629C17.0351 11.8606 17.1392 11.9647 17.2369 12.0746C17.3037 12.1499 17.396 12.1976 17.4959 12.2087L18.6426 12.3362C18.7704 12.5802 18.8763 12.8351 18.9589 13.0979L18.2383 13.9988C18.1748 14.078 18.1433 14.1782 18.15 14.2796H18.1515Z" fill="white"/>
<rect x="0.5" y="0.5" width="28" height="28" rx="14" stroke="white" stroke-opacity="0.15"/>
<defs>
<linearGradient id="paint0_linear_1401_2768" x1="14.5" y1="0" x2="14.5" y2="29" gradientUnits="userSpaceOnUse">
<stop stop-color="#4F1AD6"/>
<stop offset="1" stop-color="#8059E3"/>
</linearGradient>
</defs>
                    </svg>
                    About Us
                </button>
            </div>
            <div>
            <p ref={textReff} className="workingtext text-[16px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] 2xl:px-25">Litecoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world. Litecoin is an open source, global payment network that is fully decentralized without any central authorities.</p></div>
          </div>
        </div>
    );
};

export default PageLogo;