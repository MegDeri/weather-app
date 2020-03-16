import React from "react";
import "./App.scss";
import { MainLayout } from "./component/layout/MainLayout";
import DropBar from "./component/features/DropBar";

const API_KEY = "844e5ccfa57fee902cb9b1e8599d046a";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityId: '658225,655195,650225,634964&units=metric',
      multi: 'group'
    }
  }

  getWeather = ({ currentTarget }) => {
    this.setState({
      cityId: currentTarget.id,
      multi: currentTarget.value
    }, () => {
      fetch(`http://api.openweathermap.org/data/2.5/${this.state.multi}?id=${this.state.cityId}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });
    })
  };

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
