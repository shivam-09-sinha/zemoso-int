import React from "react";
import Icons from "./Icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconPropsType } from "./IconPropsType";


export default {
  title: "atoms/icons",
  component: Icons,
} as ComponentMeta<typeof Icons>;
const Template: ComponentStory<typeof Icons> = (args: IconPropsType) => (
  <Icons {...args} />
);
export const Small = Template.bind({});
Small.args = {
  fontSize: "medium",
  color: "warning",
};
export const Large = Template.bind({});
Large.args = {
  fontSize: "large",
};
