import Device from "./Device";

const DeviceList = (props) => {
  const devices = props.devices.map((device) => (
    <Device
      key={device.id}
      device={device}
      handleDeviceToogleChangedHandler={props.handleDeviceToogleChangedHandler}
      delete={props.delete}
    />
  ));
  return <div className="devicesContainer">{devices}</div>;
};

export default DeviceList;
