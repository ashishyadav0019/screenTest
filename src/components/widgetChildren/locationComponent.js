import React from 'react';
const LocationComponent = (props) => {
  let {details} = props;
  return (
    <div className="location">
      <div className="from">
        <div className="text1">FROM</div>
        <div className="text2 m-top-6">{details.from}</div>
        <div className="text3">{details.fromExpand}</div>
        <div className="text4">{details.fromAirPort}</div>
      </div>
      <div className="switchIcon">
        <div className="roundTrip"></div>
      </div>
      <div className="to">
        <div className="text1">TO</div>
        <div className="text2 m-top-6">{details.to}</div>
        <div className="text3">{details.toExpand}</div>
        <div className="text4">{details.toAirPort}</div>
      </div>
    </div>
  )
};
export default LocationComponent;