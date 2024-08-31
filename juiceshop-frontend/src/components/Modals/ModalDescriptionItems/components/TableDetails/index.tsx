import { Controller } from 'react-hook-form';
import { ComponentProps } from '../..';
import { useCart } from '../../../../../hooks/useCart';
import { Juice } from '../../../../../types';
import { formatPrice } from '../../../../../util/format';
import { InputButtonToogle } from '../../../../InputButtonToggle';
import { ProductTable, Total } from './style';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { useEffect } from 'react';

type options = 'ice' | 'sugar';
type ToggleProps = {
  juiceId: string;
  checked: boolean;
  option: options;
};

export function TableDetails({ next, setValue, disabled }: ComponentProps) {
  const { cart, removeJuice, updateJuiceAmount, updateJuiceOptionals } =
    useCart();

  const cartFormatted = cart.map(juice => {
    const subtotal = formatPrice(juice.price * juice.amount);
    const price = formatPrice(juice.price);
    return {
      price,
      subtotal,
    };
  });
  const total = formatPrice(
    cart.reduce((sumTotal, juice) => {
      sumTotal += juice.price * juice.amount;
      return sumTotal;
    }, 0)
  );

  function handleJuiceIncrement(juice: Juice) {
    updateJuiceAmount({ amount: juice.amount + 1, juiceId: juice.id });
  }

  function handleJuiceDecrement(juice: Juice) {
    updateJuiceAmount({ amount: juice.amount - 1, juiceId: juice.id });
  }

  function handleRemoveJuice(juiceId: string) {
    removeJuice(juiceId);
  }

  const handleToggleChange = ({ checked, juiceId, option }: ToggleProps) => {
    if (option === 'ice') {
      updateJuiceOptionals({
        juiceId,
        ice: checked,
      });
    }
    if (option === 'sugar') {
      updateJuiceOptionals({
        juiceId,
        sugar: checked,
      });
    }
  };

  useEffect(() => {
    cart.forEach((juice, index) => {
      setValue(`juices[${index}].amount`, juice.amount);
      setValue(`juices[${index}].id`, juice.id);
      setValue(`juices[${index}].sugar`, juice.sugar);
      setValue(`juices[${index}].ice`, juice.ice);
      setValue(`juices[${index}].price`, juice.price);
      setValue(
        `juices[${index}].total`,
        formatPrice(juice.price * juice.amount)
      );
      setValue('addressMachine', 1);
      setValue('total', total);
    });
  }, [cart, setValue]);

  return (
    <>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="juice image" />
            <th>SUCO</th>
            <th>QTD</th>
            <th>OPCIONAL</th>
            {/* <th>DATA DE RETIRADA</th> */}
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          {cart.map((juice, index) => {
            return (
              <tr key={juice.id}>
                <td>
                  <img src={juice.image} alt="" />
                </td>
                <td>
                  <strong>{juice.title}</strong>
                  <span>{cartFormatted[index].price}</span>
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                      disabled={juice.amount <= 1}
                      onClick={() => handleJuiceDecrement(juice)}
                    >
                      <MdRemoveCircleOutline size={20} />
                    </button>
                    <input type="text" readOnly value={juice.amount} />
                    <button
                      type="button"
                      onClick={() => handleJuiceIncrement(juice)}
                    >
                      <MdAddCircleOutline size={20} />
                    </button>
                  </div>
                </td>
                <td>
                  <InputButtonToogle
                    id={`1-${juice.id}`}
                    name="sugar"
                    title="Açúcar"
                    checked={juice.sugar}
                    key={`1-${juice.id}`}
                    onToggle={checked =>
                      handleToggleChange({
                        checked,
                        juiceId: juice.id,
                        option: 'sugar',
                      })
                    }
                  />

                  <InputButtonToogle
                    id={`2-${juice.id}`}
                    name="ice"
                    title="Gelo"
                    key={`2-${juice.id}`}
                    checked={juice.ice}
                    onToggle={checked =>
                      handleToggleChange({
                        checked,
                        juiceId: juice.id,
                        option: 'ice',
                      })
                    }
                  />
                </td>
                {/* <td>
                  <div
                    style={{
                      width: 200,
                    }}
                  >
                    <input
                      style={{
                        width: '100%',
                      }}
                      type="datetime-local"
                    ></input>
                  </div>
                </td> */}
                <td>
                  <strong>
                    {cartFormatted[index].subtotal}
                    <input type="hidden" name="total" value={total}></input>
                  </strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleRemoveJuice(juice.id)}
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button" onClick={next}>
          Próximo
        </button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </>
  );
}
