import type { Meta, StoryObj } from "@storybook/react";
import HeaderNav from "./HeaderNav";

const meta: Meta<typeof HeaderNav> = {
  title: "Components/HeaderNav",
  component: HeaderNav,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

export const Default: StoryObj<typeof HeaderNav> = {
  render: () => (
    <div className="min-h-[200vh] bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900">
      <HeaderNav />
      <div className="pt-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">
            Scroll down to see the header slide down and transform
          </h1>
          <p className="text-lg text-white/80 mb-8">
            The header starts slightly raised and transparent, then slides down
            with a solid background and shadow after scrolling 80px.
          </p>
          <div className="bg-white/10 rounded-lg p-6 mb-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Animation Features:
            </h2>
            <ul className="text-white/80 space-y-2">
              <li>• Smooth 500ms transition with easing</li>
              <li>• Translate transform creates sliding effect</li>
              <li>• Background changes from transparent to solid</li>
              <li>• Shadow and blur effects appear on scroll</li>
              <li>• Icon colors adapt to background</li>
            </ul>
          </div>
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i} className="text-white/60 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const ScrolledState: StoryObj<typeof HeaderNav> = {
  render: () => (
    <div className="min-h-screen bg-gray-100">
      <div className="px-5 py-3 flex items-center justify-between fixed w-full z-10 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 transition-all duration-300 ease-in-out">
        <div className="flex space-x-4">
          {/* Static representation of scrolled state */}
          <span className="text-gray-700">Social Icons (Scrolled State)</span>
        </div>
        <button className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all duration-300">
          My Resume
        </button>
      </div>
      <div className="pt-20 px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Header in Scrolled State
        </h2>
        <p className="text-gray-600">
          This shows how the header appears when scrolled past 80px.
        </p>
      </div>
    </div>
  ),
};
