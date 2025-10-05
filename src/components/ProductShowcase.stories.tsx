import type { Meta, StoryObj } from "@storybook/react";
import ProductShowcase from "./ProductShowcase";

const meta: Meta<typeof ProductShowcase> = {
  title: "Components/ProductShowcase",
  component: ProductShowcase,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A complete product showcase section displaying Adobe Creative Suite products with official brand colors. Features a responsive grid layout with hover animations (scale-125 and translate-y on images) and gradient background.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The default product showcase featuring all 6 Adobe Creative Suite products: Photoshop (blue), Illustrator (orange), After Effects (purple), Premiere Pro (indigo), XD (magenta), and InDesign (pink). Each card includes official Adobe brand colors, centered circular product images, and smooth hover animations.",
      },
    },
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "Mobile responsive view with centered single-column layout. Cards maintain their 270px width with full hover functionality including image scale (125%) and upward translation.",
      },
    },
  },
};

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    docs: {
      description: {
        story:
          "Tablet view with 2-3 column grid layout. All Adobe brand colors and hover effects are maintained with proper spacing between cards.",
      },
    },
  },
};

export const DesktopView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    docs: {
      description: {
        story:
          "Desktop view showcasing all 6 products in a multi-column grid with full hover effects. Images scale to 125% and translate upward with 500ms smooth transitions. Features gradient background (pink-50 → purple-50 → blue-50) and 'learn more' button text.",
      },
    },
  },
};
