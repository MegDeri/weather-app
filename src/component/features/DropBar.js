import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './DropBar.scss';

const DropBar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="feature-container">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Kaikki kaupungit!
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            id="658225,655195,650225,634964&units=metric"
            value="group"
            onClick={props.getWeather}
          >
            Kaikki kaupungit!
          </DropdownItem>
          <DropdownItem id="634964" value="weather" onClick={props.getWeather}>Tampere</DropdownItem>
          <DropdownItem id="658225" value="weather" onClick={props.getWeather}>Helsinki</DropdownItem>
          <DropdownItem id="655195" value="weather" onClick={props.getWeather}>Jyvaskila</DropdownItem>
          <DropdownItem id="650225" value="weather" onClick={props.getWeather}>Kuopio</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>

  );
}

export default DropBar;