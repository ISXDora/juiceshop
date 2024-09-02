import { IOrderRepository } from '@modules/orders/repositories/IOrderRepository';
import { OrderRepository } from '@modules/orders/typeorm/repositories/OrdersRepository';
import { container } from 'tsyringe';

const registerRepositories = (): void => {
  // container.registerSingleton<IOrderRepository>(
  //   'OrderRepository',
  //   OrderRepository,
  // );
};

export default { registerRepositories };
