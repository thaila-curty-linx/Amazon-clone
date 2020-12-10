import React from 'react';
import Header from './Components/Header/index.js';
import Home from './Pages/Home/index';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './Services/history';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
