import { Module } from '@nestjs/common';
import { OrderController } from './infrastructure/order.controller';
import { OrderService } from './application/order.service';
import { InMemoryOrderRepository } from './infrastructure/order.repository.impl';

@Module({
  controllers: [OrderController],
  providers: [
    OrderService,
    InMemoryOrderRepository,
    { provide: 'OrderRepository', useClass: InMemoryOrderRepository },
  ],
})
export class OrderModule {}
