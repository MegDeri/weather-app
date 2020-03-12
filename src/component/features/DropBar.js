import React from "react";
import { Button } from "reactstrap";

const DropBar = props => (
  <form onSubmit={props.getWeather}>
    <Button name="city">Click Tampere!</Button>
  </form>
);

export default DropBar;
