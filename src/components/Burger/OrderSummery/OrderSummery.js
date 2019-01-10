import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button.js';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    ingredientKey => {
      // the below, hardcoded would look like: "<li>Salad: 1</li>"
      return (
        <li key={ingredientKey}>
          <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>:{' '}
          {props.ingredients[ingredientKey]}
        </li>
      );
    }
  );

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <Button btnType="danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
