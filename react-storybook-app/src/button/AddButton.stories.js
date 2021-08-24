import React from 'react';
import CustomButton from './AddButton';

export default {
    title: 'atoms/CustomButton',
    component: CustomButton,
    argTypes:{
      name:{
      },
        color: {
            control: {
              type: 'radio',
              options: ['primary', 'secondary']
            }}}
};

const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    name:"Add",
    color:"primary"
};