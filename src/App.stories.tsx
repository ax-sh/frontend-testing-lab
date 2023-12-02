import type { Meta, StoryObj } from "@storybook/react";

import { Comp } from "./comp.tsx";
import { posts } from "./mocks";
import { Post } from "./types.ts";

import { DefaultBodyType, delay, http, HttpResponse, PathParams } from "msw";

import { QueryClient, QueryClientProvider } from "react-query";

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const meta: Meta<typeof Comp> = {
  title: "Api Request states",
  decorators: [
    (Story) => (
      <QueryClientProvider client={mockedQueryClient}>
        {Story()}
      </QueryClientProvider>
    ),
  ],
  component: Comp,
  render: () => <Comp />,
};

export default meta;
type Story = StoryObj<typeof Comp>;

export const Loading: Story = () => (
  <QueryClientProvider client={new QueryClient()}>
    <Comp />
  </QueryClientProvider>
);

Loading.parameters = {
  msw: {
    handlers: [
      http.get("https://jsonplaceholder.typicode.com/posts", async () => {
        await delay("infinite");
        // HttpResponse.json();
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
          async () => {
            console.log(88899900);
            return HttpResponse.json(posts);
          },
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
