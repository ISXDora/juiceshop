import ICreateJuiceDTO from '@modules/juices/dtos/ICreateJuiceDTO';
import Juice from '../entities/Juice';
import { AppDataSource } from '@shared/typeorm/data-source';

const JuiceRepository = AppDataSource.getRepository(Juice).extend({
  async create(data: ICreateJuiceDTO): Promise<Juice> {
    const queryBuilder = this.createQueryBuilder('juice');
    const result = await queryBuilder
      .insert()
      .into(Juice)
      .values({
        amount: data.amount,
        price: data.price,
        type: data.type,
        ice: data.ice || false,
        sugar: data.sugar || false,
        total: data.total,
      })
      .returning('*')
      .execute();

    return result;
  },

  async findById(id: string): Promise<Juice | null> {
    return this.findOneBy({ id });
  },
});

export { JuiceRepository };
