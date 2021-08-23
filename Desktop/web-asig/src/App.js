import React from 'react'
import 'assets/css/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePages from 'pages/Home';

function App() {
  return (
    <>
      <Router> 
        <Switch>
          <Route exact path="/" component={HomePages} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
