import IFindOrderDTO from '../dtos/IFindOrderDTO';
import Order from '../typeorm/entities/Order';

export interface IOrderRepository {
  findByPickupDate({ addressMachine, date }: IFindOrderDTO): Promise<Order>;
}
