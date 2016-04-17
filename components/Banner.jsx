import React from 'react';
import Appbar from 'muicss/lib/react/appbar';

const appBarStyle = {
  backgroundColor:'#00A9E0',
  padding: '10px 0 10px 40px'
}
const Banner = () => (
  <div>
    <Appbar style={appBarStyle}><img src={'../img/logo-white.png'} /></Appbar>

  </div>
);

export default Banner;
