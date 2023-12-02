import type { Preview } from "@storybook/react";
import { initialize, mswLoader, mswDecorator } from "msw-storybook-addon";
import type { Decorator } from "@storybook/react";
import "../src/global.css";
import { QueryClient, setLogger, QueryClientProvider } from "react-query";

// Disable `react-query` error logging
setLogger({
  error: () => {},
  // eslint-disable-next-line no-console
  log: (...params) => console.log(...params),
  warn: (...params) => console.warn(...params),
});

initialize({
  onUnhandledRequest: "bypass",
});
export const loaders = [mswLoader];

const preview: Preview = {
  loaders: [mswLoader],
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

// export const decorators: Decorator[] = [
//   mswDecorator as Decorator,
//   (story) => {
//     const queryClient = new QueryClient({
//       defaultOptions: {
//         queries: {
//           refetchOnWindowFocus: false,
//           refetchIntervalInBackground: false,
//           retry: false,
//         },
//       },
//     })
//
//     return (
//         <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
//     )
//   },
// ]
