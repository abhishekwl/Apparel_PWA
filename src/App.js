import React from 'react';
import { Switch, Route } from 'react-router-dom';
//LOCAL
import Home from './pages/Home';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
};

export default App;