import type { Meta, StoryObj } from '@storybook/react';
import SideBar from './side-bar';



const meta: Meta<typeof SideBar> = {
    component: SideBar,
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