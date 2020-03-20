import React from "react";
import "./App.scss";
import { MainLayout } from "./component/layout/MainLayout";
import DropBar from "./component/features/DropBar";
import SingleCity from "./component/features/SingleCity"
//fetch(`http://api.openweathermap.org/data/2.5/forecast?id=658225`) http://api.openweathermap.org/data/2.5/${this.state.multi}?id=${this.state.cityId}&appid=${API_KEY}&units=metric
const API_KEY = "844e5ccfa57fee902cb9b1e8599d046a";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityId: '658225,655195,650225,634964&units=metric',
      multi: 'group',
      temp: '',
      city: '',
      description: '',
      time: '',
      wind: '',
      humidity: ''
    }
  }

  getWeather = ({ currentTarget }) => {
    this.setState({
      cityId: currentTarget.id,
      multi: currentTarget.value
    }, () => {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${this.state.cityId}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            city: data.city.name,
            temp: data.list[0].main.temp,
            description: data.list[0].weather.description,
            time: data.list[0].dt_txt,
            wind: data.list[0].wind.speed,
            humidity: data.list[0].main.humidity
          })
        });
    })
  };

  render() {
    return (
      <MainLayout>
        <div className="App">Hello!</div>
        <DropBar getWeather={this.getWeather} />
        <SingleCity
          temp={this.state.temp}
          city={this.state.city}
          description={this.state.description}
          time={this.state.time}
          wind={this.state.wind}
          humidity={this.state.humidity}
        />
      </MainLayout>
    );
  }
}

export default App;
