import React, { Component } from 'react';
import { connect } from 'react-redux'

// actions to dispatch
import { startSearch, convertCel, startSearchByCoord} from '../../store/search/actions'
import '../../App.scss';

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
      WeatherIcon: "",
      Longitude:"",
      Latitude:""
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
        morningTemp: weatherData.list.morningTemp,
        dayTemp: weatherData.list.dayTemp,
        eveningTemp: weatherData.list.eveningTemp,
        nightTemp: weatherData.list.nightTemp,
        weatherIcon: weatherData.list.weatherIcon,
        weatherIcon1: weatherData.list.weatherIcon1,
        weatherIcon2: weatherData.list.weatherIcon2,
        weatherIcon3: weatherData.list.weatherIcon3,
        weatherIcon4: weatherData.list.weatherIcon4,
        weatherIcon5: weatherData.list.weatherIcon5
      })
    }
    else if(weatherData.list === ""){
      alert("Please input a valid City !");   
    }
  }

  getWeather = async (event) => {
    event.preventDefault();
    let cityName = event.target.city.value;
    this.setState({cityName:cityName})
    if (cityName !== "") {
      this.props.dispatch(startSearch(cityName));
    }
  }

  goBackHandler = () => {
    this.setState({ cityWeather: "",
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
    WeatherIcon: "",
    Longitude:"",
    Latitude:"" })

  }

  switchTempHandler = (e) => {
   if(this.state.isFaranight){
    this.props.dispatch(convertCel(this.state)); 
    var isFaranight = false 
   } else if (this.state.Latitude !== "" && this.state.Longitude !== ""){
    this.props.dispatch(startSearchByCoord({'lat':this.state.Latitude, 'long':this.state.Longitude}));
    var isFaranight = true
   } else {
    this.props.dispatch(startSearch(this.state.cityName));
    var isFaranight = true
   }
   this.setState({
    isFaranight: isFaranight
  })
}

  currLocClicked = () => {
    var that = this;
  navigator.geolocation.getCurrentPosition(function(args){
    that.getWeatherFromCoords(args);
  })
  }

  getWeatherFromCoords = (args) => {
      this.props.dispatch(startSearchByCoord({'lat':args.coords.latitude, 'long':args.coords.longitude}));
      this.setState({
        Latitude: args.coords.latitude,
        Longitude: args.coords.longitude
      })
  }

  render() {
    return (
      <div className="App">
        <Search clicked={this.getWeather} currLocClicked={this.currLocClicked} />
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
            morningTemp={this.state.morningTemp}
            dayTemp={this.state.dayTemp}
            eveningTemp={this.state.eveningTemp}
            nightTemp={this.state.nightTemp}
            back={this.goBackHandler}
            switchTempHandler = {this.switchTempHandler}
            weatherIcon = {this.state.weatherIcon}
            weatherIcon1 = {this.state.weatherIcon1}
            weatherIcon2 = {this.state.weatherIcon2}
            weatherIcon3 = {this.state.weatherIcon3}
            weatherIcon4 = {this.state.weatherIcon4}
            weatherIcon5 = {this.state.weatherIcon5}
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