import React from 'react';
import PropTypes from 'prop-types';

const UisToggleOn = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M16.5,6.5h-9C4.5,6.5,2,9,2,12s2.5,5.5,5.5,5.5h9c3,0,5.5-2.5,5.5-5.5S19.5,6.5,16.5,6.5z M16.5,14.5c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5S19,10.6,19,12S17.9,14.5,16.5,14.5z'
  }));
};

UisToggleOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisToggleOn.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisToggleOn;