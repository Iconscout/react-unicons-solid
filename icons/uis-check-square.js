import React from 'react';
import PropTypes from 'prop-types';

const UisCheckSquare = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,2H3C2.4,2,2,2.4,2,3v18c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1V3C22,2.4,21.6,2,21,2z M17.7,9.3l-6.8,6.8c-0.4,0.4-1,0.4-1.4,0l-3.2-3.2c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l2.5,2.5l6.1-6.1c0.4-0.4,1-0.4,1.4,0C18.1,8.3,18.1,8.9,17.7,9.3z'
  }));
};

UisCheckSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisCheckSquare.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisCheckSquare;