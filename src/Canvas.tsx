import { useEffect, useRef, useState } from 'react'
import D3RC from './d3rc'
import Shape from './shapes/Shape'
import RectComponent from './components/RectComponent'

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
export default function Canvas({
  width = window.innerWidth,
  height = window.innerHeight,
  children,
}: {
  width?: number
  height?: number
  children?: typeof RectComponent[]
}): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  function parseData(d3rc: D3RC): any {
    if (!children) return

    const c = children.length ? children : [children]
    c.forEach((child: any) => child.type({...child.props, d3rc}))
  }

  function initialize() {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const d3rc = new D3RC(canvas)
    
    parseData(d3rc)

    d3rc.draw()
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
