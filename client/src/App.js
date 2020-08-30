import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//pages
import Home from './pages/home';
import DataPage from './pages/dataPage';
import AboutUs from './pages/aboutUs';

function App() {
  
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route exact path='/Home'>
        <Home />
      </Route>
      <Route exact path='/respiradores'>
        <DataPage type={'respiradores'}/>
      </Route>
      <Route exact path='/licitações'>
        <DataPage type={'licitações'}/>
      </Route>
      <Route exact path='/sobre'>
        <AboutUs />
      </Route>
    </Router>
  )
}

export default App;
