import React from "react";
import "./App.scss";
import { MainLayout } from "./component/layout/MainLayout";

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <div className="App">Hello!</div>
      </MainLayout>
    );
  }
}

export default App;
