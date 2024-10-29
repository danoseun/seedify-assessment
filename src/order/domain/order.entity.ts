export class Order {
  constructor(
    public id: number,
    public productId: number,
    public quantity: number,
    public userId: number,
  ) {}
}
