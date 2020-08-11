import React from 'react';
import PropTypes from 'prop-types';

const UisBorderTop = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M4,4.5h16c0.6,0,1-0.4,1-1s-0.4-1-1-1H4c-0.6,0-1,0.4-1,1S3.4,4.5,4,4.5z M12,6.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,6.5,12,6.5z M12,10.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,10.5,12,10.5z M12,14.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,14.5,12,14.5z M12,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,18.5,12,18.5z M20,6.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,6.5,20,6.5z M20,10.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,10.5,20,10.5z M20,14.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,14.5,20,14.5z M20,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,18.5,20,18.5z M16,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.6,18.5,16,18.5z M8,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.6,18.5,8,18.5z M16,10.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.6,10.5,16,10.5z M8,10.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.6,10.5,8,10.5z M4,6.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.6,6.5,4,6.5z M4,10.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.6,10.5,4,10.5z M4,14.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.6,14.5,4,14.5z M4,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.6,18.5,4,18.5z'
  }));
};

UisBorderTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisBorderTop.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisBorderTop;