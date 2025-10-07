"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { images } from "@/assest";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
  id: number;
  productName: string;
  subtitle: string;
  imageUrl: string;
  backgroundColor?: string;
  accentColor?: string;
}

const products: Product[] = [
  {
    id: 1,
    productName: "Photoshop",
    subtitle: "Creative Suite",
    imageUrl: images.photoshop.src,
    backgroundColor: "#E3F2FD",
    accentColor: "#2196F3",
  },
  {
    id: 2,
    productName: "Illustrator",
    subtitle: "Vector Design",
    imageUrl: images.illustrator.src,
    backgroundColor: "#FFF3E0",
    accentColor: "#FF9800",
  },
  {
    id: 3,
    productName: "After Effects",
    subtitle: "Motion Graphics",
    imageUrl: images.afterEffects.src,
    backgroundColor: "#F3E5F5",
    accentColor: "#9C27B0",
  },
  {
    id: 4,
    productName: "Premiere Pro",
    subtitle: "Video Editing",
    imageUrl: images.premierePro.src,
    backgroundColor: "#EDE7F6",
    accentColor: "#5E35B1",
  },
  {
    id: 5,
    productName: "XD",
    subtitle: "UI/UX Design",
    imageUrl: images.xd.src,
    backgroundColor: "#FCE4EC",
    accentColor: "#FF2BC2",
  },
  {
    id: 6,
    productName: "Adobe Audition",
    subtitle: "Audio Editing",
    imageUrl: images.audition.src,
    backgroundColor: "#D7F4E8",
    accentColor: "#00E4BB",
  },
];

const ProductShowcase: React.FC = () => {
  const handleShopClick = (productName: string) => {
    console.log(`Shopping for ${productName}`);
    // Add your shop logic here
  };

  return (
    <section className="py-20 px-4 bg-[#F5F5F7]">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Creative Tools
        </h2>
      </div>

      {/* Products Carousel */}
      <div className="max-w-7xl mx-auto px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="ml-4 py-11 gap-5">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div className="p-1">
                  <ProductCard
                    productName={product.productName}
                    subtitle={product.subtitle}
                    imageUrl={product.imageUrl}
                    backgroundColor={product.backgroundColor}
                    accentColor={product.accentColor}
                    onShopClick={() => handleShopClick(product.productName)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductShowcase;
