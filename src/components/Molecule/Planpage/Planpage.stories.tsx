import { Story } from "@storybook/react";
import Planpage from "./Planpage";
import { Props } from "./Planpage";

export default {
  title: "Components/Atom/Planpage",
  component: Planpage,
  tags: ["autodocs"],
};

const Template: Story<Props> = (args: Props) => <Planpage {...args} />;

export const Default = Template.bind({});

Default.args = {
  plans: [
    {
      key: 1,
      title: "계획1",
      body: "이렇게 저렇게 하기",
    },
    {
      key: 2,
      title: "계획2",
      body: "이렇게 저렇게 하기",
    },
  ],
};
