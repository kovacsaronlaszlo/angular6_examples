export class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public deparment: string[],
    public price: number) {

  }
}
