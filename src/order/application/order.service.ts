import { Injectable } from '@nestjs/common';
import { InMemoryOrderRepository } from '../infrastructure/order.repository.impl';
import { Order } from '../domain/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: InMemoryOrderRepository) {}

  createOrder(createOrderDto: CreateOrderDto): Order {
    const { productId, quantity, userId } = createOrderDto;
    const newOrder = new Order(0, productId, quantity, userId);
    return this.orderRepository.create(newOrder);
  }

  getOrderById(id: number): Order | undefined {
    return this.orderRepository.findById(id);
  }
}
