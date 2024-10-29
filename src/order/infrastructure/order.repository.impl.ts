import { OrderRepository } from '../domain/order.repository';
import { Order } from '../domain/order.entity';

export class InMemoryOrderRepository implements OrderRepository {
  private orders: Order[] = [];

  create(order: Order): Order {
    order.id = this.orders.length + 1;
    this.orders.push(order);
    return order;
  }

  findById(id: number): Order | undefined {
    return this.orders.find((order) => order.id === id);
  }
}
