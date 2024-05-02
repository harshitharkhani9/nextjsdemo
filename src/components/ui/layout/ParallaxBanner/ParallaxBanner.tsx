"use client";

import React from "react";

import "../ParallaxBanner/ParallaxBanner.css";

export default function ParallaxBanner() {
  return (
    <>
      <section className="herobanner-wrapper py-40 overflow-hidden">
        <div
          className="herobanner h-[800px] bg-cover bg-center bg-fixed w-full"
          style={{ backgroundImage: `url('/assets/images/wine-bg.jpg')` }}
        ></div>
      </section>
    </>
  );
}
