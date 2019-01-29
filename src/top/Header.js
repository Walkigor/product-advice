import React from 'react';
import TopLeft from './TopLeft';
import TopRight from './TopRight';

const Header = () => (
  <div className="grid-container" align="center">
    <div style={{width: 1160}} class="grid grid-2">
      <TopLeft />    
      <TopRight />
    </div>
  </div>
  );

export default Header;