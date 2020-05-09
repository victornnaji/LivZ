import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Remote from './Pages/Remote';
import Footer from './Component/Footer';
import Host from './Pages/Host';
import Join from './Pages/Join';
import Guest from './Pages/Guest';
import ErrorPage from './Pages/404';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/remote" component={Remote} />
        <Route path="/remote/:id" component={Join} />
        <Route path="/host" component={Host}/>
        <Route path="/guest/:id" component={Guest}/>
        <Route path="*" component={ErrorPage}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
