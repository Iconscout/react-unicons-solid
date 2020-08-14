import React from 'react';
import PropTypes from 'prop-types';

const UisStepForward = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M8.7,7.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.3,3.3l-3.3,3.3C7.1,15.5,7,15.7,7,16c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l4-4c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4L8.7,7.3z M16,7c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1s1-0.4,1-1V8C17,7.4,16.6,7,16,7z'
  }));
};

UisStepForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisStepForward.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisStepForward;