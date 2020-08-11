import React from 'react';
import PropTypes from 'prop-types';

const UisCornerDownRight = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19.4,15.7L14.8,11c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l2.9,2.9h-7c-1.7,0-3-1.3-3-3V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v9.4c0,2.8,2.2,5,5,5h7l-2.9,2.9c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l4.6-4.6c0,0,0,0,0,0C19.8,16.7,19.8,16.1,19.4,15.7z'
  }));
};

UisCornerDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisCornerDownRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisCornerDownRight;