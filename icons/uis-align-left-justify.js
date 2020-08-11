import React from 'react';
import PropTypes from 'prop-types';

const UisAlignLeftJustify = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,15H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,15,21,15z M15,19H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h12c0.6,0,1-0.4,1-1S15.6,19,15,19z M3,5h18c0.6,0,1-0.4,1-1s-0.4-1-1-1H3C2.4,3,2,3.4,2,4S2.4,5,3,5z M21,7H3C2.4,7,2,7.4,2,8s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,7,21,7z M21,11H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,11,21,11z'
  }));
};

UisAlignLeftJustify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisAlignLeftJustify.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisAlignLeftJustify;