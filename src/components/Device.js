import Toggler from "../components/Toggler";

const Device = (props) => {
  return (
    <div className="deviceContainer">
      <button onClick={() => props.delete(props.device.id)}>X</button>
      <i class="fas fa-plug"></i>
      <p className="deviceName">{props.device.deviceName}</p>
      <Toggler
        id={props.device.id}
        checked={props.device.toggle}
        handleDeviceToogleChangedHandler={
          props.handleDeviceToogleChangedHandler
        }
      />
    </div>
  );
};

export default Device;
