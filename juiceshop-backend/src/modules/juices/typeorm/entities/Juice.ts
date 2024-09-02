import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Order from '../../../orders/typeorm/entities/Order';
import { JuiceFlavors } from '../../../../../src/shared/types';

@Entity('juices')
class Juice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  price: number;

  @Column({
    type: 'enum',
    enum: JuiceFlavors,
  })
  type: JuiceFlavors;

  @Column('int')
  amount: number;

  @Column({ default: false })
  ice?: boolean;

  @Column({ default: false })
  sugar?: boolean;

  @ManyToMany(() => Order, order => order.juices)
  orders: Order[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Juice;
