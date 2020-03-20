import React from "react";
import HourWeather from './HourWeather.js'
//import { Button } from "reactstrap";

class SingleCity extends React.Component {
    render() {
        const { hours, city, temp, description, time, wind, humidity } = this.props;
        return (
            <div >
                <p>City: {city}</p>
                <p>Temperature: {temp}</p>
                <p>Description: {description}</p>
                <p>Time: {time}</p>
                <p>Wind: {wind}</p>
                <p>Humidity: {humidity}</p>
                <div>
                    {hours.map(hour => (
                        <HourWeather key={hour.id} {...hour} />
                    ))}
                </div>
            </div>
        );
    }
}

export default SingleCity;

