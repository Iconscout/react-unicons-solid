import React from 'react';
import PropTypes from 'prop-types';

const UisCompress = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M8,15H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h4v4c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1v-5C9,15.4,8.6,15,8,15z M8,2C7.4,2,7,2.4,7,3v4H3C2.4,7,2,7.4,2,8s0.4,1,1,1h5c0.6,0,1-0.4,1-1V3C9,2.4,8.6,2,8,2z M16,9h5c0.6,0,1-0.4,1-1s-0.4-1-1-1h-4V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v5C15,8.6,15.4,9,16,9z M21,15h-5c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1v-4h4c0.6,0,1-0.4,1-1S21.6,15,21,15z'
  }));
};

UisCompress.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisCompress.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisCompress;