import React from "react";
import "./App.scss";
import { MainLayout } from "./component/layout/MainLayout";
import DropBar from "./component/features/DropBar";
import SingleCity from "./component/features/SingleCity"
import CitiesList from "./component/features/CitiesList";
import { API_KEY } from "./config";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityId: '',
      temp: '',
      city: '',
      icon: '',
      description: '',
      time: '',
      wind: '',
      humidity: '',
      hours: [],
      allCities: [],
    }
  }

  getWeather = ({ currentTarget }) => {
    this.setState({
      cityId: currentTarget.id,
      allCities: []
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

  getWeatherAll = () => {
    const newArr = [];
    const urls = [
      `http://api.openweathermap.org/data/2.5/forecast?id=658225&appid=${API_KEY}&units=metric`,
      `http://api.openweathermap.org/data/2.5/forecast?id=655195&appid=${API_KEY}&units=metric`,
      `http://api.openweathermap.org/data/2.5/forecast?id=650225&appid=${API_KEY}&units=metric`,
      `http://api.openweathermap.org/data/2.5/forecast?id=634964&appid=${API_KEY}&units=metric`
    ];
    const requests = urls.map(url => fetch(url).then(res => res.json()));
    this.setState({
      temp: '',
      city: '',
      icon: '',
      description: '',
      time: '',
      wind: '',
      humidity: '',
      hours: [],
      cityId: '',
      allCities: []
    });
    Promise.all(requests)
      .then(data => {
        console.log(data);
        newArr.push(data);
        this.setState({
          allCities: this.state.allCities.concat(...newArr)
        });
        console.log(this.state.allCities)
      })
  };

  render() {
    return (
      <MainLayout>
        <DropBar
          getWeather={this.getWeather}
          getWeatherAll={this.getWeatherAll}
        />
        <SingleCity
          temp={this.state.temp}
          city={this.state.city}
          icon={this.state.icon}
          description={this.state.description}
          time={this.state.time}
          wind={this.state.wind}
          humidity={this.state.humidity}
          hours={this.state.hours}
          allCities={this.state.allCities}
        />
        <CitiesList allCities={this.state.allCities} />
      </MainLayout>
    );
  }
}

export default App;