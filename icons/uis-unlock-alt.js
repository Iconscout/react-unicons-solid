import React from 'react';
import PropTypes from 'prop-types';

const UisUnlockAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,9H9V7c0-0.8,0.3-1.5,0.9-2.1c1.2-1.2,3.1-1.2,4.2,0c0.4,0.4,0.6,0.9,0.8,1.4c0,0,0,0,0,0C15,6.8,15.6,7.1,16.1,7c0.5-0.1,0.9-0.7,0.7-1.2c-0.2-0.9-0.7-1.7-1.3-2.3C14.6,2.5,13.3,2,12,2C9.2,2,7,4.2,7,7v2c-1.7,0-3,1.3-3,3v7c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3v-7C20,10.3,18.7,9,17,9z M13,17c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3c0-0.6,0.4-1,1-1s1,0.4,1,1V17z'
  }));
};

UisUnlockAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisUnlockAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisUnlockAlt;