import React from 'react';
import PropTypes from 'prop-types';

const UisSocialDistancing = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.2,17.3l-2-2c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l0.3,0.3h-2.6c-0.6,0-1,0.4-1,1s0.4,1,1,1h2.6l-0.3,0.3c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l2-2l0,0c0,0,0,0,0,0c0.1-0.1,0.2-0.2,0.2-0.3c0-0.1,0.1-0.2,0.1-0.4c0,0,0,0,0,0c0,0,0,0,0,0c0-0.1,0-0.3-0.1-0.4C21.4,17.5,21.3,17.4,21.2,17.3z M8.5,17H5.9l0.3-0.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-2,2c0,0,0,0,0,0l0,0c0,0,0,0,0,0c-0.1,0.1-0.2,0.2-0.2,0.3c0,0.1-0.1,0.2-0.1,0.4c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1,0,0.3,0.1,0.4c0.1,0.1,0.1,0.2,0.2,0.3l2,2C5,20.9,5.2,21,5.5,21c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L5.9,19h2.6c0.6,0,1-0.4,1-1S9.1,17,8.5,17z M18,9.2c1.4,0,2.6-1.2,2.6-2.6S19.4,4,18,4c-1.4,0-2.6,1.2-2.6,2.6C15.4,8,16.6,9.2,18,9.2z M22.7,12.9c-2.1-2.6-5.9-3-8.5-0.9c-0.3,0.3-0.7,0.6-0.9,0.9c-0.4,0.6-0.4,1.4,0.2,1.8c0.2,0.2,0.5,0.3,0.8,0.3h1.9c0.1-0.3,0.3-0.5,0.5-0.8c1-1,2.6-1,3.5,0L21,15h0.6c0.7,0,1.3-0.6,1.3-1.3C23,13.4,22.9,13.1,22.7,12.9z M2.2,11.9c-0.3,0.3-0.7,0.6-0.9,0.9c-0.4,0.6-0.4,1.4,0.2,1.8C1.7,14.9,2,15,2.3,15H3l0.8-0.8c1-1,2.6-1,3.5,0c0.2,0.2,0.4,0.5,0.5,0.8h1.9c0.7,0,1.3-0.6,1.3-1.3c0-0.3-0.1-0.6-0.3-0.8C8.6,10.3,4.8,9.9,2.2,11.9z M6,9.2c1.4,0,2.6-1.2,2.6-2.6S7.4,4,6,4C4.6,4,3.4,5.2,3.4,6.6C3.4,8,4.6,9.2,6,9.2z'
  }));
};

UisSocialDistancing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisSocialDistancing.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisSocialDistancing;