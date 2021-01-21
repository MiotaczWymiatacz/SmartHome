import React, { Component } from "react";

class AddDevice extends Component {
  state = {
    deviceName: "",
  };

  handleText = (e) => {
    this.setState({
      deviceName: e.target.value,
    });
  };

  handleClick = () => {
    const { deviceName } = this.state;
    const add = this.props.add(deviceName);
    if (add) {
      this.setState({
        deviceName: "",
      });
    }
  };
  render() {
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Add Device"
          value={this.state.deviceName}
          onChange={this.handleText}
        />
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default AddDevice;
