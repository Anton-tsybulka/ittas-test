import {
    GET_CITYWEATHER_REQUESTED,
} from './actionTypes';

export const getCityWeather = (data) => {
    return {
        type: GET_CITYWEATHER_REQUESTED,
        payload: data,
    };
};