import React from 'react';

import './loader.scss';

const Loader = () => (
  <div className="loader t-c">
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
