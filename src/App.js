import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Toolbar from './components/Navigation/Toolbar/Toolbar';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Toolbar />
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
