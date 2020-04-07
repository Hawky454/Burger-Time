import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

// This is so fucking cool!  I am able to update and play with this as if I'm working on my home computer! 4/7/20 **REMEMBER that this 
//is saving github to a new branch call Hawky454/gitpod-setup!

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
