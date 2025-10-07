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
          "A carousel-based product showcase section displaying Adobe Creative Suite products with official brand colors. Built with Shadcn carousel component (embla-carousel-react), featuring smooth horizontal scrolling, navigation arrows, loop functionality, and responsive breakpoints. Cards include hover animations (scale-125 and translate-y on images).",
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
          "The default carousel showcasing all 6 Adobe Creative Suite products: Photoshop (blue), Illustrator (orange), After Effects (purple), Premiere Pro (indigo), XD (magenta), and Adobe Audition (cyan). Features navigation arrows, infinite loop, and smooth scrolling. Each card includes official Adobe brand colors, centered circular product images, and hover animations.",
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
          "Mobile responsive carousel view with one card visible at a time (basis-full). Touch-friendly swipe gestures enabled. Navigation arrows positioned at edges. Cards maintain their 270px width with full hover functionality including image scale (125%) and upward translation.",
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
          "Tablet carousel view displaying 2-3 cards (basis-1/2 to basis-1/3). Smooth scroll-snap behavior for natural card alignment. All Adobe brand colors and hover effects are maintained with proper spacing between cards.",
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
          "Desktop carousel view displaying 4-5 cards at once (basis-1/4 to basis-1/5). Features left/right navigation arrows, infinite loop, and embla-carousel smooth scrolling. Images scale to 125% and translate upward with 500ms smooth transitions. Background color #F5F5F7 (soft gray) with 'learn more' button text. Carousel supports keyboard navigation and touch gestures.",
      },
    },
  },
};
