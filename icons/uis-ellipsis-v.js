import React from 'react';
import PropTypes from 'prop-types';

const UisEllipsisV = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,10,12,10z M12,7c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,7,12,7z M12,17c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,17,12,17z'
  }));
};

UisEllipsisV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisEllipsisV.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisEllipsisV;