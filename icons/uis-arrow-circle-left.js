import React from 'react';
import PropTypes from 'prop-types';

const UisArrowCircleLeft = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M15,13h-3.6l1.3,1.3c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0l-3-3c-0.4-0.4-0.4-1,0-1.4c0,0,0,0,0,0l3-3c0.4-0.4,1-0.4,1.4,0c0,0,0,0,0,0c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0L11.4,11H15c0.6,0,1,0.4,1,1S15.6,13,15,13z'
  }));
};

UisArrowCircleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisArrowCircleLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisArrowCircleLeft;