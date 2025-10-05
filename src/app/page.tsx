"use client";
import HeroSection from "@/components/HeroSection";
import HeaderNav from "../components/HeaderNav";
import MobileMenu from "@/components/MobileMenu";
import SkillsFeatureSection from "@/components/SkillsFeatureSection";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="hidden md:block">
        <HeaderNav />
      </div>
      <div className="flex md:hidden">
        <MobileMenu />
      </div>

      <HeroSection />
      <SkillsFeatureSection />
      <ProductShowcase />
    </div>
  );
}
