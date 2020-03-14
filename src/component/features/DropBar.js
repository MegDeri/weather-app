import React from "react";
import { Button } from "reactstrap";

const DropBar = (props) => {

  return (
    <form >
      <Button id="634964" value="weather" onClick={props.setSortOptions}>Click Tampere!</Button>
      <Button id="658225" value="weather" onClick={props.setSortOptions}>Click Helsinki!</Button>
      <Button id="655195" value="weather" onClick={props.setSortOptions}>Click Jyvaskila!</Button>
      <Button id="650225" value="weather" onClick={props.setSortOptions}>Click Kuopio!</Button>
      <Button
        id="658225,655195,650225,634964&units=metric"
        value="group"
        onClick={props.getWeather}
      >
        All kaupungit!
      </Button>
    </form>
  );

}

export default DropBar;

