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
    this.getWeather = this.getWeather.bind(this)
  }
  // getWeather = async (e) => {
  //   e.preventDefault();
  //   const api_call = await fetch(
  //     `http://api.openweathermap.org/data/2.5/${this.state.multi}?id=${this.state.cityId}&appid=${API_KEY}`
  //   );
  //   const data = await api_call.json();
  //   console.log(data);
  // }

  getWeather = (currentTarget) => {
    //currentTarget.preventDefault();
    fetch(`http://api.openweathermap.org/data/2.5/${this.state.multi}?id=${this.state.cityId}&appid=${API_KEY}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        this.setState({
          cityId: currentTarget.id,
          multi: currentTarget.value
        })

      });
  };

  // setSortOptions({ currentTarget }) {
  //   console.log(currentTarget.id)
  //   this.setState({
  //     cityId: currentTarget.id,
  //     multi: currentTarget.value
  //   })
  // }

  render() {
    return (
      <MainLayout>
        <div className="App">Hello!</div>
        <DropBar getWeather={this.getWeather} setSortOptions={this.setSortOptions} />
      </MainLayout>
    );
  }
}

export default App;
