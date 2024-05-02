"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

import "../Header/Header.css";

interface MobileMenuSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuSidebar: React.FC<MobileMenuSidebarProps> = ({ isOpen, onClose }) => {
  const MobileMenuSidebarRef = useRef<HTMLDivElement>(null);

  const toggleBodyHtmlClass = (add: boolean) => {
    const htmlElement = document.querySelector("html");
    const bodyElement = document.querySelector("body");

    if (htmlElement && bodyElement) {
      if (add) {
        htmlElement.classList.add("menusidebar_Active");
        bodyElement.classList.add("menusidebar_Active");
      } else {
        htmlElement.classList.remove("menusidebar_Active");
        bodyElement.classList.remove("menusidebar_Active");
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        MobileMenuSidebarRef.current &&
        !MobileMenuSidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleBodyClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  useEffect(() => {
    toggleBodyHtmlClass(isOpen);
  }, [isOpen]);

  const handleMenuSidebarCloseClick = () => {
    onClose();
  };

  return (
    <div ref={MobileMenuSidebarRef} className="menusidebarmain">
      <div
        className={`menusidebar ${isOpen ? "active" : ""}`}
        onClick={handleBodyClick}
      >
        <div className="menusidebarheader mb-25 pb-16 border-b-1 border-solid border-grey-300 flex items-center justify-end gap-x-12">
          <div
            className="menusidebarclose cursor-pointer"
            onClick={handleMenuSidebarCloseClick}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="fi:x">
                <path
                  id="Vector"
                  d="M18 6L6 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M6 6L18 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="menusidebar_content">
          <div className="sidebar_menu menuhover_linkanimate">
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
        </div>
      </div>
    </div>
  );
};

export default MenuSidebar;
