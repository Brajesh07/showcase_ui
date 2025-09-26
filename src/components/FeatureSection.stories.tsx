import type { Meta, StoryObj } from "@storybook/react";
import FeatureSection from "./FeatureSection";

const meta: Meta<typeof FeatureSection> = {
  title: "Components/FeatureSection",
  component: FeatureSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A floating cards feature section with organic 3D design following the floating_cards_design_system specifications.",
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
          "The default floating cards feature section with organic positioning, 3D depth, and subtle hover effects.",
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
          "Mobile responsive view showing linear vertical stacking while maintaining the card-based structure.",
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
          "Tablet view with modified flow that maintains sequence relationships.",
      },
    },
  },
};
