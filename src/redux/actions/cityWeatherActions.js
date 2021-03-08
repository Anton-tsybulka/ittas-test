import {
    GET_CITYWEATHER_REQUESTED,
    ADD_CITYWEATHER_REQUESTED,
    UPDATE_CITYWEATHER_REQUESTED,    
    SEARCH_CITYWEATHER_REQUESTED,
    SEARCHCLEAR_CITYWEATHER_REQUESTED,
    DELETE_CITYWEATHER_REQUESTED,
} from './actionTypes';

export const getCityWeather = (data) => {
    return {
        type: GET_CITYWEATHER_REQUESTED,
        payload: data,
    };
};

export const cityUpdate = (data) => {
    return {
        type: UPDATE_CITYWEATHER_REQUESTED,
        payload: data,
    };
};

export const cityAdd = (data) => {
    return {
        type: ADD_CITYWEATHER_REQUESTED,
        payload: data,
    };
};

export const cityDelete = (data) => {
    return {
        type: DELETE_CITYWEATHER_REQUESTED,
        payload: data,
    };
};

export const citySearch = (data) => {
    return {
        type: SEARCH_CITYWEATHER_REQUESTED,
        payload: data,
    };
};

export const resultSearchClear = (data) => {
    return {
        type: SEARCHCLEAR_CITYWEATHER_REQUESTED,
        payload: data,
    };
};