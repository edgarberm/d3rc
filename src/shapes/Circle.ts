import { uuidv4 } from '../utils'

const DEFAULT_STYLES = {
  lineWidth: 0.5,
}

export default class Circle {
  public type: string = 'circle'
  public id: string
  private points: PointCollection = []
  private styles: any
  private x: number
  private y: number
  private r: number
  private sA: number
  private eA: number

  constructor(options: any) {
    this.id = uuidv4()
    this.x = options.x
    this.y = options.y
    this.r = options.r
    this.sA = options.sA || 0
    this.eA = options.eA || Math.PI * 2
    this.styles = options.styles

    // this.setPoints()
  }

  public draw(context: CanvasRenderingContext2D): void {
    /** @todo clean operations here */

    this.createPath(context)
  }

  private createPath(context: CanvasRenderingContext2D): void {
    context.beginPath()
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
    context.closePath()
    
    context.save()
    
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

    context.restore()

    // context.moveTo(points[start][0], points[start][1])
    // for (var i = start + 1; i <= len - 1; ++i) {
    //   context.lineTo(points[i][0], points[i][1])
    // }
  }

  private setPoints(): void {
    const aA = this.eA - this.sA

    for (let i = 0; i <= 90; i++) {
      this.sA = this.sA + (i * aA) / 100

      this.points.push([
        this.x + (this.r + this.styles.lineWidth / 2) * Math.sin(this.sA),
        this.y - (this.r + this.styles.lineWidth / 2) * Math.cos(this.sA),
      ])
    }

    this.points.unshift([this.x, this.y])
  }
}
