import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/main.scss';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Posts from './components/Posts';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Landing} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/users" exact component={Users} />
      </Router>
    </div>
  );
}

export default App;
