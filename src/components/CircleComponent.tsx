import Shape from '../shapes/Shape'
import D3RC from '../d3rc'

export default function CircleComponent({
  x,
  y,
  r,
  styles,
  d3rc,
}: {
  x: number
  y: number
  r: number
  styles?: any,
  d3rc?: D3RC
}): JSX.Element {  
  d3rc?.add(new Shape('circle', { x, y, r, styles }))

  return <></>
}
