import React from 'react';
const DateRangeComponent = (props) => {
  return (
    <div className="destination">
      <p></p>
      <div className="departure">
        <div className="text1">DEPATURE</div>
        <div className="fd-row m-top-6" >
          <div className="text5">15</div>
          <div className="m-left-6">
            <div className="text4">Sunday</div>
            <div className="text3">JUN 2018 </div>
          </div>
        </div>
      </div>
      <div className="partition"></div>
      <div className="return">
        <div className="text1">RETURN</div>
        <div className="fd-row m-top-6" >
          <div className="text5">5</div>
          <div className="m-left-6">
            <div className="text4">Sunday</div>
            <div className="text3">JUL 2018 </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default DateRangeComponent;