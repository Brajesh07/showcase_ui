import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  pinColor: string;
  rotation: string;
}

const features: FeatureCard[] = [
  {
    id: 1,
    title: "Hero Section",
    description:
      "Address a key problem directly in the headline. Add a video demo for instant engagement",
    pinColor: "bg-gradient-to-b from-orange-400 to-orange-600",
    rotation: "rotate-2",
  },
  {
    id: 2,
    title: "Advantages",
    description:
      "Showcase 3 main benefits of your product. Each benefit highlighted with a title and brief description",
    pinColor: "bg-gradient-to-b from-blue-400 to-blue-600",
    rotation: "-rotate-1",
  },
  {
    id: 3,
    title: "Apply cases",
    description:
      "Show who benefits most from your product. Explain in one line how each audience type gains value + add some quick social proof",
    pinColor: "bg-gradient-to-b from-purple-400 to-purple-600",
    rotation: "rotate-3",
  },
  {
    id: 4,
    title: "Features",
    description:
      "List core functionalities clearly. Connect features to user advantages where possible",
    pinColor: "bg-gradient-to-b from-orange-400 to-orange-600",
    rotation: "-rotate-2",
  },
  //   {
  //     id: 5,
  //     title: "Call to action",
  //     description:
  //       "CTA that speaks to the user and personalized for the product's niche",
  //     pinColor: "bg-gradient-to-b from-blue-400 to-blue-600",
  //     position: {
  //       desktop: "top-96 left-16",
  //       tablet: "top-56 left-4",
  //     },
  //     rotation: "rotate-1",
  //   },
  //   {
  //     id: 6,
  //     title: "Testimonials",
  //     description:
  //       "Include real faces, links for the proof, success stories, rating and even case studies. The more social proof you have - the better",
  //     pinColor: "bg-gradient-to-b from-purple-400 to-purple-600",
  //     position: {
  //       desktop: "top-64 right-24",
  //       tablet: "top-32 right-8",
  //     },
  //     rotation: "-rotate-3",
  //   },
];

const FloatingCard: React.FC<{ feature: FeatureCard; index: number }> = ({
  feature,
  index,
}) => {
  return (
    <div
      className={cn(
        "w-full sm:w-80 transition-all duration-700 ease-out group cursor-pointer",
        "hover:scale-[1.05] hover:-translate-y-2",
        "md:w-72 sm:w-full sm:relative sm:mb-8",
        feature.rotation,
        "hover:rotate-0",
        "transform-gpu will-change-transform"
      )}
      style={{
        animationDelay: `${index * 0.4}s`,
        transform: `translateZ(0)`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* 3D Liquid Glass Pin/Thumbtack */}
      <div className="absolute top-1 left-4 z-20">
        <div className="relative">
          {/* Pin Shadow with liquid effect */}
          <div className="absolute top-2 left-2 w-5 h-5 bg-black/30 rounded-full blur-md" />

          {/* Pin Body with liquid glass effect */}
          <div
            className={cn(
              "w-5 h-5 rounded-full shadow-xl transition-all duration-500",
              "group-hover:shadow-2xl",
              "backdrop-blur-sm border border-white/30",
              feature.pinColor,
              "relative overflow-hidden"
            )}
          >
            {/* Liquid glass overlay on pin */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 via-transparent to-white/20" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-transparent via-white/30 to-transparent" />
          </div>

          {/* Enhanced Pin Highlight */}
          <div className="absolute top-0.5 left-0.5 w-2.5 h-2.5 bg-white/60 rounded-full blur-[0.5px]" />
          <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/80 rounded-full" />
        </div>
      </div>

      {/* Liquid Glass Morphism Card */}
      <div
        className={cn(
          "relative px-3 py-6 rounded-3xl backdrop-blur-lg border border-white/30",
          "bg-gradient-to-br from-white/20 via-white/10 to-white/20",
          "shadow-[0_8px_32px_rgba(31,38,135,0.37)]",
          "hover:shadow-[0_12px_40px_rgba(31,38,135,0.5)]",
          "before:absolute before:inset-0 before:rounded-3xl",
          "before:bg-gradient-to-br before:from-white/30 before:via-transparent before:to-white/10",
          "before:opacity-0 hover:before:opacity-100",
          "before:transition-opacity before:duration-500",
          "transition-all duration-500 ease-out",
          "overflow-hidden"
        )}
      >
        {/* Liquid Glass Overlay */}
        <div className="absolute inset-0 rounded-3xl">
          <div
            className={cn(
              "absolute inset-0 rounded-3xl opacity-60",
              "bg-gradient-to-br from-transparent via-white/20 to-transparent"
            )}
          />
          <div
            className={cn(
              "absolute inset-0 rounded-3xl opacity-40",
              "bg-gradient-to-tl from-blue-100/30 via-transparent to-purple-100/30"
            )}
          />
        </div>

        {/* Glass Refraction Effects */}
        <div className="absolute top-0 left-0 right-0 h-1/3 rounded-t-3xl bg-gradient-to-b from-white/40 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 rounded-b-3xl bg-gradient-to-t from-white/20 to-transparent opacity-30" />

        {/* Content Container with Z-index */}
        <div className="relative z-10">
          {/* Card Number */}
          <div className="mb-3">
            <span className="text-4xl font-light text-white drop-shadow-sm">
              {feature.id.toString().padStart(2, "0")}
            </span>
          </div>

          {/* Card Content */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-sm">
              {feature.title}
            </h3>
            <p
              className="p-2 text-black text-sm leading-relaxed drop-shadow-sm bg-white/70"
              style={{ borderRadius: "8px" }}
            >
              {feature.description}
            </p>
          </div>
        </div>

        {/* Liquid Glass Inner Glow */}
        <div className="absolute inset-0 rounded-3xl shadow-inner opacity-50 pointer-events-none" />

        {/* Liquid Flow Animation Overlay */}
        <div
          className={cn(
            "absolute inset-0 rounded-3xl opacity-30 pointer-events-none",
            "bg-gradient-to-r from-transparent via-white/30 to-transparent",
            "translate-x-[-100%] group-hover:translate-x-[100%]",
            "transition-transform duration-1000 ease-in-out"
          )}
        />
      </div>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  return (
    <section className="relative pb-24 px-4 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-20 relative z-20">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Landing Page Structure
        </h2>
        <p className="text-xl text-white max-w-3xl mx-auto">
          Follow this proven framework to create high-converting landing pages
          that engage and convert your visitors
        </p>
      </div>

      {/* Floating Cards Container */}
      {/* Desktop/Tablet: Organic scattered layout */}
      <div className="flex flex-col md:flex-row gap-5 md:justify-between">
        {features.map((feature, index) => (
          <FloatingCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
