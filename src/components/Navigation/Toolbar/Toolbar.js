import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const Toolbar = props => (
  <header className={styles.toolbar}>
    <div onClick={props.showDrawer}>MENU</div>
    <div className={styles.logo}>
      <Logo />
    </div>
    <nav className={styles.desktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default Toolbar;
