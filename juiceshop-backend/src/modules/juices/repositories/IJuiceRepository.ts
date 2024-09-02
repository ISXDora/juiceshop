import ICreateJuiceDTO from '../dtos/ICreateJuiceDTO';
import Juice from '../typeorm/entities/Juice';

export interface IJuiceRepository {
  create(data: ICreateJuiceDTO): Promise<Juice | null>;
}
