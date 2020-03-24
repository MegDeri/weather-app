import React from "react";
import HourWeather from './HourWeather.js';
import { Row, Col } from "reactstrap";
import "./SingleCity.scss";

class SingleCity extends React.Component {
    render() {
        const { hours, city, temp, description, time, wind, humidity, icon } = this.props;
        const d = new Date(time)
        const nth = function (x) {
            let newX = parseInt(x);
            if (newX === 1) {
                return 'st'
            } else if (newX === 2) {
                return 'nd'
            } else if (newX === 3) {
                return 'rd'
            } else {
                return 'th'
            };
        }
        const textin = this.props.city.length > 0
            ? <div className="temp-container" >
                <div className="single-city">
                    <Row className="first-row">
                        <Col className="first-row-child" md={6}>
                            <p>{city}</p>
                            <p>{`${description.charAt(0).toUpperCase()}${description.slice(1)}`}</p>
                        </Col>
                        <Col className="main-right flexy" md={6}>
                            <span>
                                <img className="img-fluid" alt="cloud" src={`http://openweathermap.org/img/w/${icon}.png`} />
                            </span>
                            <p><b>{Math.round(temp)} &deg;C</b></p>
                        </Col>
                    </Row>
                    <Row className="second-row">
                        <Col className="second-row-child" md={6}>
                            <p>{`${d.toString().slice(4, 10)}${nth(d.toString().slice(8, 10))}`}</p>
                            <p>{d.toString().slice(16, 21)}</p>
                        </Col>
                        <Col className="main-right" md={6}>
                            <p>Wind: {wind} m/s</p>
                            <p>Humidity: {humidity} %</p>
                        </Col>
                    </Row>
                </div>
                <Row className="hour">
                    {hours.map((hour, index) => (
                        <HourWeather key={index} {...hour} />
                    ))}
                </Row>
            </div>
            : ""

        return (
            <div className="feature-container">{textin}</div>
        );
    }
}

export default SingleCity;

