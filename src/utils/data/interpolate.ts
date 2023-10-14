export function interpolateNumber(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

export function interpolateRgb(a: string, b: string): (value: number) => string {
  const colorA = parseColor(a)
  const colorB = parseColor(b)

  return function (t: number): string {
    const r = Math.round(interpolateNumber(colorA.r, colorB.r, t))
    const g = Math.round(interpolateNumber(colorA.g, colorB.g, t))
    const b = Math.round(interpolateNumber(colorA.b, colorB.b, t))

    return `rgb(${r},${g},${b})`
  }
}

function parseColor(color: string): ColorRGB {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
  if (match) {
    return {
      r: parseInt(match[1], 16),
      g: parseInt(match[2], 16),
      b: parseInt(match[3], 16),
    }
  } else {
    // Parse as an RGB color
    const rgbMatch = /rgb\((\d+), (\d+), (\d+)\)/.exec(color)
    
    if (rgbMatch) {
      return {
        r: parseInt(rgbMatch[1], 10),
        g: parseInt(rgbMatch[2], 10),
        b: parseInt(rgbMatch[3], 10),
      }
    }

    throw new Error(`Invalid color format: ${color}`)
  }
}
