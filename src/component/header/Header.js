import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";

import "./Header.scss";

export const Header = props => {
  return (
    <div className="navMain">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div>left</div>
          </Col>
          <Col xs={12} md={6}>
            <div>right</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
