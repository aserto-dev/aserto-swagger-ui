import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import AsertoSwaggerUI, { Props } from '..';


export default {
  title: 'Common/AsertoSwaggerUI',
  component: AsertoSwaggerUI,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Props> = (args) => <AsertoSwaggerUI {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  url: 'https://localhost:8383/openapi/swagger.json'
};
