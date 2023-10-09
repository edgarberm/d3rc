import { scaleLinear, max, scaleBand } from 'd3'

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

export default function Chart({
  width,
  height,
}: {
  width: number
  height: number
}): JSX.Element {
  const margin = { top: 20, right: 20, bottom: 60, left: 70 }
  const yLabelOffset = 50
  const xTickOffset = 10
  const yTickOffset = 10
  const xLabelOffset = 50
  const yLabel = 'Customers'
  const xLabel = 'Day'
  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right

  const xScale = scaleBand()
    .domain(DATA.map((d) => d.day))
    .range([0, innerWidth])

  const barWidth = xScale.bandwidth() * 0.8

  const yScale = scaleLinear()
    .domain([0, max(DATA, (d: any) => d.customers)])
    .range([innerHeight, 0])
    .nice()

  return (
    <svg width={width} height={height}>
      {/* Axes */}
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {/* X Axis */}
        {xScale.domain().map((tickValue: any, i: number) => (
          <g key={i} transform={`translate(${xScale(tickValue)}, 0)`}>
            <line y2={innerHeight} stroke='rgba(255, 45, 85)' />
            <text
              dx={xScale.bandwidth() / 2}
              dy='0.71em'
              y={innerHeight + xTickOffset}
              textAnchor='middle'
            >
              {tickValue}
            </text>
          </g>
        ))}

        {/* X Axis Label */}
        <text
          textAnchor='middle'
          transform={`translate(${-yLabelOffset},${
            innerHeight / 2
          }) rotate(-90)`}
        >
          {yLabel}
        </text>

        {/* Y Axis */}
        {yScale.ticks().map((tickValue: any, i: number) => (
          <g transform={`translate(0, ${yScale(tickValue)})`} key={i}>
            <line x2={innerWidth} stroke='rgba(255, 45, 85)' />
            <text x={-yTickOffset} dy='0.32em' textAnchor='end'>
              {tickValue}
            </text>
          </g>
        ))}

        {/* Y Axis Label */}
        <text
          x={innerWidth / 2}
          y={innerHeight + xLabelOffset}
          textAnchor='middle'
        >
          {xLabel}
        </text>

        {/* Y Axis Line */}
        {/* <line y2={innerHeight} stroke='rgba(255, 45, 85)' /> */}
        {/* X Axis Line */}
        {/* <line x2={innerWidth} stroke='rgba(255, 45, 85)' /> */}

        {/* Bars */}
        {DATA.map((d, i) => (
          <g
            key={i}
            transform={`translate(${
              xScale(d.day)! + (xScale.bandwidth() - barWidth) / 2
            }, 0)`}
          >
            <text
              y={yScale(d.customers)}
              dx={barWidth / 2}
              textAnchor='middle'
              dy={-2}
            >
              {d.customers}
            </text>
            <rect
              // x={xScale(d.day) + xScale.bandwidth() * 0.1}
              y={yScale(d.customers)}
              width={barWidth}
              height={innerHeight - yScale(d.customers) + 4}
              fill='rgba(0, 122, 255)'
              rx={4}
              ry={4}
              style={{
                clipPath: 'inset(0px 0px 4px 0px)'
              }}
              key={i}
            />
          </g>
        ))}
      </g>
    </svg>
  )
}
