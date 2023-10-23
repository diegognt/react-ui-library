import type { Meta, StoryObj } from '@storybook/react'
import Heading, { HeadingProps } from '@components/Heading'

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Heading>

const sizes = ["sm", "md", "lg", "xl", "2xl", "3xl"] as const;

export const Sizes: Story = {
  args: {},
  render: (args: HeadingProps) => (<section style={{ alignItems: 'start', display: 'flex', flexDirection: 'column', gap: '0rem' }}>
    {
      sizes.map((size) => (
        <Heading {...args} key={size} size={size}>{`This a ${size} heading`}</Heading>
      ))
    }
  </ section>),
}

