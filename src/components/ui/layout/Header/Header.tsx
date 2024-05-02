'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";

import '../Header/Header.css';

export default function Header() {
    return (
      <>
        <header className="header bg-white py-20">
          <div className="header_inner">
            <div className="container-fluid">
              <div className="header_row flex justify-between gap-20 items-center">
                <div className="header_logo leading-0">
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
                <div className="header_menu lg:block hidden menuhover_linkanimate">
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
                <div className="mobile_togglebtn lg:hidden block">
                  <div className="mobilemenu_toggle rotate-180 scale-y-[-1] cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 6L10 6"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M4 18L14 18"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M4 12L20 12"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
}