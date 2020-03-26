import React from "react";
import uuid from 'react-uuid';
import { Row, Col } from "reactstrap";
import "./SingleCity.scss";
import HourWeatherCity from "./HourWeatherCity";

class City extends React.Component {
    render() {
        const { city, list } = this.props;
        let listFive = list.slice(1, 6);
        console.log(listFive)

        const d = new Date(list[0].dt_txt)
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

        const textin = <div key={uuid()} className="temp-container" >
            <div className="single-city">
                <Row className="first-row">
                    <Col className="first-row-child" md={6}>
                        <p>{city.name}</p>
                        <p>{`${list[0].weather[0].description.charAt(0).toUpperCase()}${list[0].weather[0].description.slice(1)}`}</p>
                    </Col>
                    <Col className="main-right flexy" md={6}>
                        <span>
                            <img className="img-fluid" alt="cloud" src={`http://openweathermap.org/img/w/${list[0].weather[0].icon}.png`} />
                        </span>
                        <p><b>{Math.round(list[0].main.temp)} &deg;C</b></p>
                    </Col>
                </Row>
                <Row className="second-row">
                    <Col className="second-row-child" md={6}>
                        <p>{`${d.toString().slice(4, 10)}${nth(d.toString().slice(8, 10))}`}</p>
                        <p>{d.toString().slice(16, 21)}</p>
                    </Col>
                    <Col className="main-right" md={6}>
                        <p>Wind: {list[0].wind.speed} m/s</p>
                        <p>Humidity: {list[0].main.humidity} %</p>
                    </Col>
                </Row>
            </div>
            <Row className="hour">
                {listFive.map((element, index) => (
                    <HourWeatherCity key={index} {...element} />
                ))}
            </Row>

        </div>

        return (
            <div className="feature-container">{textin}</div>
        );
    }
}

export default City;