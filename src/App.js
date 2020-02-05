import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom';


const TentsPage = () => (
  <div>Tents Page</div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/tents' component={TentsPage} />
      </Switch>
      
    </div>
  );
}

export default App;
