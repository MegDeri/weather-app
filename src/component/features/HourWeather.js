import React from "react";
//import { Button } from "reactstrap";

class HourWeather extends React.Component {
    render() {
        const { city, temp, description, time, wind, humidity } = this.props
        return (
            <div >
                <p>{temp}</p>
                <p>{time}</p>
                <p>{wind}</p>
                <p>{humidity}</p>
            </div>
        );
    }
}

export default HourWeather;
