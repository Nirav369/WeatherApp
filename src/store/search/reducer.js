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
                    currentTemp: action.payload.list[0].main.temp.toFixed(1) + " °F" ,
                    temp1: action.payload.list[5].main.temp.toFixed(1)  + " °F",
                    temp2: action.payload.list[13].main.temp.toFixed(1)   + " °F",
                    temp3: action.payload.list[21].main.temp.toFixed(1)   + " °F",
                    temp4: action.payload.list[29].main.temp.toFixed(1)  + " °F" ,
                    temp5: action.payload.list[36].main.temp.toFixed(1)  + " °F" ,
                    cityWeather: action.payload.city.name,
                    descriptionWeather: action.payload.list[0].weather[0].description,
                    currentDateTime: Date(action.payload.list[0].dt_txt), 
                    morningTemp: action.payload.list[0].main.temp.toFixed(1)  + " °F",
                    dayTemp: action.payload.list[1].main.temp.toFixed(1)  + " °F",
                    eveningTemp: action.payload.list[2].main.temp.toFixed(1)  + " °F",
                    nightTemp: action.payload.list[3].main.temp.toFixed(1)  + " °F",
                    weatherIcon: "http://openweathermap.org/img/w/" + action.payload.list[0].weather[0].icon + ".png",
                    weatherIcon1: "http://openweathermap.org/img/w/" + action.payload.list[5].weather[0].icon + ".png",
                    weatherIcon2: "http://openweathermap.org/img/w/" + action.payload.list[13].weather[0].icon + ".png",
                    weatherIcon3: "http://openweathermap.org/img/w/" + action.payload.list[21].weather[0].icon + ".png",
                    weatherIcon4: "http://openweathermap.org/img/w/" + action.payload.list[29].weather[0].icon + ".png",
                    weatherIcon5: "http://openweathermap.org/img/w/" + action.payload.list[36].weather[0].icon + ".png"
                    
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
                    currentTemp: convertToCel(action.payload.currentTemp.slice(0,-2)),
                    temp1: convertToCel(action.payload.temp1.slice(0,-2)),
                    temp2: convertToCel(action.payload.temp2.slice(0,-2)),
                    temp3: convertToCel(action.payload.temp3.slice(0,-2)),
                    temp4: convertToCel(action.payload.temp4.slice(0,-2)),
                    temp5: convertToCel(action.payload.temp5.slice(0,-2)),
                    cityWeather: action.payload.cityWeather,
                    descriptionWeather: action.payload.descriptionWeather,
                    currentDateTime: action.payload.currentDateTime,
                    morningTemp: convertToCel(action.payload.morningTemp.slice(0,-2)),
                    dayTemp: convertToCel(action.payload.dayTemp.slice(0,-2)),
                    eveningTemp: convertToCel(action.payload.eveningTemp.slice(0,-2)),
                    nightTemp: convertToCel(action.payload.nightTemp.slice(0,-2)),
                    weatherIcon5: action.payload.weatherIcon5,
                    weatherIcon4: action.payload.weatherIcon4,
                    weatherIcon3: action.payload.weatherIcon3,
                    weatherIcon2: action.payload.weatherIcon2,
                    weatherIcon1: action.payload.weatherIcon1,
                    weatherIcon: action.payload.weatherIcon,
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
    return newCurrentTemp1 =  newCurrentTemp1.toFixed(1) + " °C"
}