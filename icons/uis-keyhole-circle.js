import React from 'react';
import PropTypes from 'prop-types';

const UisKeyholeCircle = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M13.7,11c-0.2,0.3-0.4,0.6-0.7,0.7V15c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3.3c-1-0.6-1.3-1.8-0.7-2.7S12,7.7,13,8.3C14,8.8,14.3,10,13.7,11z'
  }));
};

UisKeyholeCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisKeyholeCircle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisKeyholeCircle;