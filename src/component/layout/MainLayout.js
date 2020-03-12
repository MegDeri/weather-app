import React from "react";
import { Header } from "../header/Header";

import "./MainLayout.scss";

export class MainLayout extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="main-box">{this.props.children}</div>
      </div>
    );
  }
}
