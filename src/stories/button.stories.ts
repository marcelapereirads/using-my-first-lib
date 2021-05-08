import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { ButtonComponent } from 'src/app/components/button/button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary button',
  id: 'primary-button',
  type: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary button',
  id: 'secondary-button',
  type: 'secondary'
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled button',
  id: 'disabled-button',
  type: 'primary',
  disabled: true
};