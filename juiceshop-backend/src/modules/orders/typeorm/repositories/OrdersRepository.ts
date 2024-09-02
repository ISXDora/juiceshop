import IFindOrderDTO from '@modules/orders/dtos/IFindOrderDTO';
import Order from '../entities/Order';
import { AppDataSource } from '@shared/typeorm/data-source';
import Juice from '@modules/juices/typeorm/entities/Juice';
import ICreateJuiceDTO from '@modules/juices/dtos/ICreateJuiceDTO';

interface CreateOrderProps {
  addressMachine: number;
  juices: ICreateJuiceDTO[];
  pickupDate: string;
  total: string;
}

const OrderRepository = AppDataSource.getRepository(Order).extend({
  async findByPickupDate({
    addressMachine,
    date,
  }: IFindOrderDTO): Promise<Order | null> {
    return this.createQueryBuilder('order')
      .where('order.addressMachine = :addressMachine', { addressMachine })
      .andWhere('order.pickupDate = :pickupDate', { pickupDate: date })
      .getOne();
  },
  async createOrder({
    addressMachine,
    juices,
    pickupDate,
    total,
  }: CreateOrderProps): Promise<Order> {
    const order = this.create({
      addressMachine,
      juices,
      pickupDate,
      total,
    });

    return order;
  },
});

export { OrderRepository };
