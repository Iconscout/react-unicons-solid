import React from 'react';
import PropTypes from 'prop-types';

const UisCornerDownLeft = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M18.7,2c-0.6,0-1,0.4-1,1v10.4c0,1.1-0.9,2-2,2h-8l2.9-2.9c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-4.6,4.6l0,0c-0.4,0.4-0.4,1,0,1.4l4.6,4.6C9.4,21.9,9.7,22,9.9,22c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4l-2.9-2.9h8c2.2,0,4-1.8,4-4V3C19.7,2.4,19.2,2,18.7,2z'
  }));
};

UisCornerDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisCornerDownLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisCornerDownLeft;