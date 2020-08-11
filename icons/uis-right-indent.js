import React from 'react';
import PropTypes from 'prop-types';

const UisRightIndent = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M3,7h18c0.6,0,1-0.4,1-1s-0.4-1-1-1H3C2.4,5,2,5.4,2,6S2.4,7,3,7z M3,11h10c0.6,0,1-0.4,1-1s-0.4-1-1-1H3c-0.6,0-1,0.4-1,1S2.4,11,3,11z M21,17H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,17,21,17z M3,15h10c0.6,0,1-0.4,1-1s-0.4-1-1-1H3c-0.6,0-1,0.4-1,1S2.4,15,3,15z M18,13.7c0,0.6,0.4,1,1,1c0.2,0,0.5-0.1,0.6-0.2l2-1.7c0,0,0.1-0.1,0.1-0.1c0.4-0.4,0.3-1.1-0.1-1.4l-2-1.7c-0.4-0.4-1.1-0.3-1.4,0.1c-0.4,0.4-0.3,1.1,0.1,1.4l1.1,0.9l-1.1,0.9C18.1,13.1,18,13.4,18,13.7z'
  }));
};

UisRightIndent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisRightIndent.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisRightIndent;