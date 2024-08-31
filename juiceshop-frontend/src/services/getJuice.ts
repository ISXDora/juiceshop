import axios from 'axios';
import { Juice } from '../types';
import { api } from './api';
import { toast } from 'react-toastify';

export const getJuice = async (id: string) => {
  try {
    const { data } = await api.get<Juice>(`/products/${id}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error('Erro na adição do produto');
      throw error;
    } else if (error instanceof Error) {
      throw error;
    }
  }
};
