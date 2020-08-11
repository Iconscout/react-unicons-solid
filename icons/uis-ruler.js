import React from 'react';
import PropTypes from 'prop-types';

const UisRuler = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M22.6,7.1C22.6,7.1,22.6,7.1,22.6,7.1l-5.7-5.7c-0.4-0.4-1-0.4-1.4,0c0,0,0,0,0,0L1.4,15.5c-0.4,0.4-0.4,1,0,1.4l0,0l5.7,5.7c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0l2.1-2.1l-3.5-3.5c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l3.5,3.5l1.4-1.4l-2.1-2.1c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l2.1,2.1l1.4-1.4l-3.5-3.5c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l3.5,3.5l1.4-1.4l-2.1-2.1c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l2.1,2.1l2.1-2.1C23,8.1,23,7.4,22.6,7.1z'
  }));
};

UisRuler.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisRuler.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisRuler;