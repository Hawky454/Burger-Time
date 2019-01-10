import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = props => (
  <div className={styles.buildControls}>
    <h2
      style={{
        fontFamily: "'Courier New', Courier, monospace",
        color: '#77110a',
        fontWeight: 'bolder'
      }}
    >
      Current Price: {props.price}
    </h2>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
    <button
      className={styles.orderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
