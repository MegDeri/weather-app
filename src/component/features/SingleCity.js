import React from "react";
import HourWeather from './HourWeather.js';
import { Row, Col } from "reactstrap";
import "./SingleCity.scss";

class SingleCity extends React.Component {
    render() {
        const { hours, city, temp, description, time, wind, humidity } = this.props;

        const textin = this.props.city.length > 0
            ? (<div className="temp-container" >
                <div className="single-city">
                    <Row>
                        <Col md={6}>
                            <p>{city}</p>
                            <p>{description}</p>
                        </Col>
                        <Col md={6}>
                            {temp}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            Time: {time}
                        </Col>
                        <Col md={6}>
                            <p>Wind: {wind}</p>
                            <p>Humidity: {humidity}</p>
                        </Col>
                    </Row>
                </div>
                <Row className="hour">
                    {hours.map((hour, index) => (
                        <HourWeather key={index} {...hour} />
                    ))}
                </Row>
            </div>)
            : "Click button!"

        return (
            <div>{textin}</div>
        );
    }
}

export default SingleCity;

