import { ButtonContainer } from './Button.styled';
import { PropTypes } from 'prop-types';

const Button = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
