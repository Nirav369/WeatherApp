import {
    SEARCH_BEGIN,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    TEMP_TYPE_CHANGE
} from '../actionTypes';

const API_KEY = 'cf55c2bc1b73de4749bfec2c16f63027'
const API = 'https://api.openweathermap.org/data/2.5/forecast'

export function startSearch(cityName) {
    return (dispatch) => {
        return fetch(`${API}?q=${cityName}&units=imperial&APPID=${API_KEY}`)
            .then()
            .then(res => res.json())
            .then(json => {
                dispatch(SearchSuccess(json));
                return json.data;
            })
            .catch(error => dispatch(SearchFailure(error)));
    };
}

export function convertCel(data) {
    return {
        type: TEMP_TYPE_CHANGE,
        payload: data
        };
    
}

export const SearchBegin = () => {
    return {
        type: SEARCH_BEGIN
    };
}


export const SearchSuccess = (result) => {
    return {
        type: SEARCH_SUCCESS,
        payload: result
        };
}

export const SearchFailure = () => {
    return {
        type: SEARCH_FAILURE
    };
}