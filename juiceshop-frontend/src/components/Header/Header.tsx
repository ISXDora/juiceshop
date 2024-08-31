import LogoJuiceShop from '../../assets/image.png';
import { ButtonCart } from '../ButtonCart/ButtonCart';
import { HeaderContainer } from './style';
export function Header() {
  return (
    <HeaderContainer>
      <a>
        <img src={LogoJuiceShop} alt="" />
      </a>

      <div>
        <span></span>
        <input></input>
        <ButtonCart showItems />
      </div>
    </HeaderContainer>
  );
}
