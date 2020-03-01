import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
        return (
          <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
        );
      });
    })
    // just adding this to make a change so I can test git
    .reduce((array, element) => {
      return array.concat(element);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <h1>Please start adding ingredients!</h1>;
  }
  console.log(transformedIngredients);
  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
