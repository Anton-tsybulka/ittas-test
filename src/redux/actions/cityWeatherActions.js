import {
    GET_CITYWEATHER_REQUESTED,
    UPDATE_CITYWEATHER_REQUESTED,
    DELETE_CITYWEATHER_REQUESTED,
} from './actionTypes';

export const getCityWeather = (data) => {
    return {
        type: GET_CITYWEATHER_REQUESTED,
        payload: data,
    };
};

export const updateCity = (data) => {
    return {
        type: UPDATE_CITYWEATHER_REQUESTED,
        payload: data,
    };
};

export const deleteCity = (data) => {
    return {
        type: DELETE_CITYWEATHER_REQUESTED,
        payload: data,
    };
};