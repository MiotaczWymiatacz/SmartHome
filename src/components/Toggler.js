import React, { Component } from "react";
import "../styles/Toggler.css";

class Toggler extends Component {
  state = { checked: false };

  constructor(props) {
    super();
    this.handleDeviceToogleChangedHandler =
      props.handleDeviceToogleChangedHandler;
    this.deviceId = props.id;
    this.checked = props.checked;
    this.setState((prevState) => ({
      ...prevState,
      checked: props.checked,
    }));
  }

  handleClick() {
    this.checked = !this.checked;
    this.setState((prevState) => ({
      ...prevState,
      checked: this.checked,
    }));
    if (this.handleDeviceToogleChangedHandler !== undefined) {
      this.handleDeviceToogleChangedHandler(this.deviceId, this.checked);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.checked = nextProps.checked;
  }

  render() {
    return (
      <div>
        <label class="switch">
          <input
            type="checkbox"
            checked={this.checked}
            onChange={this.handleClick.bind(this)}
          />
          <span class="slider round"></span>
        </label>
      </div>
    );
  }
}

export default Toggler;
