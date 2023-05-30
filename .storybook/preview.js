import '../src/index.css';

import { setup } from '@storybook/vue3';
import { createPinia } from 'pinia';

// .storybook/preview.js
setup((app) => {
  const pinia = createPinia();
  app.use(pinia);
});

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;