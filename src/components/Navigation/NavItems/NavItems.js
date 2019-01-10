import React from 'react';
import styles from './NavItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavItems = props => (
  <ul className={styles.navItems}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default NavItems;
