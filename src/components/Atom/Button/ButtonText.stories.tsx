import { Story } from "@storybook/react";
import ButtonText from "./ButtonText";
import { Props } from "./ButtonText";

export default {
  title: "Components/Atom/Button/ButtonText",
  component: ButtonText,
  tags: ["autodocs"],
};

const Template: Story<Props> = (args: Props) => <ButtonText {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Button",
};
