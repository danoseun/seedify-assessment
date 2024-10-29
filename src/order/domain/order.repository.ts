import { Order } from './order.entity';

export interface OrderRepository {
  create(order: Order): Order;
  findById(id: number): Order | undefined;
}
