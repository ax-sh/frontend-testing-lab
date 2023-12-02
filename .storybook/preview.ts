import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from 'msw-storybook-addon';

import '../src/index.css'

// todo fix this probably caused by msw 2 update
// initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
