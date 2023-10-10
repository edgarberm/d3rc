import type { Meta, StoryObj } from '@storybook/react'
import { Chart } from '../src/index'

const DATA = [
  {
    day: 'Monday',
    customers: 49,
  },
  {
    day: 'Tuesday',
    customers: 46,
  },
  {
    day: 'Wednesday',
    customers: 34,
  },
  {
    day: 'Thursday',
    customers: 64,
  },
  {
    day: 'Friday',
    customers: 77,
  },
  {
    day: 'Saturday',
    customers: 33,
  },
  {
    day: 'Sunday',
    customers: 29,
  },
]

const meta = {
  title: 'Example/Chart',
  component: Chart,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  args: {
    width: 900,
    height: 500,
    data: DATA,
  },
  render: (args) => <Chart {...args} />,
} satisfies Meta<typeof Chart>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
