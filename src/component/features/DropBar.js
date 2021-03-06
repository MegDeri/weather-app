import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './DropBar.scss';

const DropBar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="feature-container1">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Kaikki kaupungit!
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={props.getWeatherAll}> Kaikki kaupungit </DropdownItem>
          <DropdownItem id="634964" onClick={props.getWeather}> Tampere </DropdownItem>
          <DropdownItem id="658225" onClick={props.getWeather}> Helsinki </DropdownItem>
          <DropdownItem id="655195" onClick={props.getWeather}> Jyvaskila </DropdownItem>
          <DropdownItem id="650225" onClick={props.getWeather}> Kuopio </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>

  );
}

export default DropBar;