// Button.stories.tsx
// https://storybook.js.org/docs/react/writing-stories/introduction

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from ".";

// Required default export w/ title
export default {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    componentSubtitle: "This is the `componentSubtitle`"
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Test</Button>;


// * Square
export const Default = Template.bind({});
Default.args = {
  type: 'primary',
  brand: 'square'
} 

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  brand: 'square'
}

// * Rounded
export const PrimaryRounded = Template.bind({});
PrimaryRounded.args = {
 type: 'primary',
 brand: 'rounded'
} 

export const SecondaryRounded = Template.bind({});
SecondaryRounded.args = {
  type: 'secondary',
  brand: 'rounded'
}  