import type { Meta, StoryObj } from '@storybook/react'

import Button from '@components/Button'

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

export const Primary: Story = {
  args: {
    label: 'Button',
  },
}

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// }
//
// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// }
//
// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// }
