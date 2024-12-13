'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

import './Zigzag.css'

export default function Zigzag() {
    return(
        <>
            <section className="zigzag-wrapper py-50">
                {/* Note: If you want to reverse the section please add "zigzag_reverse" class in zigzag-wrapper div element. */}
                <div className="zigzag">
                    <div className="container-fluid">
                        <div className="zigzag_inner">
                            <div className="zigzag_row items-center grid lg:grid-cols-2 grid-cols-1 gap-x-14 gap-y-8">
                                <div className="zigzag_column">
                                    <div className="zigzag_image relative pt-[56.14%]">
                                        <Image
                                            src="/assets/images/zigzag-image.jpg"
                                            alt="zigzag image"
                                            className="absolute top-0 left-0 w-full h-full object-cover block"
                                            width={600}
                                            height={600}
                                            loading="lazy"
                                        ></Image>
                                    </div>
                                </div>
                                <div className="zigzag_column">
                                    <div className="zigzag_content">
                                        <div className="zigzag_title titleblack_common">
                                            <h2><span>Lorem Ipsum</span> is simply dummy text</h2>
                                        </div>
                                        <div className="zigzag_desc lg:pt-30 pt-15 content_black content">
                                            <p>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                            <p>
                                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            </p>
                                        </div>
                                        <div className="zigzag_btn lg:pt-40 pt-25 leading-0">
                                            <Link href="#" className="btn_primary">Shop Now</Link>
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