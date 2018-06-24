import React, {Component} from 'react';

import "../assets/css/widget.css";
import LocationComponent  from "./widgetChildren/locationComponent"
import DateRangeComponent  from "./widgetChildren/dateRangeComponent"
import TravellersComponent  from "./widgetChildren/travellersComponent"
import PrimaryButtonComponent  from "./helpers/primaryButtonComponent"
import CustomDatePickerComponent  from "./widgetChildren/customDatePicker"


class WidgetComponent extends Component {
    constructor() {
        super();
        this.state = {
            showCalender: false
        }
    }

    exportedDates(date) {
        console.log(date)
    }

    showCalenderFn() {
        this.setState({showCalender: true})
    }
    hideCalenderFn() {
        this.setState({showCalender: false})
    }
    render() {
        return (
            <div className="widgetContainer">
                <div className="widgetLayout">
                    <div className="cardName">
                        {this.props.cardName}
                    </div>
                    <LocationComponent details={this.props.locationDetails}/>
                    <div onClick={this.showCalenderFn.bind(this)}>
                        <DateRangeComponent/>
                    </div>

                    <TravellersComponent/>
                    <div className="flex-center m-top-6">
                        <PrimaryButtonComponent text={this.props.btText}/>
                    </div>
                    {this.state.showCalender && <div className="calender">
                        <div className="closeBtn" onClick={this.hideCalenderFn.bind(this)}> &#10006;</div>
                        <DateRangeComponent/>
                        <CustomDatePickerComponent exportDates={this.exportedDates}/>
                    </div>}

                </div>
            </div>
        )
    }
}
WidgetComponent.defaultProps = {
    cardName: 'SEARCH WIDGET',
    locationDetails: {
        from: 'BOM',
        to: 'DEL',
        fromExpand: 'Mumbai,IND',
        toExpand: 'New Delhi,IND',
        fromAirPort: 'CSI Airport',
        toAirPort: 'IGI Airport'
    },
    btText: "Search"
};

export default WidgetComponent;