import type { Meta, StoryObj } from '@storybook/react'
import { Canvas, CircleComponent, RectComponent } from '../src/index'
import DATA_3 from '../src/utils/data/fakedata'

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

const DATA2 = [
  {
    day: 'Monday',
    customers: 103,
  },
  {
    day: 'Tuesday',
    customers: 72,
  },
  {
    day: 'Wednesday',
    customers: 29,
  },
  {
    day: 'Thursday',
    customers: 13,
  },
  {
    day: 'Friday',
    customers: 74,
  },
  {
    day: 'Saturday',
    customers: 71,
  },
  {
    day: 'Sunday',
    customers: 54,
  },
  {
    day: 'Invent',
    customers: 54,
  },
]

const meta = {
  title: 'Engine/Canvas',
  component: Canvas,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  args: {
    width: 800,
    height: 500,
  },
} satisfies Meta<typeof Canvas>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <Canvas {...args}>
      <RectComponent x={100} y={100} width={34} height={92} styles={{ fillStyle: '#ff0000' }} />
      <RectComponent x={300} y={400} width={83} height={43} styles={{ fillStyle: 'rgb(0, 255, 0)' }} />
      <RectComponent x={500} y={200} width={30} height={98} styles={{ fillStyle: 'rgba(0, 0, 255, 1)' }} />
      
      <CircleComponent x={400} y={40} r={20} styles={{ fillStyle: 'rgb(128, 250, 176)' }} />
      <CircleComponent x={600} y={80} r={40} styles={{ lineWidth: 30, strokeStyle: '#000000' }} />
    </Canvas>
  ),
}

/** 22150 points */
export const LotOfPoints: Story = {
  render: (args: any) => (
    <Canvas {...args} />
  ),
}
