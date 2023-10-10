import type { Meta, StoryObj } from '@storybook/react'
import { Chart } from '../src/index'
import { useEffect, useRef, useState } from 'react'

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
  // render: (args) => <Chart {...args} />,
  decorators: [
    (StoryFn: any, options: any) => {
      const [data, setData] = useState(DATA)
      const c = useRef('DATA')

      const toggle = () => {
        if (c.current === 'DATA') {
          c.current = 'DATA2'
          setData(DATA2)
        } else {
          c.current = 'DATA'
          setData(DATA)
        }
      }

      return <>
        <Chart {...options.args} data={data} />

        <button onClick={toggle}>Toggle data</button>
      </>
    } 
  ]
} satisfies Meta<typeof Chart>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
