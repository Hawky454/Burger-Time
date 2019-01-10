import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const Logo = props => (
  <div className={styles.logo}>
    <img src={burgerLogo} alt="burger logo" />
  </div>
);

export default Logo;
