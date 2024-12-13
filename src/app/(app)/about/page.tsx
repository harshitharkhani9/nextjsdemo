import React from "react";
import InnerBanner from "@/components/ui/layout/InnerBanner/InnerBanner";
import Zigzag from "@/components/ui/layout/Zigzag/Zigzag";
import MultiZigzag from "@/components/ui/layout/MultiZigzag/MultiZigzag";

export const metadata = {
  title: "Whiskwhet | About",
  description: "About",
};
export default async function about() {
  return (
    <>
      <InnerBanner />
      <Zigzag />
      <MultiZigzag />
    </>
  );
}
