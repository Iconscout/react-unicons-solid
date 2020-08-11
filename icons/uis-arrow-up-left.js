import React from 'react';
import PropTypes from 'prop-types';

const UisArrowUpLeft = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M9.4,8H17c0.6,0,1-0.4,1-1s-0.4-1-1-1H7C6.4,6,6,6.4,6,7v10c0,0.6,0.4,1,1,1s1-0.4,1-1V9.4l8.3,8.3c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L9.4,8z'
  }));
};

UisArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisArrowUpLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisArrowUpLeft;