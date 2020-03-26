import React from "react";
import uuid from 'react-uuid';
import { Col } from "reactstrap";

class HourWeather extends React.Component {
    render() {
        const { temp, time, wind, humidity, icon } = this.props
        return (
            <Col key={uuid()} md={2} className="hour1">
                <div className="upper">
                    <div>{time.slice(11, 16)}</div>
                    <img className="img-fluid" alt="cloud" src={`http://openweathermap.org/img/w/${icon}.png`} />
                    <div><b>{Math.round(temp)} &deg;C</b></div>
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