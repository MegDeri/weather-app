import React from "react";
import uuid from 'react-uuid';
import { Col } from "reactstrap";

class HourWeatherCity extends React.Component {
    render() {
        const { main, dt_txt, wind, weather } = this.props;
        return (
            <Col key={uuid()} md={2} className="hour1">
                <div className="upper">
                    <div>{dt_txt.slice(11, 16)}</div>
                    <img className="img-fluid" alt="cloud" src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} />
                    <div><b>{Math.round(main.temp)} &deg;C</b></div>
                </div>
                <div className="lower">
                    <div>{wind.speed} m/s</div>
                    <div>{main.humidity} %</div>
                </div>
            </Col>
        );
    }
}

export default HourWeatherCity;
