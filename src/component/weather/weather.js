import React, {Component} from 'react';
import './weather.css';



class Weather extends Component {
    render() {

    Date.prototype.addDays = function(days) {
        let Cdate = new Date(this.valueOf());
        Cdate.setDate(Cdate.getDate() + days);
        return Cdate;
    }
    let Cdate = new Date();

    return (
        <div className="Weather" >
          <div className="innerWeather" >
              <div className="WeatherTop">
                    <div className="BackButoon">
                        <button onClick={this.props.back}>
                            <i class="material-icons">arrow_back</i>
                        </button>
                    </div>
                    <div className="CitynameTitle">
                        <h1>{this.props.cityName}</h1>
                    </div>
                    <div className="F2CSwitch">
                        <div className="switch" onChange={this.props.switchTempHandler}>
                            <input id="toggle-2" className="toggle toggle-round-flat" type="checkbox" />
                            <label for="toggle-2"></label>
                        </div>
                    </div>
                  </div>
                  <div className="WeatherTop">
                    <p>{new Intl.DateTimeFormat('en-US',{ 
                        weekday: 'long',
                        year:'numeric',
                        month:'long',
                        day: '2-digit'}).format(Cdate)}
                        </p>
                    </div>
                    <div className="WeatherTop">
                        <p><span>{this.props.description}</span></p>
                    </div>
              <div className="todayWeather">
                  <div className="CurrentWeather">
                        <div className="CurrentWeatherHeading">
                            <h1>{this.props.currentTemp}</h1>
                        </div>
                        <div className="CurrentWeatherIcon">
                            <img src={this.props.WeatherIcon} alt="Weather Condition" />
                        </div>
                  </div>
                  <div className="wholeDay">
                      <ul>
                          <li>Morning <span>{this.props.MorningTemp}</span> </li>
                          <li>Day <span>{this.props.DayTemp}</span></li>
                          <li>Evening <span>{this.props.EveningTemp}</span></li>
                          <li>Night <span>{this.props.NightTemp}</span></li>
                      </ul>
                  </div>
              </div>
              <div className="wholeWeek">
                  <ul>
                      <li>
                          <p>{new Intl.DateTimeFormat('en-US',{ 
                        weekday: 'long',
                        }).format(Cdate.addDays(1))}</p>
                          <div><img src={this.props.WeatherIcon1} alt="Weather Condition" /></div>
                          <p>{this.props.day1Temp}</p>
                      </li>
                      <li>
                          <p>{new Intl.DateTimeFormat('en-US',{ 
                        weekday: 'long',
                        }).format(Cdate.addDays(2))}</p>
                          <div><img src={this.props.WeatherIcon2} alt="Weather Condition" /></div>
                          <p>{this.props.day2Temp}</p>
                      </li>
                      <li>
                          <p>{new Intl.DateTimeFormat('en-US',{ 
                        weekday: 'long',
                        }).format(Cdate.addDays(3))}</p>
                          <div><img src={this.props.WeatherIcon3} alt="Weather Condition" /></div>
                          <p>{this.props.day3Temp}</p>
                      </li>
                      <li>
                          <p>{new Intl.DateTimeFormat('en-US',{ 
                        weekday: 'long',
                        }).format(Cdate.addDays(4))}</p>
                          <div><img src={this.props.WeatherIcon4} alt="Weather Condition" /></div>
                          <p>{this.props.day4Temp}</p>
                      </li>
                      <li>
                          <p>{new Intl.DateTimeFormat('en-US',{ 
                        weekday: 'long',
                        }).format(Cdate.addDays(5))}</p>
                          <div><img src={this.props.WeatherIcon5} alt="Weather Condition" /></div>
                          <p>{this.props.day5Temp}</p>
                      </li>
                  </ul>
              </div>
  
          </div>
        </div>
      );
}
}


export default Weather;
