import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: "khaki",
      values: [
        { name: "khaki", value: "#EFE3C6" },
        { name: "cream", value: "#F8F1DE" },
      ],
    },
    a11y: { test: 'todo' }
  },
};

export default preview;