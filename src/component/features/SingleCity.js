import React from "react";
//import { Button } from "reactstrap";

const SingleCity = (props) => {

    return (
        <div >
            <p>City: {props.city}</p>
            <p>Temperature: {props.temp}</p>
            <p>Description: {props.description}</p>
            <p>Time: {props.time}</p>
            <p>Wind: {props.wind}</p>
            <p>Humidity: {props.humidity}</p>
        </div>
    );

}

export default SingleCity;

