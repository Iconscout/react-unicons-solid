import React from 'react';
import PropTypes from 'prop-types';

const UisBorderLeft = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M3.5,3c-0.6,0-1,0.4-1,1v16c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1V4C4.5,3.4,4.1,3,3.5,3z M7.5,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.1,11,7.5,11z M11.5,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.1,11,11.5,11z M15.5,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.1,11,15.5,11z M19.5,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.1,11,19.5,11z M7.5,3c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.1,3,7.5,3z M11.5,3c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.1,3,11.5,3z M15.5,3c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.1,3,15.5,3z M19.5,5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S18.9,5,19.5,5z M19.5,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.1,7,19.5,7z M19.5,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.1,15,19.5,15z M11.5,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.1,7,11.5,7z M11.5,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.1,15,11.5,15z M7.5,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.1,19,7.5,19z M11.5,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.1,19,11.5,19z M15.5,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.1,19,15.5,19z M19.5,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.1,19,19.5,19z'
  }));
};

UisBorderLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisBorderLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisBorderLeft;