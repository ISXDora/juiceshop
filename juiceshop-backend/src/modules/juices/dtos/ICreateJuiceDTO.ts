import Order from '@modules/orders/typeorm/entities/Order';
import { JuiceFlavors } from '@shared/types';

export default interface ICreateJuiceDTO {
  amount: number;
  price: number;
  type: JuiceFlavors;
  ice?: boolean;
  sugar?: boolean;
  order?: Order[];
  total: string;
}
