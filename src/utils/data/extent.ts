/**
 * Extent method inspired by d3.js.
 * 
 * https://www.d3indepth.com/scales/
 */
export default function extent(data: number[]): Tuple<number> {
  const result: Tuple<number> = [0, 0]

  for (const value of data) {
    if (value < result[0]) {
      result[0] = value
    }
    if (value > result[1]) {
      result[1] = value
    }
  }

  return result
}
