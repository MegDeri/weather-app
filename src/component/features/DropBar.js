import React from "react";
import { Button } from "reactstrap";

const DropBar = props => (
  <form onSubmit={props.getWeather}>
    <Button >Click Tampere!</Button>
  </form>
);

export default DropBar;
