import Circle from './Circle'
import Rect from './Rect'

const shapeTypes: any = {
  circle: Circle,
  rect: Rect,
  polygon: Rect,
  line: Rect,
  ellipse: Rect,
  text: Rect,
  image: Rect,
  complex: Rect,
}

// const commonAttributes = {
//   lineWidth: 0.5,
//   shadow: {
//     offsetX: 5,
//     offsetY: 5,
//     blur: 5,
//     color: '#000000',
//   },
//   fillStyle: '#000000',
//   strokeStyle: '#000000',
//   rotate: 0,
//   opacity: 1,
//   lineDash: [[5, 5], 5],
//   miterLimit: 3,
// }

// const pathAttributes = {
//   lineCap: '',
//   lineJoin: '', // bevel, round, miter
//   miterLimit: '',
//   gra: [],
//   isLineDash: false,
//   needShadow: false,
//   needGra: 'no',
// }

export default class Shape {
  private type: string
  private Shape: any

  constructor(type: string, options: any) {
    this.type = type
    this.Shape = new shapeTypes[this.type](options)
  }

  public draw(context: CanvasRenderingContext2D) {
    this.Shape.draw(context)
  }
}
