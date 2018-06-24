import React from 'react';
import DateRangePicker from 'react-daterange-picker';
//import moment from 'moment';
import 'react-daterange-picker/dist/css/react-calendar.css'
import '../../assets/css/calender_overwrites.css'
class CustomDatePickerComponent  extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dates:null
    }
  }
  onSelect = dates => {
      this.setState({dates});
      this.props.exportDates(this.state.dates);
  };
  render(){
    return(
        <DateRangePicker
          onSelect={this.onSelect}
          value={this.state.dates}
          numberOfCalendars={2}
          selectionType='range'
        />
    )
  }
}
export default CustomDatePickerComponent;