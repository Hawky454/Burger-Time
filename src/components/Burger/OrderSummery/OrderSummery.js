import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button.js';

class OrderSummary extends Component {
  // This could be a functional component, doesn't have to be a class component
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      ingredientKey => {
        // the below, hardcoded would look like: "<li>Salad: 1</li>"
        return (
          <li key={ingredientKey}>
            <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>
            : {this.props.ingredients[ingredientKey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
