import React from "react";
import "./App.scss";
import { MainLayout } from "./component/layout/MainLayout";
import DropBar from "./component/features/DropBar";
import SingleCity from "./component/features/SingleCity"
//658225,655195,650225,634964&units=metric, group
//fetch(`http://api.openweathermap.org/data/2.5/forecast?id=658225`) http://api.openweathermap.org/data/2.5/${this.state.multi}?id=${this.state.cityId}&appid=${API_KEY}&units=metric
const API_KEY = "844e5ccfa57fee902cb9b1e8599d046a";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityId: '',
      multi: '',
      temp: '',
      city: '',
      icon: '',
      description: '',
      time: '',
      wind: '',
      humidity: '',
      hours: [],
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
            icon: data.list[0].weather[0].icon,
            description: data.list[0].weather[0].description,
            time: data.list[0].dt_txt,
            wind: data.list[0].wind.speed,
            humidity: data.list[0].main.humidity,
            hours: [
              {
                temp: data.list[1].main.temp,
                icon: data.list[1].weather[0].icon,
                time: data.list[1].dt_txt,
                wind: data.list[1].wind.speed,
                humidity: data.list[1].main.humidity,
              },
              {
                temp: data.list[2].main.temp,
                icon: data.list[2].weather[0].icon,
                time: data.list[2].dt_txt,
                wind: data.list[2].wind.speed,
                humidity: data.list[2].main.humidity,
              },
              {
                temp: data.list[3].main.temp,
                icon: data.list[3].weather[0].icon,
                time: data.list[3].dt_txt,
                wind: data.list[3].wind.speed,
                humidity: data.list[3].main.humidity,
              },
              {
                temp: data.list[4].main.temp,
                icon: data.list[4].weather[0].icon,
                time: data.list[4].dt_txt,
                wind: data.list[4].wind.speed,
                humidity: data.list[4].main.humidity,
              },
              {
                temp: data.list[5].main.temp,
                icon: data.list[5].weather[0].icon,
                time: data.list[5].dt_txt,
                wind: data.list[5].wind.speed,
                humidity: data.list[5].main.humidity,
              }
            ]
          })
        });
    })
  };

  render() {
    return (
      <MainLayout>
        <div className="App">Hello!</div>
        <DropBar
          getWeather={this.getWeather} />
        <SingleCity
          temp={this.state.temp}
          city={this.state.city}
          icon={this.state.icon}
          description={this.state.description}
          time={this.state.time}
          wind={this.state.wind}
          humidity={this.state.humidity}
          hours={this.state.hours}
        />
      </MainLayout>
    );
  }
}

export default App;
