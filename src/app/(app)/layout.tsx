import React , { ReactNode }from "react";
import type { Metadata } from "next";
import Header from "@/components/ui/layout/Header/Header";
import Footer from "@/components/ui/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Whiskwhet",
    description: "whiskwhet beer shop",
  };

interface LayoutProps {
    children: ReactNode;
  }

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
        <Header />
            {children}
        <Footer />
    </>
  );
};

export default AppLayout;   