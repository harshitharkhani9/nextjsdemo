"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import '../LoadMoreList/LoadMoreList.css'

const LoadMoreList = () => {
  const [visibleItems, setVisibleItems] = useState(6); // Initial number of visible items
  const itemsPerPage = 3; // Number of items to show per click

  const itemsData = [
    {
      id: 1,
      title: "Product Title 1",
      imageUrl: "/assets/images/wineimage-1.png",
      hoverimageUrl: "/assets/images/wineimage-2.png",
    },
    {
      id: 2,
      title: "Product Title 2",
      imageUrl: "/assets/images/wineimage-2.png",
      hoverimageUrl: "/assets/images/wineimage-3.png",
    },
    {
      id: 3,
      title: "Product Title 3",
      imageUrl: "/assets/images/wineimage-3.png",
      hoverimageUrl: "/assets/images/wineimage-4.png",
    },
    {
      id: 4,
      title: "Product Title 4",
      imageUrl: "/assets/images/wineimage-4.png",
      hoverimageUrl: "/assets/images/wineimage-5.png",
    },
    {
      id: 5,
      title: "Product Title 5",
      imageUrl: "/assets/images/wineimage-5.png",
      hoverimageUrl: "/assets/images/wineimage-6.png",
    },
    {
      id: 6,
      title: "Product Title 6",
      imageUrl: "/assets/images/wineimage-6.png",
      hoverimageUrl: "/assets/images/wineimage-5.png",
    },
    {
      id: 7,
      title: "Product Title 1",
      imageUrl: "/assets/images/wineimage-1.png",
      hoverimageUrl: "/assets/images/wineimage-4.png",
    },
    {
      id: 8,
      title: "Product Title 2",
      imageUrl: "/assets/images/wineimage-2.png",
      hoverimageUrl: "/assets/images/wineimage-3.png",
    },
    {
      id: 9,
      title: "Product Title 3",
      imageUrl: "/assets/images/wineimage-3.png",
      hoverimageUrl: "/assets/images/wineimage-2.png",
    },
    {
      id: 10,
      title: "Product Title 4",
      imageUrl: "/assets/images/wineimage-4.png",
      hoverimageUrl: "/assets/images/wineimage-1.png",
    },
    {
      id: 11,
      title: "Product Title 5",
      imageUrl: "/assets/images/wineimage-5.png",
      hoverimageUrl: "/assets/images/wineimage-6.png",
    },
    {
      id: 12,
      title: "Product Title 6",
      imageUrl: "/assets/images/wineimage-6.png",
      hoverimageUrl: "/assets/images/wineimage-5.png",
    },
  ];

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerPage);
  };

  return (
    <section className="listgrid-wrapper py-50">
      <div className="listgrid">
        <div className="container-fluid">
          <div className="titleblack_reg pb-30">
            <h2><span>OUR</span> FAVORITES</h2>
          </div>
          <div className="listgrid_main grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-[40px] gap-x-[35px]">
            {itemsData.slice(0, visibleItems).map((item) => (
              <div
                key={item.id}
                className="listitem cursor-pointer p-24 rounded-6 h-full bg-grey-200 transition-all duration-500 ease-in-out hover:bg-primary hover:bg-opacity-10 rounded-5 shadow-hard_shadow"
              >
                <div className="arrivalslider__item relative overflow-hidden">
                  <div className="arrivalslider__itemimg">
                    <Link href="#">
                      <div className="arrivalslider__itemimgmain h-[350px] relative overflow-hidden">
                        <Image
                          src={item.imageUrl}
                          className="static_image w-full h-full object-contain block rounded-5 transition-all duration-500 ease-in-out"
                          width={380}
                          priority
                          height={240}
                          alt="product image"
                        />
                        <Image
                          src={item.hoverimageUrl}
                          className="hover_image w-full h-full object-contain block rounded-5 transition-all duration-500 ease-in-out"
                          width={380}
                          priority
                          height={240}
                          alt="product image"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="arrivalslider__producttitle lg:pt-16 pt-10 text-center">
                    <Link href="#">{item.title}</Link>
                  </div>
                  <div className="arrivalslider__btn pt-16 addtocart text-center leading-0">
                    <Link href="#" className="btn_primary">
                      Add to Bag
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {visibleItems < itemsData.length && (
            <div className="listgrid_loadmore text-center lg:pt-70 pt-40">
              <button
                className="btn_secondary whatwesayloadmore_btn"
                onClick={handleLoadMore}
              >
                load more
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoadMoreList;
