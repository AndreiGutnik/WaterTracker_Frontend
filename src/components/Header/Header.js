import { useAuth } from 'hooks/useAuth';

import Logo from '../../images/logo.svg';
// import Icons from '../../images/sprite.svg';
import { Wrapper, WrapperLogo, LogoTag } from './Header.styled';
import { UserAuth } from './UserAuth/UserAuth';
import { UserLogo } from './UserLogo/UserLogo';
import { Container } from 'components/Container';

export const Header = props => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <Wrapper>
        <WrapperLogo to={isLoggedIn ? '/homepage' : '/'}>
          <LogoTag src={Logo} alt="logo of App" />
          <p>Tracker of water</p>
        </WrapperLogo>
        {isLoggedIn ? <UserLogo /> : <UserAuth />}
        {/* <WrapperSignin to="/homepage">
        <p>Sign in</p>
        <svg width="28" height="28">
          <use href={Icons + '#user'}></use>
        </svg>
      </WrapperSignin> */}
      </Wrapper>
    </Container>
  );
};
