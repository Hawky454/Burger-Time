import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = props => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.content}>{props.children}</main>
  </Aux>
);

export default Layout;
