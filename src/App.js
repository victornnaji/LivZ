import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Remote from './Pages/Remote';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/remote" component={Remote} />
      </Switch>
    </Router>
  );
}

export default App;
