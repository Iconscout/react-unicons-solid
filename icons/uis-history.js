import React from 'react';
import PropTypes from 'prop-types';

const UisHistory = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,3.3C13.1,1.1,8.3,1.8,5.1,4.8V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v4.5c0,0.6,0.4,1,1,1h4.5c0.6,0,1-0.4,1-1s-0.4-1-1-1H6.2C7.7,4.9,9.8,4,12,4c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,5.5,4.5,10,10,10c3.6,0,6.9-1.9,8.7-5C23.4,12.2,21.8,6.1,17,3.3z M12,8c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-1V9C13,8.4,12.6,8,12,8z'
  }));
};

UisHistory.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisHistory.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisHistory;