import type { Meta, StoryObj } from '@storybook/react'

import Button, { ButtonProps } from '@components/Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>



const sizes = ['small', 'medium', 'large'] as const;
const colors = ['primary', 'secondary'] as const;
const variants = ['solid', 'ghost', 'outline'] as const;

export const Sizes: Story = {
  args: {
    label: 'Button',
  },
  render: (args: ButtonProps) => (<section style={{ alignItems: 'center', display: 'flex', gap: '2rem' }}>
    {
      sizes.map((size) => (
        <Button {...args} size={size} key={size} />
      ))
    }
  </ section>),
}

export const Colors: Story = {
  args: {
    label: 'Button',
  },
  render: (args: ButtonProps) => (<section style={{ alignItems: 'center', display: 'flex', gap: '2rem' }}>
    {
      colors.map((color) => (
        <Button {...args} color={color} key={color} />
      ))
    }
  </ section>),
}

export const Variants: Story = {
  args: {
    label: 'Button',
  },
  render: (args: ButtonProps) => (<section style={{ alignItems: 'center', display: 'flex', gap: '2rem' }}>
    {
      variants.map((variant) => (
        <Button {...args} variant={variant} key={variant} />
      ))
    }
  </ section>),
}

// TODO: Find a workaround for the Storybook system dark theme.

