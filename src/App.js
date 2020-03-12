import React from "react";
import "./App.scss";
import { MainLayout } from "./component/layout/MainLayout";
import DropBar from "./component/features/DropBar";

const API_KEY = "844e5ccfa57fee902cb9b1e8599d046a";

class App extends React.Component {

  state = {
    factors: [],
  }
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Tampere&appid=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
  }



  // getWeather = e => {
  //   e.preventDefault();
  //   fetch(`api.openweathermap.org/data/2.5/weather?q=Tampere&appid=${API_KEY}`)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (json) {
  //       console.log(json);

  //     });
  // };

  render() {
    return (
      <MainLayout>
        <div className="App">Hello!</div>
        <DropBar getWeather={this.getWeather} />
      </MainLayout>
    );
  }
}

export default App;
