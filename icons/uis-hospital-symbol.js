import React from 'react';
import PropTypes from 'prop-types';

const UisHospitalSymbol = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M16,16c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3h-4v3c0,0.6-0.4,1-1,1s-1-0.4-1-1V8c0-0.6,0.4-1,1-1s1,0.4,1,1v3h4V8c0-0.6,0.4-1,1-1s1,0.4,1,1V16z'
  }));
};

UisHospitalSymbol.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisHospitalSymbol.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisHospitalSymbol;