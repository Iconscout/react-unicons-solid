import React from 'react';
import PropTypes from 'prop-types';

const UisTable = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,2H3C2.4,2,2,2.4,2,3v18c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1V3C22,2.4,21.6,2,21,2z M10,20v-4h4v4H10z M10,14v-4h4v4H10z M4,10h4v4H4V10z M10,8V4h4v4H10z M16,10h4v4h-4V10z M20,8h-4V4h4V8z M8,4v4H4V4H8z M4,16h4v4H4V16z M16,20v-4h4v4H16z'
  }));
};

UisTable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisTable.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisTable;