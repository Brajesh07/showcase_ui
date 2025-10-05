import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ProductCardProps {
  productName: string;
  subtitle: string;
  imageUrl: string;
  backgroundColor?: string;
  accentColor?: string;
  buttonText?: string;
  onShopClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  subtitle,
  imageUrl,
  backgroundColor = "#FFE8F0",
  accentColor = "#FFB3D9",
  buttonText = "learn more",
  onShopClick = () => console.log(`Shopping for ${productName}`),
}) => {
  return (
    <article
      className={cn(
        "flex flex-col items-center justify-between",
        "w-[270px] h-[300px] p-4 rounded-2xl",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-xl",
        "cursor-pointer group"
      )}
      style={{
        backgroundColor,
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* Circular Product Image Container */}
      <div
        className={cn(
          "relative flex items-center justify-center ",
          "w-28 h-28 rounded-full mb-3",
          "transition-all duration-500 ease-out",
          "group-hover:scale-105"
        )}
        style={{ backgroundColor: accentColor }}
      >
        <div
          className={cn(
            "relative w-[150px] h-[150px]",
            "transition-all duration-500 ease-out",
            "group-hover:scale-125 group-hover:-translate-y-6"
          )}
        >
          <Image
            src={imageUrl}
            alt={productName}
            fill
            className="object-contain"
            sizes="250px"
          />
        </div>
      </div>

      {/* Product Information */}
      <div className="flex flex-col items-center text-center gap-1 mb-3 flex-1">
        <h3
          className="text-[18px] font-medium uppercase tracking-wider leading-tight"
          style={{ color: accentColor, letterSpacing: "1px" }}
        >
          {productName}
        </h3>
        <p
          className="text-[14px] font-normal uppercase tracking-wide leading-tight"
          style={{ color: accentColor, letterSpacing: "0.8px" }}
        >
          {subtitle}
        </p>
      </div>

      {/* Shop Button */}
      <button
        onClick={onShopClick}
        className={cn(
          "px-5 py-1.5 rounded-2xl",
          "text-[18px] font-semibold uppercase tracking-wide",
          "text-white transition-all duration-300 ease-out",
          "hover:-translate-y-0.5 active:translate-y-0",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "w-full"
        )}
        style={{
          backgroundColor: accentColor,
          boxShadow: "0 2px 8px rgba(255, 179, 217, 0.3)",
          letterSpacing: "0.8px",
        }}
        aria-label={`Shop ${productName}`}
      >
        {buttonText}
      </button>
    </article>
  );
};

export default ProductCard;
