import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryFull, faWifi, faCircle } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";

import "./Header.scss";

export const Header = props => {
  return (
    <div className="navMain">
      <Container>
        <Row className="headerRow">
          <Col xs={12} md={6}>
            <div>
              Sketch &nbsp;
              <span>
                <FontAwesomeIcon className="wifi" icon={faWifi} />&nbsp;&nbsp;
              </span>
              <FontAwesomeIcon className="dot" icon={faCircle} />
              <FontAwesomeIcon className="dot" icon={faCircle} />
              <FontAwesomeIcon className="dot" icon={faCircle} />
              <FontAwesomeIcon className="dot" icon={faCircle} />
              <FontAwesomeIcon className="dot" icon={faCircle} />
            </div>
          </Col>
          <Col className="right" xs={12} md={6}>
            <p><FontAwesomeIcon icon={faBatteryFull} /> 10:41</p>
          </Col>
        </Row>
        <Row className="second">
          <div className="navHeader">
            Säätutka
          </div>
        </Row>
      </Container>
    </div>
  );
};
