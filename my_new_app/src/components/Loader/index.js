import React from 'react';
import loaderSrc from '../../assets/ajax-loader.gif';

const Loader = props => (
  <div>
    <img
      alt="loader icon"
      src={loaderSrc}
    />
  </div>
);

export default Loader;
