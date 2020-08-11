import React from 'react';
import PropTypes from 'prop-types';

const UisHouseUser = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.7,10.3l-9-8c-0.4-0.3-0.9-0.3-1.3,0l-9,8c-0.4,0.4-0.5,1-0.1,1.4s1,0.5,1.4,0.1L4,11.4V21c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-9.6l0.3,0.3c0.4,0.4,1,0.3,1.4-0.1C22.1,11.3,22.1,10.6,21.7,10.3z M12,11c1.5,0,2.7,1.2,2.7,2.7c0,1.5-1.2,2.7-2.7,2.7c-1.5,0-2.7-1.2-2.7-2.7S10.5,11,12,11z M7,20c0-0.1,0-0.1,0.1-0.2c2.2-2.7,6.2-3.2,8.9-1c0.4,0.3,0.7,0.6,1,1c0,0,0,0.1,0.1,0.2H7z'
  }));
};

UisHouseUser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisHouseUser.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisHouseUser;