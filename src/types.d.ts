declare module '*.css' {
  const content: Record<string, string>
  export default content
}

type Tuple<T> = [T, T]

type PointCollection = Tuple<number>[]

type ColorRGB = { r: number, g: number, b: number }
type ColorRGBA = ColorRGB & { a: number }