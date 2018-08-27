import {
    SEARCH_BEGIN,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    TEMP_TYPE_CHANGE
} from '../actionTypes';


const initialState = {
    search: {
        city: '',
        list: '',
        cnt: '',
        message: ''
    },
};

export const SearchReducer = (state = initialState.search, action) => {
    switch (action.type) {
        case SEARCH_BEGIN:
            return {
                ...state
            };
        case SEARCH_SUCCESS:
            return {
                city: action.payload.city,
                list: {
                    currentTemp: action.payload.list[0].main.temp.toFixed(1) + " F" ,
                    temp1: action.payload.list[5].main.temp.toFixed(1)  + " F",
                    temp2: action.payload.list[13].main.temp.toFixed(1)   + " F",
                    temp3: action.payload.list[21].main.temp.toFixed(1)   + " F",
                    temp4: action.payload.list[29].main.temp.toFixed(1)  + " F" ,
                    temp5: action.payload.list[36].main.temp.toFixed(1)  + " F" ,
                    cityWeather: action.payload.city.name,
                    descriptionWeather: action.payload.list[0].weather[0].description,
                    currentDateTime: Date(action.payload.list[0].dt_txt), 
                    MorningTemp: action.payload.list[0].main.temp.toFixed(1)  + " F",
                    DayTemp: action.payload.list[0].main.temp.toFixed(1)  + " F",
                    EveningTemp: action.payload.list[0].main.temp.toFixed(1)  + " F",
                    NightTemp: action.payload.list[0].main.temp.toFixed(1)  + " F",
                    WeatherIcon: "http://openweathermap.org/img/w/" + action.payload.list[0].weather[0].icon + ".png",
                    WeatherIcon1: "http://openweathermap.org/img/w/" + action.payload.list[5].weather[0].icon + ".png",
                    WeatherIcon2: "http://openweathermap.org/img/w/" + action.payload.list[13].weather[0].icon + ".png",
                    WeatherIcon3: "http://openweathermap.org/img/w/" + action.payload.list[21].weather[0].icon + ".png",
                    WeatherIcon4: "http://openweathermap.org/img/w/" + action.payload.list[29].weather[0].icon + ".png",
                    WeatherIcon5: "http://openweathermap.org/img/w/" + action.payload.list[36].weather[0].icon + ".png"
                    
                },
                cnt: action.payload.cod,
                message: action.payload.message
            };
        case SEARCH_FAILURE:
            return {
                ...state
            };
        case TEMP_TYPE_CHANGE:
        return {
            city: action.payload.cityName,
                list: {
                    currentTemp: convertToCel(action.payload.currentTemp.slice(0,-1)),
                    temp1: convertToCel(action.payload.temp1.slice(0,-1)),
                    temp2: convertToCel(action.payload.temp2.slice(0,-1)),
                    temp3: convertToCel(action.payload.temp3.slice(0,-1)),
                    temp4: convertToCel(action.payload.temp4.slice(0,-1)),
                    temp5: convertToCel(action.payload.temp5.slice(0,-1)),
                    cityWeather: action.payload.cityWeather,
                    descriptionWeather: action.payload.descriptionWeather,
                    currentDateTime: action.payload.currentDateTime,
                    MorningTemp: convertToCel(action.payload.MorningTemp.slice(0,-1)),
                    DayTemp: convertToCel(action.payload.DayTemp.slice(0,-1)),
                    EveningTemp: convertToCel(action.payload.EveningTemp.slice(0,-1)),
                    NightTemp: convertToCel(action.payload.NightTemp.slice(0,-1)),
                    WeatherIcon5: action.payload.WeatherIcon5,
                    WeatherIcon4: action.payload.WeatherIcon4,
                    WeatherIcon3: action.payload.WeatherIcon3,
                    WeatherIcon2: action.payload.WeatherIcon2,
                    WeatherIcon1: action.payload.WeatherIcon1,
                    WeatherIcon: action.payload.WeatherIcon,
                },
                cnt: action.payload.cod,
                message: action.payload.message
        };
        convertToCel(action.payload);
        default:
            return state;
    }
}

function convertToCel(data){
    let newCurrentTemp1 = (data - 32) / 1.8; 
    return newCurrentTemp1 =  newCurrentTemp1.toFixed(1) + " C"
}