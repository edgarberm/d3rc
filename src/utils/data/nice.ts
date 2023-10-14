/**
 * Nice method inspired by d3.js.
 *
 * https://www.d3indepth.com/scales/
 */
export default function nice(
  domain: Tuple<number>,
  count: number = 10
): number[] {
  const [min, max] = domain
  const step = (max - min) / (count - 1)
  const nicemin = Math.floor(min / step) * step
  const nicemax = Math.ceil(max / step) * step

  return [nicemin, nicemax]
}
