import React from 'react';
import PropTypes from 'prop-types';

const UisThLarge = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M20,3H4C3.4,3,3,3.4,3,4v16c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V4C21,3.4,20.6,3,20,3z M19,11h-6V5h6V11z M11,5v6H5V5H11z M5,13h6v6H5V13z M13,19v-6h6v6H13z'
  }));
};

UisThLarge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisThLarge.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisThLarge;