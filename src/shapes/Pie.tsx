import { arc, pie } from 'd3'
import { useEffect, useState } from 'react'
import css from '../styles.module.css'

export default function Pie({
  data,
  innerRadius = 0,
  outerRadius,
  width,
  height,
  domain,
  value,
  color = 'rgba(0, 122, 255)',
  stroke = 'transparent'
}: {
  data: any
  innerRadius?: number
  outerRadius: number
  width: number
  height: number
  domain: string
  value: string
  color?: string
  stroke?: string
}): JSX.Element {
  const [arcData, setArcData] = useState<any>([])

  useEffect(() => {
    const values = data.map((d: any, i: number) => d[value])
    const a = pie()(values)

    setArcData(a)
  }, [data])

  const getPath = (d: any) => {
    const path = arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(d.startAngle)
      .endAngle(d.endAngle)
      .padAngle(.02)
      // .padRadius(100)
      .cornerRadius(4)(d)

    return path as string
  }

  getPath(data)

  return (
    <g
      transform={`translate(${width / 2 - outerRadius / 2}, ${height / 2 - outerRadius / 2})`} className={css.pie}>
      {arcData.map((d: any, i: number) => (
        <path
          key={i}
          stroke={stroke}
          fill={color}
          d={getPath(d)}
        />
      ))}
    </g>
  )
}
