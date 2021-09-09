import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "assets/css/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePages from "pages/Home";
import GuestRoutes from "Components/Routes/GuestRoutes";
import Login from "pages/login";
import MyDasboard from "pages/Dasboard";
import MemberRoutes from "Components/Routes/MemberRoutes";
import Register from "pages/register";
import Unauthenticated from "pages/401";
import { setAuthorizationHeader } from "config/axios";
import users from "Constant/Api/users";
import { populateProfile } from "Store/action/users";
import Shcedule from "parts/partsDasboard/Shcedule";
import Sertifikat from "parts/partsDasboard/Sertifikat";
import RGame from "pages/RGame";
import RMiniGame from "pages/RMiniGame";
import RTalkShow from "pages/RTalkShow";
import Anim from "pages/Anim";

function App() {
  const dispatch = useDispatch();
  const loader = document.querySelector(".loader");

  useEffect(() => {
    loader.classList.add("loader--hide");
  }, []);

  useEffect(() => {
    let session = null;
    if (localStorage.getItem("ASIG:token")) {
      session = JSON.parse(localStorage.getItem("ASIG:token"));
      setAuthorizationHeader(session.token);

      users.details().then((details) => {
        dispatch(populateProfile(details));
      });
    }
  }, [dispatch]);

  return (
    <>
      <Router>
        <Switch>
          <GuestRoutes path="/login" component={Login} />
          <GuestRoutes path="/register" component={Register} />
          <GuestRoutes path="/private" component={Unauthenticated} />
          <MemberRoutes exact path="/dasboard" component={MyDasboard} />
          <MemberRoutes path="/shcedule" component={Shcedule} />
          <MemberRoutes path="/sertifikat" component={Sertifikat} />
          <MemberRoutes exact path="/game" component={RGame} />
          <MemberRoutes path="/minigame" component={RMiniGame} />
          <MemberRoutes path="/talkshow" component={RTalkShow} />
          <Route exact path="/" component={HomePages} />
          <Route path="/exhibition" component={Anim} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
