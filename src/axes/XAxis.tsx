import { ScaleLinear } from 'd3'
import css from '../styles.module.css'

export default function XAxis({
  position = 'left',
  scale,
  width,
  height,
  label,
  tickOffset = 10,
  labelOffset = 50,
  showAxisLine = true,
  showGrid = true,
}: {
  position: 'left' | 'right'
  scale: ScaleLinear<number, number, never>
  width: number
  height: number
  label?: string
  tickOffset?: number
  labelOffset?: number
  showAxisLine?: boolean
  showGrid?: boolean
}): JSX.Element {
  return (
    <g className={`axis axis-${position}`}>
      {scale.ticks().map((tickValue: any, i: number) => (
        <g key={i} transform={`translate(0, ${scale(tickValue)})`}>
          {showGrid && <line x2={width} stroke='rgba(199, 199, 204)' />}

          <text
            x={-tickOffset}
            dy='0.32em'
            textAnchor='end'
            className={css['axis-tick-label']}
          >
            {tickValue}
          </text>
        </g>
      ))}

      {showAxisLine && (
        <line y1={height} y2={height} x2={width} stroke='rgba(36, 36, 38)' />
      )}

      {label && (
        <text x={width / 2} y={height + labelOffset} textAnchor='middle'>
          {label}
        </text>
      )}
    </g>
  )
}
