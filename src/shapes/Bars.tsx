import { ScaleBand, ScaleLinear } from 'd3'

export default function Bars({
  data,
  xScale,
  yScale,
  width,
  height,
  barWidth,
  domain,
  value,
}: {
  data: any
  xScale: ScaleBand<string>
  yScale: ScaleLinear<number, number, never>
  width: number
  height: number
  barWidth: number
  domain: string
  value: string
}): JSX.Element {
  return (
    <g>
      {data.map((d: any, i: number) => (
        <g
          key={i}
          transform={`translate(${
            xScale(d[domain])! + (xScale.bandwidth() - barWidth) / 2
          }, 0)`}
        >
          <text
            y={yScale(d[value])}
            dx={barWidth / 2}
            textAnchor='middle'
            dy={-2}
          >
            {d[value]}
          </text>
          <rect
            // x={xScale(d.day) + xScale.bandwidth() * 0.1}
            y={yScale(d[value])}
            width={barWidth}
            height={height - yScale(d[value]) + 4}
            fill='rgba(0, 122, 255)'
            rx={4}
            ry={4}
            style={{
              clipPath: 'inset(0px 0px 4px 0px)',
            }}
            key={i}
          />
        </g>
      ))}
    </g>
  )
}
