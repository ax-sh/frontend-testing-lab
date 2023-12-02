import type { Meta, StoryObj } from "@storybook/react";

import { Comp } from "./comp.tsx";
import { posts } from "./mocks";
import { Post } from "./types.ts";

import { DefaultBodyType, delay, http, HttpResponse, PathParams } from "msw";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const meta: Meta<typeof Comp> = {
  title: " Profile",
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
  component: Comp,
  render: () => <Comp />,
};

export default meta;
type Story = StoryObj<typeof Comp>;

export const Primary: Story = {
  render: () => <Comp />,
};

// export const Loading: Story = {
//   render: () => <Comp />,
//   // parameters: {
//   //   msw: {
//   //     handlers: [
//   //       http.get("https://jsonplaceholder.typicode.com/posts", async () => {
//   //         await delay("infinite");
//   //         HttpResponse.json();
//   //       }),
//   //     ],
//   //   },
//   // },
// };

export const Loading: Story = () => <Comp />;

Loading.parameters = {
  msw: {
    handlers: [
      http.get("https://jsonplaceholder.typicode.com/posts", async () => {
        await delay("infinite");
        HttpResponse.json();
      }),
    ],
  },
};

export const Data: Story = {
  render: () => <Comp />,
  parameters: {
    msw: {
      handlers: [
        http.get<PathParams, DefaultBodyType, Post[]>(
          "https://jsonplaceholder.typicode.com/posts",
          async () => HttpResponse.json(posts),
        ),
      ],
    },
  },
};

export const Error: Story = {
  render: () => <Comp />,
  parameters: {
    msw: {
      handlers: [
        http.get("https://jsonplaceholder.typicode.com/posts", async () =>
          HttpResponse.json({}, { status: 500 }),
        ),
      ],
    },
  },
};
