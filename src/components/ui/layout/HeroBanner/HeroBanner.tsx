'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

import '../HeroBanner/HeroBanner.css'

export default function HeroBanner() {
    return (
        <>
            <section className="herobanner-wrapper py-40 overflow-hidden">
                <div className="herobanner">
                    <div className="container-fluid">
                        <div className="herobanner_inner">
                            <div className="herobanner_row flex items-center lg:flex-row flex-col-reverse flex-wrap gap-y-30">
                                <div className="lg:w-6/12 w-full leading-0">
                                    <div className="herobanner_content lg:pr-30">
                                        <div className="herobanner_title">
                                            <h2 className="xl:text-[80px] xl:leading-[90px] lg:text-40 lg:leading-[50px] text-28 leading-36 font-primary font-500">THE LARGEST <span className="text-primary">WINE</span> CLUB IN THE WORLD!</h2>
                                        </div>
                                        <div className="herobanner_desc pt-20 max-w-[550px] content text-brown">
                                            <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi.
                                            </p>
                                        </div>
                                        <div className="herobanner_btn pt-30">
                                            <Link href="#" className="btn_primary">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-6/12 w-full leading-0">
                                    <div className="herobanner_image leading-0 lg:rotate-12">
                                        <div className="herobanner_imgitem relative lg:pt-[85%] sm:pt-[60%] pt-[100%]">
                                            <Image 
                                                src="/assets/images/wineimage-1.png"
                                                className="block object-contain absolute top-0 left-0 w-full h-full"
                                                width="500"
                                                priority 
                                                height="400"
                                                alt="banner image"
                                            />
                                        </div>
                                    </div>  
                                </div>
                            </div>          
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};