import Juice from '../typeorm/entities/Juice';
import juiceRepository from '../typeorm/repositories/JuiceRepository';
import { getRepository } from 'typeorm/globals.js';

class ListUserService {
  public async execute(): Promise<Juice[]> {
    const juiceRepository = getRepository(juiceRepository);

    const users = juiceRepository.find();

    return users;
  }
}

export default ListUserService;
