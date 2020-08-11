import React from 'react';
import PropTypes from 'prop-types';

const UisGrid = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,2H3C2.4,2,2,2.4,2,3v4h20V3C22,2.4,21.6,2,21,2z M2,15h9V9H2V15z M2,21c0,0.6,0.4,1,1,1h8v-5H2V21z M13,15h9V9h-9V15z M13,22h8c0.6,0,1-0.4,1-1v-4h-9V22z'
  }));
};

UisGrid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisGrid.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisGrid;