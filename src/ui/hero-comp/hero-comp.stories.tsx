import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroComp } from "./hero-comp";

//function HeroComp() {
//  return <div className="bg-red-500">Test HeroComp</div>
//}

const meta = {
  title: "UI/HeroComp",
  component: HeroComp,
  // tags: ['autodocs'],
} satisfies Meta<typeof HeroComp>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  parameters: { layout: "fullscreen" },
};
