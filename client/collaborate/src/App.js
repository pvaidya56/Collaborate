import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components 
import Register from './components/register';
import Login from './components/login';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Collaborate</h1>
        <Switch>
          <Route exact path='/' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
