import { ShoppingCart } from 'phosphor-react';
import { Container } from './styles';

import { ModalDescriptionItems } from '../Modals/ModalDescriptionItems';
import { useModal } from 'react-brave-modal';
import { useCallback } from 'react';
import { useCart } from '../../hooks/useCart';

type ButtonCartProps = {
  juiceId?: string;
  showItems?: boolean;
};
export function ButtonCart({ juiceId, showItems }: ButtonCartProps) {
  const { addJuice } = useCart();
  const { showModal } = useModal();

  const openModal = useCallback(() => {
    showModal({
      data: <ModalDescriptionItems />,
      type: 'custom',
    });
  }, []);

  return (
    <Container
      onClick={() =>
        showItems ? openModal() : addJuice(juiceId ? juiceId : '')
      }
    >
      <ShoppingCart color="white" size={24} />
    </Container>
  );
}
