import {
    GET_CITYWEATHER_REQUESTED,
    GET_CITYWEATHER_SUCCESS,
    CITYWEATHER_FAILED,    
} from '../actions/actionTypes';
 
const initialState = {
    data: [],
    error: null,
};
 
export default function cityWeatherReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CITYWEATHER_REQUESTED:
            return { ...state };
        case GET_CITYWEATHER_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.payload],
             };
        case CITYWEATHER_FAILED:
            return { ...state, error: action.message};

        default:
            return state;
    }
}