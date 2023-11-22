import { Story } from "@storybook/react";
import Button from "./Button";
import { Props } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

const Template: Story<Props> = (args: Props) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Button",
  color: "primary",
};
