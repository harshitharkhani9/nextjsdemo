'use client';

import React from "react";
import Image from "next/image";

import './InnerBanner.css'

export default function InnerBanner() {
    return (
        <section className="innerbanner-wrapper h-[350px] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:bg-opacity-60 before:z-1">
            <div className="innerbanner_image absolute top-0 left-0 w-full h-full">
                <Image 
                    src="/assets/images/inner-banner-bg.jpg"
                    alt="Banner bg"
                    className="w-full h-full object-cover block"
                    width={1920}
                    height={350}
                    loading="lazy"
                >
                </Image>
            </div>
            <div className="innerbanner relative z-[2] h-full flex justify-center items-center">
                <div className="innerbanner_title text-center">
                    <h1>About Us</h1>
                </div>
            </div>
        </section>
    );
};