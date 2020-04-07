import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

// This is so fucking cool!  I am able to update and play with this as if I'm working on my home computer! 4/7/20

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
