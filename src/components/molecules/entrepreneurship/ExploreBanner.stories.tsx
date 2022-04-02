import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Grid, Typography } from "@mui/material";

import ExploreBanner from "./ExploreBanner";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/Entreprenurship/ExploreBanner",
  component: ExploreBanner,
} as ComponentMeta<typeof ExploreBanner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExploreBanner> = () => (
  <ExploreBanner />
);

export const Banner = Template.bind({});

