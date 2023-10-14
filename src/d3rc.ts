import Store from './Store'
import { uuidv4 } from './utils'

export default class D3RC {
  private canvas: HTMLCanvasElement
  private store: Store

  public id: string
  public context: CanvasRenderingContext2D
  private dpr = window.devicePixelRatio || 1

  constructor(canvas: HTMLCanvasElement) {
    this.id = uuidv4()
    this.canvas = canvas
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D

    const rect = this.canvas.getBoundingClientRect()
    this.canvas.width = rect.width * this.dpr
    this.canvas.height = rect.height * this.dpr
    this.canvas.style.width = `${rect.width}px`
    this.canvas.style.height = `${rect.height}px`
    this.context.scale(this.dpr, this.dpr)

    this.store = new Store()
  }

  public draw(): void {
    const items = this.store.get()
    
    this.context.save()
    this.context.setTransform(1, 0, 0, 1, 0, 0)
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.restore()

    for (const item of items) {
      item.draw(this.context)
    }
  }

  public add(item: any): void {
    this.store.add(item)
  }
}
