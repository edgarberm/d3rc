import { interpolateNumber, interpolateRgb } from '../data/interpolate'

/**
 * Linear scale inspired by d3.js scales.
 *
 * https://www.d3indepth.com/scales/
 * 
 * ```ts
 *  const linearScale = scaleLinear([-10, 0, 10], ['#ff0000', '#dddddd', '#0000ff'])
 *  console.log(linearScale(-10)) // rgb(255, 0, 0)
 *  console.log(linearScale(0)) // rgb(221, 221, 221)
 *  console.log(linearScale(5)) // rgb(111, 111, 238)
 * ```
 */
export default function scaleLinear(
  domain: number[],
  range: (string | number)[]
): (value: number) => number | string {
  const dvalues = domain.slice()
  const rvalues = range.slice()

  function scale(value: number): number | string {
    if (value < dvalues[0] || value > dvalues[dvalues.length - 1]) {
      return ''
    }

    for (let i = 0; i < rvalues.length - 1; i++) {
      if (value >= dvalues[i] && value <= dvalues[i + 1]) {
        // fracción entre 0 y 1 
        const t = (value - dvalues[i]) / (dvalues[i + 1] - dvalues[i])

        if (
          typeof rvalues[i] === 'number' &&
          typeof rvalues[i + 1] === 'number'
        ) {
          return interpolateNumber(rvalues[i] as number, rvalues[i + 1] as number, t)
        } else if (
          typeof rvalues[i] === 'string' &&
          typeof rvalues[i + 1] === 'string'
        ) {
          return interpolateRgb(rvalues[i] as string, rvalues[i + 1] as string)(t)
          /** @todo interpolate color */
        }
      }
    }
    return ''
  }

  scale.domain = function (newDomain: Tuple<number>): void {
    dvalues.length = 0
    dvalues.push(...newDomain)
  }

  scale.range = function (newRange: Tuple<string | number>): void {
    rvalues.length = 0
    rvalues.push(...newRange)
  }

  return scale
}
