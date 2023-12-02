import type { Meta, StoryObj } from "@storybook/react";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";

import SideBar from "./side-bar";

const meta: Meta<typeof SideBar> = {
  title: "User Profile",
  decorators: [withRouter],
  component: SideBar,
  render: () => <SideBar />,
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { userId: "42" },
      },
      routing: { path: "/users/:userId" },
    }),
  },
};

export default meta;

type Story = StoryObj<typeof SideBar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <SideBar />,
};
