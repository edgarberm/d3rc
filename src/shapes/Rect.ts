import { uuidv4 } from '../utils'

export default class Rect {
  public  type: string = 'rect'
  public id: string
  private points: PointCollection = []
  private styles: any
  private x: number
  private y: number
  private w: number
  private h: number

  constructor(options: any) {
    this.id = uuidv4()
    this.x = options.x
    this.y = options.y
    this.w = options.w
    this.h = options.h
    this.styles = options.styles

    // this.setPoints()
  }

  draw(context: CanvasRenderingContext2D): void {
    /** @todo clean operations here */

    this.createPath(context)
  }

  private createPath(context: CanvasRenderingContext2D): void {
    context.beginPath()
    context.rect(this.x, this.y, this.w, this.h)
    context.closePath()
    
    for (const attr in this.styles) {
      // @ts-ignore
      context[attr] = this.styles[attr]
    }
    
    if (this.styles.fillStyle) {
      context.fill()
    }

    if (this.styles.lineWidth || this.styles.strokeStyle) {
      context.stroke()
    }
  }

  private setPoints(): void {
    this.points.push([this.x - this.w / 2, this.y - this.h / 2])
    this.points.push([this.x - this.w / 2, this.y + this.h / 2])
    this.points.push([this.x + this.w / 2, this.y + this.h / 2])
    this.points.push([this.x + this.w / 2, this.y - this.h / 2])
  }
}
