import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Juice from '../../../juices/typeorm/entities/Juice';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pickupDate: string;

  @Column('int')
  addressMachine: number;

  @Column()
  total: string;

  @ManyToMany(() => Juice, juice => juice.orders, { cascade: true })
  @JoinTable({
    name: 'orders_juices',
    joinColumn: { name: 'orderId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'juiceId', referencedColumnName: 'id' },
  })
  juices: Juice[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;
