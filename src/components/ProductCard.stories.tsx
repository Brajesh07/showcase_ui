import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from "./ProductCard";
import { images } from "@/assest";

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A minimalist product card with soft pastel aesthetics, circular product framing, and centered layout following the Product-card.json design system.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "Background color of the card",
    },
    accentColor: {
      control: "color",
      description: "Accent color for circle and button",
    },
    buttonText: {
      control: "text",
      description: "Text displayed on the button",
    },
    onShopClick: {
      action: "shop-clicked",
      description: "Callback when shop button is clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    productName: "Photoshop",
    subtitle: "Creative Suite",
    imageUrl: images.photoshop.src,
    backgroundColor: "#E3F2FD",
    accentColor: "#2196F3",
    buttonText: "learn more",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default Photoshop card with official Adobe blue branding and circular product framing with hover animations.",
      },
    },
  },
};

export const OrangeVariant: Story = {
  args: {
    productName: "Illustrator",
    subtitle: "Vector Design",
    imageUrl: images.photoshop.src,
    backgroundColor: "#FFF3E0",
    accentColor: "#FF9800",
    buttonText: "learn more",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Adobe Illustrator with official orange branding, featuring centered image with scale and translate animations on hover.",
      },
    },
  },
};

export const PurpleVariant: Story = {
  args: {
    productName: "After Effects",
    subtitle: "Motion Graphics",
    imageUrl: images.photoshop.src,
    backgroundColor: "#F3E5F5",
    accentColor: "#9C27B0",
    buttonText: "learn more",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Adobe After Effects with official purple branding and smooth hover transitions.",
      },
    },
  },
};

export const IndigoVariant: Story = {
  args: {
    productName: "Premiere Pro",
    subtitle: "Video Editing",
    imageUrl: images.photoshop.src,
    backgroundColor: "#EDE7F6",
    accentColor: "#5E35B1",
    buttonText: "learn more",
  },
  parameters: {
    docs: {
      description: {
        story: "Adobe Premiere Pro with official indigo/purple branding.",
      },
    },
  },
};

export const MagentaVariant: Story = {
  args: {
    productName: "XD",
    subtitle: "UI/UX Design",
    imageUrl: images.photoshop.src,
    backgroundColor: "#FCE4EC",
    accentColor: "#FF2BC2",
    buttonText: "learn more",
  },
  parameters: {
    docs: {
      description: {
        story: "Adobe XD with official magenta/pink branding.",
      },
    },
  },
};

export const PinkVariant: Story = {
  args: {
    productName: "InDesign",
    subtitle: "Layout Design",
    imageUrl: images.photoshop.src,
    backgroundColor: "#FFE8F0",
    accentColor: "#FF3366",
    buttonText: "learn more",
  },
  parameters: {
    docs: {
      description: {
        story: "Adobe InDesign with official pink/red branding.",
      },
    },
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div className="flex gap-6 flex-wrap justify-center p-8">
      <ProductCard
        productName="Photoshop"
        subtitle="Creative Suite"
        imageUrl={images.photoshop.src}
        backgroundColor="#E3F2FD"
        accentColor="#2196F3"
      />
      <ProductCard
        productName="Illustrator"
        subtitle="Vector Design"
        imageUrl={images.photoshop.src}
        backgroundColor="#FFF3E0"
        accentColor="#FF9800"
      />
      <ProductCard
        productName="After Effects"
        subtitle="Motion Graphics"
        imageUrl={images.photoshop.src}
        backgroundColor="#F3E5F5"
        accentColor="#9C27B0"
      />
      <ProductCard
        productName="Premiere Pro"
        subtitle="Video Editing"
        imageUrl={images.photoshop.src}
        backgroundColor="#EDE7F6"
        accentColor="#5E35B1"
      />
      <ProductCard
        productName="XD"
        subtitle="UI/UX Design"
        imageUrl={images.photoshop.src}
        backgroundColor="#FCE4EC"
        accentColor="#FF2BC2"
      />
      <ProductCard
        productName="InDesign"
        subtitle="Layout Design"
        imageUrl={images.photoshop.src}
        backgroundColor="#FFE8F0"
        accentColor="#FF3366"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All six Adobe Creative Suite products with official brand colors showcasing the full product line with hover animations.",
      },
    },
  },
};
