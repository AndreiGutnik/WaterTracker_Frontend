import Logo from '../../images/logo.svg';
import Icons from '../../images/sprite.svg';
import { Wrapper, WrapperLogo, WrapperSignin, LogoTag } from './Header.styled';

export const Header = props => {
  return (
    <Wrapper>
      <WrapperLogo>
        <LogoTag src={Logo} alt="logo of App" />
        <div>
          <p>Tracker</p>
          <p>of water</p>
        </div>
      </WrapperLogo>
      <WrapperSignin>
        <p>Sign in</p>
        <svg width="28" height="28">
          <use href={Icons + '#user'}></use>
        </svg>
      </WrapperSignin>
    </Wrapper>
  );
};
