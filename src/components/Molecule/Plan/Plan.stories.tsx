import { Story } from "@storybook/react";
import Plan from "./Plan";
import { Props } from "./Plan";

export default {
  title: "Components/Atom/Plan",
  component: Plan,
  tags: ["autodocs"],
};

const Template: Story<Props> = (args: Props) => <Plan {...args} />;

export const Default = Template.bind({});

Default.args = {
  plans: [
    {
      key: 1,
      title: "계획1",
      body: "이렇게 저렇게 하기",
      subplan: [
        {
          key: 2,
          title: "하위계획1",
          body: "이렇게 저렇게 저렇게 하기",
        },
      ],
    },
    {
      key: 2,
      title: "계획2",
      body: "이렇게 저렇게 하기",
    },
  ],
};
