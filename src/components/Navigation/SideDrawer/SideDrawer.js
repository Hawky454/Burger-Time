import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const SideDrawer = props => {
  let attachedStyles = [styles.sideDrawer, styles.close];
  if (props.open) {
    attachedStyles = [styles.sideDrawer, styles.open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedStyles.join(' ')}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
        <div onClick={props.closed} className={styles.x}>
          <h3>X</h3>
        </div>
      </div>
    </Aux>
  );
};

export default SideDrawer;
