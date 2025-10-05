import React from "react";
import ProductCard from "./ProductCard";
import { images } from "@/assest";

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
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Creative Tools
        </h2>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              productName={product.productName}
              subtitle={product.subtitle}
              imageUrl={product.imageUrl}
              backgroundColor={product.backgroundColor}
              accentColor={product.accentColor}
              onShopClick={() => handleShopClick(product.productName)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
