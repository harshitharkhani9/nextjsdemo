import React , { ReactNode, Suspense }from "react";
import type { Metadata } from "next";
import Header from "@/components/ui/layout/Header/Header";
import Footer from "@/components/ui/layout/Footer/Footer";
import Loading from "../loading";

export const metadata: Metadata = {
    title: "Wine",
    description: "Wine shop",
  };

interface LayoutProps {
    children: ReactNode;
  }

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
        <Header />
            <Suspense fallback={<Loading />}></Suspense>
            {children}
        <Footer />
    </>
  );
};

export default AppLayout;   