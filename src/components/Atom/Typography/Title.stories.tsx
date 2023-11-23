import { Story } from "@storybook/react";
import Title from "./Title";
import { Props } from "./Title";

export default {
  title: "Components/Atom/Typography/Title",
  component: Title,
  tags: ["autodocs"],
};

const Template: Story<Props> = (args: Props) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "월간계획",
};
