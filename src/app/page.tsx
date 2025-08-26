"use client";
import HeroSection from "@/components/HeroSection";
import HeaderNav from "../components/HeaderNav";

export default function Home() {
  return (
    <div className="h-full w-full">
      <HeaderNav />
      <HeroSection />
    </div>
  );
}
