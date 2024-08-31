import { useCart } from '../../hooks/useCart';
import { Juice } from '../../types';
import { ButtonCart } from '../ButtonCart/ButtonCart';
import { Container, ContainerInput, ContainerValue, Content } from './style';

type CardProps = {
  id: string;
  title: string;
  description: string;
  img?: string;
  value: string;
};
export function Card({ description, title, value, img, id }: CardProps) {
  const { updateJuiceAmount, cart } = useCart();
  const findJuice = cart.find(item => item.id === id);

  function handleJuiceIncrement(juice: Juice) {
    updateJuiceAmount({ amount: juice.amount + 1, juiceId: juice.id });
  }

  function handleJuiceDecrement(juice: Juice) {
    updateJuiceAmount({ amount: juice.amount - 1, juiceId: juice.id });
  }

  return (
    <Container>
      <img src={img} />
      <strong>{title}</strong>
      <p>{description}</p>
      <Content>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ContainerValue>
            <p>{value}</p>
          </ContainerValue>

          {findJuice ? (
            <ContainerInput>
              <label>
                <button onClick={() => handleJuiceDecrement(findJuice)}>
                  -
                </button>
                <input placeholder={`${findJuice.amount}`}></input>
                <button onClick={() => handleJuiceIncrement(findJuice)}>
                  +
                </button>
              </label>
            </ContainerInput>
          ) : (
            <ButtonCart juiceId={id} />
          )}
        </div>
      </Content>
    </Container>
  );
}
