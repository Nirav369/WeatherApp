import React, { Component } from 'react';
import { connect } from 'react-redux'

// actions to dispatch
import { startSearch, convertCel } from '../../store/search/actions'
import '../../App.css';

import Search from '../search/search'
import Weather from '../weather/weather'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cityWeather: "",
      currentTemp: "",
      currentDateTime: "",
      MorningTemp: "",
      DayTemp: "",
      EveningTemp: "",
      NightTemp: "",
      temp1: "",
      temp2: "",
      temp3: "",
      temp4: "",
      temp5: "",
      Day1: "",
      Day2: "",
      Day3: "",
      Day4: "",
      Day5: "",
      descriptionWeather: "",
      showWeatherSt: false,
      isFaranight: true,
      cityName: "",
      WeatherIcon: ""
    };
  }

  componentWillReceiveProps(props) {
    const weatherData = props.Search.search
    if(weatherData.list !== ""){
      this.setState({
        showWeatherSt: true,
        currentTemp: weatherData.list.currentTemp,
        temp1: weatherData.list.temp1,
        temp2: weatherData.list.temp2,
        temp3: weatherData.list.temp3,
        temp4: weatherData.list.temp4,
        temp5: weatherData.list.temp5,
        cityWeather: weatherData.list.cityWeather,
        descriptionWeather: weatherData.list.descriptionWeather,
        currentDateTime: weatherData.list.currentDateTime,
        MorningTemp: weatherData.list.MorningTemp,
        DayTemp: weatherData.list.DayTemp,
        EveningTemp: weatherData.list.EveningTemp,
        NightTemp: weatherData.list.NightTemp,
        WeatherIcon: weatherData.list.WeatherIcon,
        WeatherIcon1: weatherData.list.WeatherIcon1,
        WeatherIcon2: weatherData.list.WeatherIcon2,
        WeatherIcon3: weatherData.list.WeatherIcon3,
        WeatherIcon4: weatherData.list.WeatherIcon4,
        WeatherIcon5: weatherData.list.WeatherIcon5
      })
    }
    }

  getweather = async (event) => {
    event.preventDefault();
    const cityName = event.target.city.value;
    this.setState({cityName:cityName})
    if (cityName !== "") {
      this.props.dispatch(startSearch(cityName));
    }
  }

  goBackHandler = () => {
    this.setState({ showWeatherSt: false })
  }

  switchTempHandler = (e) => {
   if(this.state.isFaranight){
    this.props.dispatch(convertCel(this.state)); 
    var isFaranight = false 
   } else {
    this.props.dispatch(startSearch(this.state.cityName));
    var isFaranight = true
   }
   this.setState({
    isFaranight: isFaranight
  })
}

  currLocClicked = () => {
  navigator.geolocation.getCurrentPosition(function(args){
  console.log(args)
    })
  }

  render() {
    return (
      <div className="App">
        <Search clicked={this.getweather} CurrLocClicked={this.currLocClicked} />
        {this.state.showWeatherSt ?
          <Weather 
            day1Temp={this.state.temp1}
            day2Temp={this.state.temp2}
            day3Temp={this.state.temp3}
            day4Temp={this.state.temp4}
            day5Temp={this.state.temp5}
            cityName={this.state.cityWeather}
            description={this.state.descriptionWeather}
            currentTemp={this.state.currentTemp}
            currentDateTime={this.state.currentDateTime}
            MorningTemp={this.state.MorningTemp}
            DayTemp={this.state.DayTemp}
            EveningTemp={this.state.EveningTemp}
            NightTemp={this.state.NightTemp}
            back={this.goBackHandler}
            switchTempHandler = {this.switchTempHandler}
            WeatherIcon = {this.state.WeatherIcon}
            WeatherIcon1 = {this.state.WeatherIcon1}
            WeatherIcon2 = {this.state.WeatherIcon2}
            WeatherIcon3 = {this.state.WeatherIcon3}
            WeatherIcon4 = {this.state.WeatherIcon4}
            WeatherIcon5 = {this.state.WeatherIcon5}
          /> : null}
      </div>
    );
  }
}

// container
const mapStateToProps = (state) => ({
  Search: state
});
export default connect(mapStateToProps)(App);