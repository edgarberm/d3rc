import Shape from '../shapes/Shape'
import D3RC from '../d3rc'

export default function RectComponent({
  x,
  y,
  width,
  height,
  styles,
  d3rc,
}: {
  x: number
  y: number
  width: number
  height: number
  styles?: any,
  d3rc?: D3RC
}): JSX.Element {  
  d3rc?.add(new Shape('rect', { x, y, w: width, h: height, styles }))

  return <></>
}
