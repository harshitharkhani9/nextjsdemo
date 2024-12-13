'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './FeaturedSlider.css';

export default function FeaturedSlider() {
    const handleNextClickArrival = (selector: string) => {
        const swiper = (document.querySelector(selector) as any)?.swiper;
        swiper && swiper.slideNext();
    };
    
    const handlePrevClickArrival = (selector: string) => {
      const swiper = (document.querySelector(selector) as any)?.swiper;
      swiper && swiper.slidePrev();     
    };

  return (
    <section className="arrivalslider-wrapper py-50">
      <div className="arrivalslider">
        <div className="container-fluid">
          <div className="arrivalslider__top flex flex-wrap md:justify-between justify-center items-center">
            <div className="arrivalslider__title titleblack_reg">
              <h2><span>New</span> Arrivals</h2>
            </div>
            <div className="arrivalslider__arrow md:block hidden">
              <div className="swiper-arrow relative flex items-center  gap-x-[8px]">
                <div
                  className={`swiper-button-prevarrival arrivalslider_swiperarrow`}
                  onClick={() =>
                    handlePrevClickArrival('.arrivalslider__loop .swiper')
                  }
                >
                  <Image
                    src="assets/images/arrow-left.svg"
                    className="w-[24px] h-[24px] object-contain block"
                    width={24}
                    height={24}
                    alt="Arrow"
                  />
                </div>
                <div
                  className="swiper-button-nextarrival arrivalslider_swiperarrow"
                  onClick={() =>
                    handleNextClickArrival('.arrivalslider__loop .swiper')
                  }
                >
                  <Image
                    src="assets/images/arrow-right.svg"
                    className="w-[24px] h-[24px] object-contain block"
                    width={24}
                    height={24}
                    alt="Arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arrivalslider__main pt-30">
          <div className="container-fluid !pr-0">
            <div className="arrivalslider__loop">
              <Swiper
                spaceBetween={16}
                loop={true}
                slidesPerView={3.4}
                speed={800}
                autoplay={{
                  delay: 1200,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: { 
                    slidesPerView: 1.4,
                  },
                  641: {
                    slidesPerView: 2.5,
                  },
                  1024: {
                    slidesPerView: 3.4,
                  },
                }}
                navigation={{
                  nextEl: '.swiper-button-nextarrival',
                  prevEl: '.swiper-button-prevarrival',
                }}
                modules={[Navigation, Autoplay]}
                className="arrival-slider"
              >
                <SwiperSlide key="0">
                  <div className="arrivalslider__item relative overflow-hidden">
                    <div className="arrivalslider__itemimg">
                      <Link href="#">
                        <div className="arrivalslider__itemimgmain">
                          <Image
                            src="/assets/images/wineimage-1.png"
                            className="w-full h-[350px] object-contain block rounded-5"
                            width={380}
                            priority
                            height={240}
                            alt="product image"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="arrivalslider__producttitle lg:pt-16 pt-10 text-center">
                      <Link href="#">Product Title</Link>
                    </div>
                    <div className="arrivalslider__btn pt-16 addtocart text-center leading-0">
                      <Link href="#" className="btn_primary">
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide key="1">
                  <div className="arrivalslider__item relative overflow-hidden">
                    <div className="arrivalslider__itemimg">
                      <Link href="#">
                        <div className="arrivalslider__itemimgmain">
                          <Image
                            src="/assets/images/wineimage-2.png"
                            className="w-full h-[350px] object-contain block rounded-5"
                            width={380}
                            priority
                            height={240}
                            alt="product image"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="arrivalslider__producttitle lg:pt-16 pt-10 text-center">
                      <Link href="#">Product Title</Link>
                    </div>
                    <div className="arrivalslider__btn pt-16 addtocart text-center leading-0">
                      <Link href="#" className="btn_primary">
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide key="2">
                  <div className="arrivalslider__item relative overflow-hidden">
                    <div className="arrivalslider__itemimg">
                      <Link href="#">
                        <div className="arrivalslider__itemimgmain">
                          <Image
                            src="/assets/images/wineimage-3.png"
                            className="w-full h-[350px] object-contain block rounded-5"
                            width={380}
                            priority
                            height={240}
                            alt="product image"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="arrivalslider__producttitle lg:pt-16 pt-10 text-center">
                      <Link href="#">Product Title</Link>
                    </div>
                    <div className="arrivalslider__btn pt-16 addtocart text-center leading-0">
                      <Link href="#" className="btn_primary">
                        Add to Cart 
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide key="3">
                  <div className="arrivalslider__item relative overflow-hidden">
                    <div className="arrivalslider__itemimg">
                      <Link href="#">
                        <div className="arrivalslider__itemimgmain">
                          <Image
                            src="/assets/images/wineimage-4.png"
                            className="w-full h-[350px] object-contain block rounded-5"
                            width={380}
                            priority
                            height={240}
                            alt="product image"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="arrivalslider__producttitle lg:pt-16 pt-10 text-center">
                      <Link href="#">Product Title</Link>
                    </div>
                    <div className="arrivalslider__btn pt-16 addtocart text-center leading-0">
                      <Link href="#" className="btn_primary">
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide key="4">
                  <div className="arrivalslider__item relative overflow-hidden">
                    <div className="arrivalslider__itemimg">
                      <Link href="#">
                        <div className="arrivalslider__itemimgmain">
                          <Image
                            src="/assets/images/wineimage-5.png"
                            className="w-full h-[350px] object-contain block rounded-5"
                            width={380}
                            priority 
                            height={240}
                            alt="product image"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="arrivalslider__producttitle lg:pt-16 pt-10 text-center">
                      <Link href="#">Product Title</Link>
                    </div>
                    <div className="arrivalslider__btn pt-16 addtocart text-center leading-0">
                      <Link href="#" className="btn_primary">
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
