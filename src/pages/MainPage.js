import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/MainPage.css";

class MainPage extends Component {
  state = {
    rooms: [
      { name: "Living Room", path: "/LivingRoom" },
      { name: "Bed Room", path: "/BedRoom" },
      { name: "Guest Room", path: "/GuestRoom" },
      { name: "Kitchen", path: "/Kitchen" },
      { name: "Kids Room", path: "/KidsRoom" },
      { name: "Balcony", path: "/Balcony" },
    ],
  };

  render() {
    return (
      <div className="main">
        <header>
          <h1>Hi Łukasz</h1>
          <h2>Welcome Home</h2>
        </header>
        <nav>
          <ul>
            {this.state.rooms.map((room) => (
              <li key={room.name}>
                <NavLink to={room.path} exact={room.exact ? room.exact : false}>
                  {room.name}
                </NavLink>
                <p className="members">3 family members have access</p>
                <p className="devices">4 Devices</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default MainPage;
