import sprite from '../../../../images/sprite.svg';
import { PropTypes } from 'prop-types';

const Icon = ({
  name,
  width = 24,
  height = 24,
  fill = '#ffffff00',
  stroke = '#000000',
  className = 'icon',
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    >
      <use href={`${sprite}#${name}`}></use>
    </svg>
  );
};

export default Icon;

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string,
  stroke: PropTypes.string,
  className: PropTypes.string,
};
