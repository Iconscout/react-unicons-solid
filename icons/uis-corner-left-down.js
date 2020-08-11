import React from 'react';
import PropTypes from 'prop-types';

const UisCornerLeftDown = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,4.3h-9.4c-2.8,0-5,2.2-5,5v7l-2.9-2.9c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.6,4.6c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l4.6-4.6c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-2.9,2.9v-7c0-1.7,1.3-3,3-3H21c0.6,0,1-0.4,1-1S21.6,4.3,21,4.3z'
  }));
};

UisCornerLeftDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisCornerLeftDown.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisCornerLeftDown;