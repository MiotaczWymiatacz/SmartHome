import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Room.css";
import DeviceList from "../components/DeviceList";
import AddDevice from "../components/AddDevice";
import Toggler from "../components/Toggler";

class KidsRoom extends Component {
  counter = 5;
  state = {
    devices: [
      {
        id: 0,
        deviceName: "Lamp",
        toggle: true,
        alwaysRunning: false,
      },
      {
        id: 1,
        deviceName: "TV",
        toggle: true,
        alwaysRunning: false,
      },
      {
        id: 2,
        deviceName: "Fan",
        toggle: true,
        alwaysRunning: false,
      },
      {
        id: 3,
        deviceName: "Clock",
        toggle: true,
        alwaysRunning: true,
      },
    ],
  };

  constructor() {
    super();
    this.roomOn =
      this.state.devices.findIndex((device) => device.toggle === true) !== -1;
  }
  deleteDevice = (id) => {
    let devices = [...this.state.devices];
    devices = devices.filter((device) => device.id !== id);
    this.setState({
      devices,
    });
  };

  addDevice = (deviceName) => {
    const device = {
      id: this.counter,
      deviceName,
    };
    this.counter++;

    this.setState((prevState) => ({
      devices: [...prevState.devices, device],
    }));

    return true;
  };

  handleDeviceToogleChangedHandler(id, currentToogleState) {
    const changedDevices = this.state.devices;
    changedDevices.find(
      (device) => device.id === id
    ).toggle = currentToogleState;
    this.roomOn =
      changedDevices.findIndex((device) => device.toggle === true) !== -1;
    this.setState((prevState) => ({
      ...prevState,
      devices: changedDevices,
    }));
  }

  handleToogleClick() {
    let changedDevices = this.state.devices;
    this.roomOn = !this.roomOn;
    changedDevices = changedDevices.map((device) =>
      device.alwaysRunning === true
        ? device
        : { ...device, toggle: this.roomOn }
    );

    this.setState((prevState) => ({
      ...prevState,
      devices: changedDevices,
    }));
  }

  render() {
    return (
      <div className="wrap">
        <div className="head">
          <NavLink to="/" exact={true}>
            <i class="fas fa-arrow-left"></i>
          </NavLink>
          <div className="headerToggler">
            <h1>Kids Room</h1>
            <Toggler
              checked={this.roomOn}
              handleDeviceToogleChangedHandler={this.handleToogleClick.bind(
                this
              )}
            />
          </div>
          <p className="members">3 family members have access</p>
        </div>
        <div className="devicesList">
          <AddDevice add={this.addDevice} delete={this.deleteDevice} />
          <DeviceList
            devices={this.state.devices}
            handleDeviceToogleChangedHandler={this.handleDeviceToogleChangedHandler.bind(
              this
            )}
            delete={this.deleteDevice}
          />
        </div>
      </div>
    );
  }
}

export default KidsRoom;
