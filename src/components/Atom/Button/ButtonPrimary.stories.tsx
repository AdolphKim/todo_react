import { Story } from "@storybook/react";
import ButtonPrimary from "./ButtonPrimary";
import { Props } from "./ButtonPrimary";

export default {
  title: "Components/Atom/Button/ButtonPrimary",
  component: ButtonPrimary,
  tags: ["autodocs"],
};

const Template: Story<Props> = (args: Props) => <ButtonPrimary {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Button",
  color: "primary",
};
