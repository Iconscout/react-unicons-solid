import React from 'react';
import PropTypes from 'prop-types';

const UisKeySkeleton = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,4.4l0.7-0.7c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L9.8,12.8C9,12.3,8,12,7,12c-2.8,0-5,2.2-5,5s2.2,5,5,5c2.8,0,5-2.2,5-5c0-1-0.3-2-0.8-2.8l5.6-5.6l2.1,2.1c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-2.1-2.1l1.4-1.4l0.7,0.7c0.4,0.4,1,0.4,1.4,0s0.4-1,0-1.4L21,4.4z M7,20c-1.7,0-3-1.3-3-3s1.3-3,3-3c1.7,0,3,1.3,3,3C10,18.7,8.7,20,7,20z'
  }));
};

UisKeySkeleton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisKeySkeleton.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisKeySkeleton;