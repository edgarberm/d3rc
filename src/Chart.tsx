import { scaleLinear, max, scaleBand, min } from 'd3'
import { XAxis, YAxis } from './axes'
import css from './styles.module.css'
import { Bars, Lines } from './shapes'

/**
 * Refs:
 * 
 * https://www.d3indepth.com/shapes/
 */
export default function Chart({
  width,
  height,
  data,
}: {
  width: number
  height: number
  data: any[]
}): JSX.Element {
  const margin = { top: 20, right: 20, bottom: 60, left: 70 }
  const yLabelOffset = 50
  const xTickOffset = 10
  const yTickOffset = 10
  const xLabelOffset = 50
  const xLabel = 'Customers'
  const yLabel = 'Day'
  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right
  const minValue = min(data, (d: any) => d.customers)
  const maxValue = max(data, (d: any) => d.customers)

  const xScale = scaleBand()
    .domain(data.map((d) => d.day))
    .range([0, innerWidth])

  const barWidth = xScale.bandwidth() * 0.8

  const yScale = scaleLinear()
    .domain([0, max(data, (d: any) => d.customers)])
    .range([innerHeight, 0])
    .nice()

  return (
    <svg width={width} height={height} className={css.chart}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <XAxis
          position='bottom'
          scale={xScale}
          label={xLabel}
          width={innerWidth}
          height={innerHeight}
          tickOffset={xTickOffset}
          labelOffset={xLabelOffset}
          showAxisLine={false}
          showGrid={false}
        />

        <YAxis
          position='left'
          scale={yScale}
          label={yLabel}
          width={innerWidth}
          height={innerHeight}
          tickOffset={yTickOffset}
          labelOffset={yLabelOffset}
          showAxisLine={true}
          showGrid={true}
        />

        <Bars
          data={data}
          barWidth={barWidth}
          domain='day'
          value='customers'
          width={innerWidth}
          height={innerHeight}
          xScale={xScale}
          yScale={yScale}
        />

        <Lines
          data={data}
          min={minValue}
          max={maxValue}
          color='rgba(255, 45, 85'
          lineWidth={2}
          domain='day'
          value='customers'
          width={innerWidth}
          height={innerHeight}
          xScale={xScale}
          yScale={yScale}
        />
      </g>
    </svg>
  )
}
