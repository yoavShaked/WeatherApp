//axios is a libery that do an ajax request 
import axios from 'axios';

const API_KEY = '28413529014964f4216b9b4e161f6bf7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log(request);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}