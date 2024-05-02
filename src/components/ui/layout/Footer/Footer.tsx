'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";

import '../Footer/Footer.css';

export default function Footer() {
    return (
    <>
        <footer className="footer py-40 bg-footer_gradient">
            <div className="container-fluid">
                <div className="footer_inner flex flex-col gap-20">
                    <div className="footer_logo text-center">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/assets/images/logo.png"
                                className="block w-full h-auto sm:max-w-[200px] max-w-[160px] object-contain"
                                priority
                                width="260"
                                height="120"              
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="footer_desc content text-center max-w-[500px] mx-auto">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>  
                    </div>
                    <div className="footer_menu menuhover_linkanimate">
                        <ul>
                            <li>
                                <Link href="#">About</Link>
                            </li>
                            <li>
                                <Link href="#">Shop</Link>  
                            </li>
                            <li>
                                <Link href="#">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_social mt-10">
                        <div className="footer_socialtitle mb-5">
                            <h5 className="text-center text-black font-500 text-18 leading-26">JOIN THE CONVERSATION</h5>
                        </div>  
                        <ul>
                            <li>
                                <Link href="#">
                                    <Image
                                        src="/assets/images/social-icon/facebook-f.svg"
                                        priority
                                        width="20"
                                        height="20"
                                        alt="social icon"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Image
                                        src="/assets/images/social-icon/instagram.svg"
                                        priority
                                        width="20"
                                        height="20"
                                        alt="social icon"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Image
                                        src="/assets/images/social-icon/x-twitter.svg"
                                        priority
                                        width="20"
                                        height="20"
                                        alt="social icon"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Image
                                        src="/assets/images/social-icon/basketball-solid.svg"
                                        priority
                                        width="20"
                                        height="20"
                                        alt="social icon"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>    
            </div>
        </footer>
    </>
    );
}