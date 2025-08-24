import type { Meta, StoryObj } from "@storybook/react";
import { LiquidButton } from "./LiquidButton";
import { SparklesIcon } from "@heroicons/react/24/solid";

const meta: Meta<typeof LiquidButton> = {
  title: "Impossible/LiquidButton",
  component: LiquidButton,
  parameters: {
    layout: "centered",
  },
};
export default meta;

export const Primary: StoryObj<typeof LiquidButton> = {
  args: {
    children: (
      <>
        <SparklesIcon className="w-4 h-4" /> Liquid Action
      </>
    ),
  },
};

export const Secondary: StoryObj<typeof LiquidButton> = {
  args: {
    variant: "secondary",
    children: "Secondary Flow",
  },
};
