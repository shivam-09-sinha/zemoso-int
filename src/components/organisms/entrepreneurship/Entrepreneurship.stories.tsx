import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import  Entrepreneurship  from "./Entrepreneurship";

export default {
  title: "Organisms/Entrepreneurship",
  component: Entrepreneurship,
  
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Entrepreneurship>;

const Template: ComponentStory<typeof Entrepreneurship> = (args : any) => (
  <Entrepreneurship {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Entrepreneurship",
};
