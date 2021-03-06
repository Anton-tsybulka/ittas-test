import {
    GET_CITYWEATHER_REQUESTED,
    GET_CITYWEATHER_SUCCESS,
    DELETE_CITYWEATHER_SUCCESS,
    UPDATE_CITYWEATHER_REQUESTED,
    UPDATE_CITYWEATHER_SUCCESS,
    SEARCH_CITY_REQUESTED,
    SEARCH_CITY_SUCCESS,
    CITYWEATHER_FAILED,    
} from '../actions/actionTypes';
 
const initialState = {
    data: [],
    error: null,
    resultSearch: []
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
        case UPDATE_CITYWEATHER_REQUESTED:
            return { ...state };
        case UPDATE_CITYWEATHER_SUCCESS:
            const idx = state.data.findIndex(({id}) => id === action.payload.id);            
            const updateCity = {...state.data[idx], ...action.payload}
        return {
                ...state,
                data: [
                    ...state.data.slice(0, idx),
                    updateCity,
                    ...state.data.slice(idx + 1)
               ],
        };
        case SEARCH_CITY_REQUESTED:
            return { ...state };
        case SEARCH_CITY_SUCCESS:
            return {
                ...state,
                resultSearch: [...action.payload]
            }
        case DELETE_CITYWEATHER_SUCCESS:
            return {
                ...state,
                data: [...state.data.filter(({ id }) => id !== action.payload)]
            };
        case CITYWEATHER_FAILED:
            return { ...state, error: action.message};

        default:
            return state;
    }
}