import type { Meta, StoryObj } from "@storybook/react";
import { MorphingCard } from "./MorphingCard";

const meta: Meta<typeof MorphingCard> = {
  title: "Impossible/MorphingCard",
  component: MorphingCard,
  parameters: { layout: "centered" },
};
export default meta;

export const Basic: StoryObj<typeof MorphingCard> = {
  args: {
    title: "Morphing Geometry",
    children: "Animated clip-path and 3D tilt illusions.",
  },
};
