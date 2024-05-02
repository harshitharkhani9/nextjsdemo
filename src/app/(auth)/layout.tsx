import React , { ReactNode }from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Whiskwhet",
    description: "whiskwhet beer shop",
  };

interface LayoutProps {
    children: ReactNode;
}

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="font-sans text-gray-900 antialiased bg-white h-screen">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;  


// export default function AuthLayout({
//     children,
//   }: {
//     children: React.ReactNode
//   }) {
//     return (
//         {children}
//     ); 
//   }