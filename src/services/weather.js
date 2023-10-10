/* eslint-disable object-shorthand */
import {
    ajax
} from "../helpers/ajax";
const { VITE_API_KEY: API_KEY } = import.meta.env;


export const optionsRequest = {
    searchLocation(query) {
        return {
            method: "GET",
            url: "https://api.openweathermap.org/geo/1.0/direct",
            params: {
                q: query,
                limit: 5,
                appid: API_KEY,
                units: "metric"
            }
        }
    },
    currentWeather(lat, lon) {
        return {
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather",
            params: {
                lat: lat,
                lon: lon,
                appid: API_KEY,
                units: "metric"
            }
        }
    },
    dayForecast(lat,lon){
        return {
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/forecast",
            params: {
                lat: lat,
                lon: lon,
                appid: API_KEY,
                units: "metric"
            }
        }
    },
    airPollution(lat,lon){
        return {
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/air_pollution",
            params: {
                lat: lat,
                lon: lon,
                appid: API_KEY,
                units: "metric"
            }
        }
    }
}
export const getWeather = async (optionsRequest) => {
    return await ajax({...optionsRequest});
}
