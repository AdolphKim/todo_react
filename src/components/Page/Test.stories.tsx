import { Story } from "@storybook/react";
import Test from "./Test";
import { Props } from "./Test";

export default {
  title: "Components/Page/Test",
  component: Test,
  tags: ["autodocs"],
};

const Template: Story<Props> = (args: Props) => <Test {...args} />;

export const Default = Template.bind({});

Default.args = {};
