import React from 'react';
import Logo from '../../Images/KM.svg';
import '../../Scss/Component/_header.scss';

const Header = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" />
    </nav>
  );
};

export default Header;
