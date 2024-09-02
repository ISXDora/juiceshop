import 'reflect-metadata';
import Juice from '../../modules/juices/typeorm/entities/Juice';
import Order from '../../modules/orders/typeorm/entities/Order';
import { DataSource, DataSourceOptions } from 'typeorm';

type AppDataSourceConstructorOptions = DataSourceOptions;

const options: AppDataSourceConstructorOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password:process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [Order, Juice],
  migrations: [`${__dirname}/../typeorm/migrations/*.{js,ts}`],
  subscribers: [],
};
export const AppDataSource = new DataSource(options);
