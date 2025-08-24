import type { Meta, StoryObj } from "@storybook/react";
import { ParticleSystem } from "./ParticleSystem";

const meta: Meta<typeof ParticleSystem> = {
  title: "Impossible/ParticleSystem",
  component: ParticleSystem,
  parameters: { layout: "fullscreen" },
};
export default meta;

export const Ambient: StoryObj<typeof ParticleSystem> = {
  render: () => (
    <div className="relative h-[400px] bg-black/90">
      <ParticleSystem />
      <div className="absolute inset-0 flex items-center justify-center text-cyan-100 text-xl font-medium">
        Ambient Particles
      </div>
    </div>
  ),
};
