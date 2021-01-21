import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./Header";
// import RoomList from "./RoomList";
import MainPage from "../pages/MainPage";
import LivingRoom from "../pages/LivingRoom";
import BedRoom from "../pages/BedRoom";
import GuestRoom from "../pages/GuestRoom";
import Kitchen from "../pages/Kitchen";
import KidsRoom from "../pages/KidsRoom";
import Balcony from "../pages/Balcony";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/LivingRoom" component={LivingRoom} />
            <Route path="/BedRoom" component={BedRoom} />
            <Route path="/GuestRoom" component={GuestRoom} />
            <Route path="/Kitchen" component={Kitchen} />
            <Route path="/KidsRoom" component={KidsRoom} />
            <Route path="/Balcony" component={Balcony} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
