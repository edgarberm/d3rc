import { useEffect, useRef } from 'react'
import D3RC from './d3rc'
import Shape from './shapes/Shape'
import extent from './utils/data/extent'
import nice from './utils/data/nice'
import scaleLinear from './utils/scales/scaleLinear'

function randomIntFromInterval(min: number, max: number): number {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Refs:
 *
 * Layer strategy
 * https://github.com/ant512/CanvasLayers/blob/master/canvaslayers.js
 *
 * https://www.d3indepth.com/shapes/
 *
 * https://medium.com/@SnapdragonCao/integrate-d3-js-into-declarative-web-frameworks-ce1fc8e398a0
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
  const canvasRef = useRef<HTMLCanvasElement>(null)

  function initialize() {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const d3rc = new D3RC(canvas)

    draw(d3rc)
  }

  function draw(d3rc: D3RC) {
    for (let index = 0; index < 5000; index++) {
      const circle = new Shape('circle', {
        x: randomIntFromInterval(10, 790),
        y: randomIntFromInterval(10, 490),
        r: 3,
        styles: {
          // lineWidth: 1,
          // strokeStyle: '#000000',
          fillStyle: 'hsl(206,100%,52%)',
        },
      })

      // d3rc.add(rect)
      d3rc.add(circle)
    }

    d3rc.draw()

    // window.setTimeout(() => {
    //   draw(d3rc)
    // }, 1000)
  }

  useEffect(() => {
    initialize()
  }, [])

  return (
    <canvas ref={canvasRef} width={width} height={height}>
      An alternative text describing what your canvas displays.
    </canvas>
  )
}
