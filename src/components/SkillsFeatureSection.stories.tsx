import type { Meta, StoryObj } from "@storybook/react";
import SkillsFeatureSection from "./SkillsFeatureSection";

const meta: Meta<typeof SkillsFeatureSection> = {
  title: "Components/SkillsFeatureSection",
  component: SkillsFeatureSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A modern skills showcase section with card UI, image placeholders, and modal popups for detailed information. Uses data from skills-portfolio-data.json.",
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
          "The default skills feature section showing all skills in a responsive grid layout with glass morphism cards.",
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
          "Mobile responsive view showing single column layout with full-width cards.",
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
          "Tablet view with 2-column grid layout maintaining card aesthetics.",
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
          "Desktop view with 4-column grid showcasing all skills with hover effects and modal interactions.",
      },
    },
  },
};
