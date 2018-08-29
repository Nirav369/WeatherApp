import React, {Component} from 'react';
import './weather.scss';



class Weather extends Component {
    render() {

    Date.prototype.addDays = function(days) {
        let cDate = new Date(this.valueOf());
        cDate.setDate(cDate.getDate() + days);
        return cDate;
    }
    let cDate = new Date();

    return (
        <div className="Weather" >
          <div className="innerWeather" >
              <div className="weatherTop">
                    <div className="backButoon">
                        <button onClick={this.props.back}>
                            <i class="material-icons">arrow_back</i>
                        </button>
                    </div>
                    <div className="cityNameTitle">
                        <h1>{this.props.cityName}</h1>
                    </div>
                    <div className="f2CSwitch">
                        <div className="switch" onChange={this.props.switchTempHandler}>
                            <input id="toggle2" className="toggle toggleRoundFlat" type="checkbox" />
                            <label for="toggle2"></label>
                        </div>
                    </div>
                  </div>
                  <div className="weatherTop">
                    <p>{new Intl.DateTimeFormat('en-US',{ 
                        weekday: 'long',
                        year:'numeric',
                        month:'long',
                        day: '2-digit'}).format(cDate)}
                        </p>
                    </div>
                    <div className="weatherTop">
                        <p><span>{this.props.description}</span></p>
                    </div>
              <div className="todayWeather">
                  <div className="currentWeather">
                        <div className="currentWeatherHeading">
                            <h1>{this.props.currentTemp}</h1>
                        </div>
                        <div className="currentweatherIcon">
                            <img src={this.props.weatherIcon} alt="Weather Condition" />
                        </div>
                  </div>
                  <div className="wholeDay">
                      <ul>
                          <li>Morning <span>{this.props.morningTemp}</span> </li>
                          <li>Day <span>{this.props.dayTemp}</span></li>
                          <li>Evening <span>{this.props.eveningTemp}</span></li>
                          <li>Night <span>{this.props.nightTemp}</span></li>
                      </ul>
                  </div>
              </div>
              <div className="wholeWeek">
                  <ul>
                      <li>
                          <p>{new Intl.DateTimeFormat('en-US',{ 
                        weekday: 'long',
                        }).format(cDate.addDays(1))}</p>
                          <div><img src={this.props.weatherIcon1} alt="Weather Condition" /></div>
                          <p>{this.props.day1Temp}</p>
                      </li>
                      <li>
                          <p>{new Intl.DateTimeFormat('en-US',{ 
                        weekday: 'long',
                        }).format(cDate.addDays(2))}</p>
                          <div><img src={this.props.weatherIcon2} alt="Weather Condition" /></div>
                          <p>{this.props.day2Temp}</p>
                      </li>
                      <li>
                          <p>{new Intl.DateTimeFormat('en-US',{ 
                        weekday: 'long',
                        }).format(cDate.addDays(3))}</p>
                          <div><img src={this.props.weatherIcon3} alt="Weather Condition" /></div>
                          <p>{this.props.day3Temp}</p>
                      </li>
                      <li>
                          <p>{new Intl.DateTimeFormat('en-US',{ 
                        weekday: 'long',
                        }).format(cDate.addDays(4))}</p>
                          <div><img src={this.props.weatherIcon4} alt="Weather Condition" /></div>
                          <p>{this.props.day4Temp}</p>
                      </li>
                      <li>
                          <p>{new Intl.DateTimeFormat('en-US',{ 
                        weekday: 'long',
                        }).format(cDate.addDays(5))}</p>
                          <div><img src={this.props.weatherIcon5} alt="Weather Condition" /></div>
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
