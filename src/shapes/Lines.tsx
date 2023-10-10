import { curveBumpX, line, ScaleBand, ScaleLinear, selectAll } from 'd3'
import { useCallback, useEffect, useMemo, useState } from 'react'
import css from '../styles.module.css'

export default function Lines({
  data,
  min,
  max,
  xScale,
  yScale,
  width,
  height,
  lineWidth,
  domain,
  value,
  color = 'rgba(0, 122, 255)',
}: {
  data: any
  min: number
  max: number
  xScale: ScaleBand<string>
  yScale: ScaleLinear<number, number, never>
  width: number
  height: number
  lineWidth: number
  domain: string
  value: string
  color?: string
}): JSX.Element {
  const [pathData, setPathData] = useState<string>('')

  useEffect(() => {
    const d = line().curve(curveBumpX)(values) as string
    // selectAll('path').transition().duration(1000)
    setPathData(d)

  }, [data, xScale, yScale])

  const values = useMemo(() =>
    data.map((d: any, i: number) => [
      xScale(d[domain])! + xScale.bandwidth() / 2,
      yScale(d[value]),
    ]),
    [data, xScale, yScale]
  )

  return (
    <g>
      <path
        stroke={color}
        strokeWidth={lineWidth}
        fill='transparent'
        d={pathData}
        className={css.path}
      />
    </g>
  )
}
