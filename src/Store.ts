export default class Store {
  private store: any[] = []

  constructor() {}

  public add(shape: any): void {
    this.store.push(shape)
  }

  public get(): any[] {
    return this.store
  }

  public getLength(): number {
    return this.store.length
  }

  public clear(): void {
    this.store.length = 0
    this.store = []
  }
  
  public update(): void {}
  public delete(): void {}
  public find(): void {}
  public changeIndex(): void {}
}
