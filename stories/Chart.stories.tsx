import type { Meta, StoryObj } from '@storybook/react'
import { Chart } from '../src/index'

const meta = {
  title: 'Example/Chart',
  component: Chart,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  args: {
    width: 800,
    height: 500
  },
  render: (args) => <Chart {...args} />,
} satisfies Meta<typeof Chart>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
