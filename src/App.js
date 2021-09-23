import React, {useEffect} from 'react';
import 'assets/css/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePages from 'pages/Home';
import Anim from 'pages/Anim';
import AllGames from 'pages/Games/AllGames';
import RegisterValo from 'pages/RegiterValo';
import RegisterMiniGames from 'pages/RegisterMiniGames';
import RegisterTalkshow from 'pages/RegisterTalkshow';



function App() {
  const loader = document.querySelector(".loader");

  useEffect(() => {
    loader.classList.add("loader--hide");
  }, []);


  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePages} />
          <Route path="/exhibition" component={Anim} />
          <Route path="/games/:nama_project/:id" component={AllGames} />
          <Route path="/daftar-valorant" component={RegisterValo} />
          <Route path="/daftar-minigame" component={RegisterMiniGames} />
          <Route path="/daftar-talkshow" component={RegisterTalkshow} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
