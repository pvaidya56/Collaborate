import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components 
import Register from './components/register';
import Login from './components/login';
import Layout from './components/dashboard/Layout';


function App() {
  return (
    <Router>
      <div className="App">
        <h4>Collaborate</h4>
        <Switch>
          <Route exact path='/' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboard' component={Layout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
