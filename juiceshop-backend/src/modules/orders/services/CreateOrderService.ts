import Order from '../typeorm/entities/Order';
import AppError from '@shared/errors/AppError';
import { OrderRepository } from '../typeorm/repositories/OrdersRepository';
import { JuiceRepository } from '@modules/juices/typeorm/repositories/JuiceRepository';
import ICreateJuiceDTO from '@modules/juices/dtos/ICreateJuiceDTO';
import Juice from '@modules/juices/typeorm/entities/Juice';
import { AppDataSource } from '@shared/typeorm/data-source';

interface IRequest {
  juices: ICreateJuiceDTO[];
  addressMachine: number;
  pickupDate: string;
  total: string;
}

class CreateOrderService {
  public async execute({
    juices,
    addressMachine,
    pickupDate,
    total,
  }: IRequest): Promise<Order> {
    //   // eslint-disable-next-line prefer-const
    //   let juicesArr: Juice[] = [];
    //   const orderExists = await OrderRepository.findByPickupDate({
    //     addressMachine: addressMachine,
    //     date: pickupDate,
    //   });

    //   if (orderExists) {
    //     throw new AppError('There is already one order with this name!');
    //   }

    //   for (const dataJuice of juices) {
    //     const juice = await JuiceRepository.create(dataJuice);

    //     if (juice) {
    //       juicesArr.push(juice);
    //     } else {
    //       throw new AppError('Failed to create a juice!');
    //     }
    //   }

    //   const order = OrderRepository.create({
    //     addressMachine,
    //     juices: juicesArr,
    //     pickupDate,
    //     total,
    //   });

    //   const result = await OrderRepository.save(order);

    //   return result;
    // }
    const result = await AppDataSource.transaction(
      async transactionalEntityManager => {
        const orderExists = await transactionalEntityManager
          .getRepository(Order)
          .findOne({
            where: {
              addressMachine,
              pickupDate,
            },
          });

        if (orderExists) {
          throw new AppError('There is already one order with this name!');
        }

        const juicesArr: Juice[] = [];
        for (const dataJuice of juices) {
          if (!dataJuice.price) {
            throw new AppError('Price is required for juice creation');
          }

          const juice = transactionalEntityManager.create(Juice, {
            type: dataJuice.type,
            amount: dataJuice.amount,
            ice: dataJuice.ice,
            price: dataJuice.price,
            sugar: dataJuice.sugar,
          });
          await transactionalEntityManager.save(juice);

          juicesArr.push(juice);
        }

        const order = transactionalEntityManager.create(Order, {
          addressMachine,
          juices: juicesArr,
          pickupDate,
          total,
        });

        const result = await transactionalEntityManager.save(order);

        return result;
      },
    );

    return result;
  }
}

export default CreateOrderService;
