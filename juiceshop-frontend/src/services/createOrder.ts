import axios from 'axios';
import { api } from './api';
import { JuiceFlavors } from '../types';

export interface JuiceRequestDTO {
  id: string
  type: string;
  price: number;
  amount: number;
  ice?: boolean;
  sugar?: boolean;
  total: string;
}

interface CreateOrderRequestDTO {
  addressMachine: number;
  juices: JuiceRequestDTO[];
  pickupDate: string;
  total: string;
}

export const createOrder = async ({
  addressMachine, juices, pickupDate, total
}: CreateOrderRequestDTO) => {
  try {
    const data = await api.post('/orders', {
      addressMachine, juices, pickupDate, total
    });
    console.log(data, 'post')
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else if (error instanceof Error) {
      throw error;
    }
  }
};
