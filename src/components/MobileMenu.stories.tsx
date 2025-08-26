import type { Meta, StoryObj } from "@storybook/react";
import MobileMenu from "./MobileMenu";

const meta: Meta<typeof MobileMenu> = {
  title: "Components/MobileMenu",
  component: MobileMenu,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the top-level container",
    },
  },
};
export default meta;

export const Default: StoryObj<typeof MobileMenu> = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900">
      <MobileMenu />
      <div className="pt-24 px-4">
        <div className="max-w-sm mx-auto">
          <h1 className="text-2xl font-bold text-white mb-4">
            Mobile Navigation Menu
          </h1>
          <p className="text-sm text-white/80 mb-6">
            Tap the menu icon in the header to open the mobile navigation. The
            menu features the same styling as the scrolled HeaderNav with a
            clean, modern design.
          </p>
          <div className="bg-white/10 rounded-lg p-4 mb-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-white mb-3">Features:</h2>
            <ul className="text-white/80 space-y-1 text-sm">
              <li>• Matches HeaderNav scrolled state styling</li>
              <li>• Smooth slide-down animation</li>
              <li>• Grid layout for social icons</li>
              <li>• Backdrop blur and overlay</li>
              <li>• Touch-friendly mobile design</li>
              <li>• Auto-close on link click</li>
            </ul>
          </div>
          {Array.from({ length: 10 }, (_, i) => (
            <p key={i} className="text-white/60 mb-3 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const WithCustomClass: StoryObj<typeof MobileMenu> = {
  args: {
    className: "bg-gradient-to-r from-purple-500/20 to-blue-500/20",
  },
  render: ({ className }) => (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900">
      <MobileMenu className={className} />
      <div className="pt-24 px-4">
        <div className="max-w-sm mx-auto">
          <h1 className="text-2xl font-bold text-white mb-4">
            Custom Styled Mobile Menu
          </h1>
          <p className="text-sm text-white/80 mb-6">
            This example shows how you can pass additional CSS classes via the
            className prop to customize the mobile menu appearance.
          </p>
          <div className="bg-white/10 rounded-lg p-4 mb-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-white mb-3">
              className Prop:
            </h2>
            <code className="text-white/80 text-xs bg-black/20 px-2 py-1 rounded">
              className=&quot;bg-gradient-to-r from-purple-500/20
              to-blue-500/20&quot;
            </code>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const OpenState: StoryObj<typeof MobileMenu> = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 relative">
      {/* Static representation of open state */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
        <div className="bg-white/95 backdrop-blur-md shadow-lg border border-gray-200/20 rounded-lg px-5 py-3 flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-800">
            Brajesh Tanwar
          </div>
          <button className="text-gray-700 p-2">
            <span>✕</span>
          </button>
        </div>
      </div>

      {/* Menu overlay */}
      <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
        <div className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-md shadow-xl border border-gray-200/20 rounded-lg p-6">
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
              Connect With Me
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {[
                "Google",
                "WhatsApp",
                "Instagram",
                "LinkedIn",
                "Twitter",
                "Behance",
                "Dribbble",
              ].map((platform) => (
                <div
                  key={platform}
                  className="flex flex-col items-center p-3 rounded-lg bg-gray-50 text-gray-700"
                >
                  <div className="w-5 h-5 bg-gray-300 rounded mb-1"></div>
                  <span className="text-xs">{platform}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <button className="w-full flex items-center justify-center px-4 py-3 rounded-lg font-medium bg-blue-600 text-white shadow-md">
              Download My Resume
            </button>
          </div>
        </div>
      </div>

      <div className="pt-24 px-4">
        <h2 className="text-xl font-bold text-white mb-4">
          Mobile Menu Open State
        </h2>
        <p className="text-white/80 text-sm">
          This shows how the mobile menu appears when opened.
        </p>
      </div>
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
