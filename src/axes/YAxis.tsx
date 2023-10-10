import { ScaleBand } from 'd3'
import css from '../styles.module.css'

export default function YAxis({
  position = 'bottom',
  scale,
  width,
  height,
  label,
  tickOffset = 10,
  labelOffset = 50,
  showAxisLine = true,
  showGrid = true,
}: {
  position: 'top' | 'bottom'
  scale: ScaleBand<string>
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
      {scale.domain().map((tickValue: any, i: number) => (
        <g key={i} transform={`translate(${scale(tickValue)}, 0)`}>
          {showGrid && <line y2={height} stroke='rgba(199, 199, 204)' />}

          <text
            dx={scale.bandwidth() / 2}
            dy='0.71em'
            y={height + tickOffset}
            textAnchor='middle'
            className={css['axis-tick-label']}
          >
            {tickValue}
          </text>
        </g>
      ))}

      {showAxisLine && <line y2={height} stroke='rgba(36, 36, 38)' />}

      {label && (
        <text
          textAnchor='middle'
          transform={`translate(${-labelOffset}, ${height / 2}) rotate(-90)`}
        >
          {label}
        </text>
      )}
    </g>
  )
}
