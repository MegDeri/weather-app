import React from "react";
import uuid from 'react-uuid';
import { Col } from "reactstrap";

class HourWeather extends React.Component {
    render() {
        const { temp, time, wind, humidity } = this.props
        return (
            <Col key={uuid()} md={2} className="hour1">
                <div className="upper">
                    <div>{time}</div>
                    <div>{temp} &deg;C</div>
                </div>
                <div className="lower">
                    <div>{wind} m/s</div>
                    <div>{humidity} %</div>
                </div>
            </Col>
        );
    }
}

export default HourWeather;
