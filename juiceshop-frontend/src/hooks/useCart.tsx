import { createContext, ReactNode, useContext, useState } from 'react';
import { Juice } from '../types';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getJuice } from '../services/getJuice';
import { verifyStock } from '../services/veryStock';
import { generateRandomJuice } from './../mocks';
interface CartProviderProps {
  children: ReactNode;
}

interface UpdateJuiceAmount {
  juiceId: string;
  amount: number;
}

interface UpdateJuiceOptionals {
  juiceId: string;
  ice?: boolean;
  sugar?: boolean;
}

interface CartContextData {
  cart: Juice[];
  addJuice: (juiceId: string) => Promise<void>;
  removeJuice: (juicetId: string) => void;
  updateJuiceAmount: ({ juiceId, amount }: UpdateJuiceAmount) => void;
  updateJuiceOptionals: ({ juiceId, ice, sugar }: UpdateJuiceOptionals) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);
const juices = generateRandomJuice();

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Juice[]>(() => {
    const storagedCart = localStorage.getItem('@JuiceShop:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });
  const addJuice = async (juiceId: string) => {
    try {
      const juiceExist = juices.find(juice => juice.id === juiceId);
      const juiceInCart = cart.find(juice => juice.id === juiceId);
      console.log(juiceExist, 'find suco in arrsuco');
      console.log(cart);

      if (!juiceExist) {
        throw new Error('Erro na adição do suco');
      }

      if (juiceInCart) {
        const updatedCart = cart.map(juice => {
          if (juice.id === juiceId) {
            return { ...juice, amount: juice.amount + 1 };
          }
          return juice;
        });
        setCart(updatedCart);
        localStorage.setItem('@JuiceShop:cart', JSON.stringify(updatedCart));
      } else {
        const newCart = [...cart, { ...juiceExist }];
        setCart(newCart);
        localStorage.setItem('@JuiceShop:cart', JSON.stringify(newCart));
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const removeJuice = (juiceId: string) => {
    try {
      const juiceExists = cart.find(item => item.id === juiceId);
      const filteredJuices = cart.filter(juice => {
        return juice.id !== juiceId;
      });

      if (!juiceExists) {
        throw new Error('Erro na remoção do produto');
      }

      setCart(filteredJuices);
      localStorage.setItem('@JuiceShop:cart', JSON.stringify(filteredJuices));
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const updateJuiceAmount = async ({ juiceId, amount }: UpdateJuiceAmount) => {
    try {
      const juiceExists = cart.find(juice => juice.id === juiceId);

      if (!juiceExists) {
        throw new Error('Erro na alteração de quantidade do produto');
      }

      if (amount <= 0) {
        throw new Error('Erro na alteração de quantidade do produto');
      }

      if (juiceExists) {
        const updateJuices = cart.map(juice => {
          if (juice.id === juiceId) {
            return { ...juice, amount: amount };
          }
          return juice;
        });

        setCart(updateJuices);
        localStorage.setItem('@JuiceShop:cart', JSON.stringify(updateJuices));
      } else {
        throw new Error('Quantidade solicitada fora de estoque');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error('Erro na alteração de quantidade do produto');
      } else if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const updateJuiceOptionals = async ({
    juiceId,
    ice,
    sugar,
  }: UpdateJuiceOptionals) => {
    try {
      const juiceExists = cart.find(juice => juice.id === juiceId);

      if (!juiceExists) {
        throw new Error('Erro na alteração de itens adicionais do suco.');
      }

      if (juiceExists) {
        const updateJuices = cart.map(juice => {
          if (juice.id === juiceId) {
            const updatedJuice = { ...juice };

            if (ice !== undefined) {
              updatedJuice.ice = ice;
            }

            if (sugar !== undefined) {
              updatedJuice.sugar = sugar;
            }

            return updatedJuice;
          }
          return juice;
        });

        setCart(updateJuices);

        console.log(cart, 'cart após atualização de opcionia');
        localStorage.setItem('@JuiceShop:cart', JSON.stringify(updateJuices));
        console.log(
          'Cart saved to localStorage:',
          JSON.stringify(updateJuices)
        );
      } else {
        throw new Error('Erro na alteração de itens adicionais do produto.');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error('Erro na alteração de itens adicionais do produto.');
      } else if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addJuice,
        removeJuice,
        updateJuiceAmount,
        updateJuiceOptionals,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
