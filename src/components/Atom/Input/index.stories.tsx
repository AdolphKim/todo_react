import { Story } from "@storybook/react";
import Input from "./index";
import { Props } from "./index";

export default {
  title: "Components/Atom/Input",
  component: Input,
  tags: ["autodocs"],
};

const Template: Story<Props> = (args: Props) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: "입력하세요",
};
