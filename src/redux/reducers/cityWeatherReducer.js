import {
    GET_CITYWEATHER_REQUESTED,
    GET_CITYWEATHER_SUCCESS,
    ADD_CITYWEATHER_REQUESTED,
    ADD_CITYWEATHER_SUCCESS,    
    UPDATE_CITYWEATHER_REQUESTED,
    UPDATE_CITYWEATHER_SUCCESS,
    SEARCH_CITYWEATHER_REQUESTED,
    SEARCH_CITYWEATHER_SUCCESS,
    SEARCHCLEAR_CITYWEATHER_SUCCESS,
    DELETE_CITYWEATHER_REQUESTED,
    DELETE_CITYWEATHER_SUCCESS,
    CITYWEATHER_FAILED,    
} from '../actions/actionTypes';
 
const initialState = {
    data: [],
    loading: true,
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
                loading: false,
                data: [...state.data, action.payload],
            };
        case ADD_CITYWEATHER_REQUESTED:
            return { 
                ...state,
                loading: true 
            };
        case ADD_CITYWEATHER_SUCCESS:
            if (state.data.find(({id}) => id === action.payload.id)) {
                return { ...state };
            } else {
                return {
                    ...state,
                    loading: false,
                    data: [
                        ...state.data,
                        action.payload                    
                    ],
                };
            };            
        case UPDATE_CITYWEATHER_REQUESTED:
            return { 
                ...state,
                loading: true
            };
        case UPDATE_CITYWEATHER_SUCCESS:
            const idx = state.data.findIndex(({id}) => id === action.payload.id);            
            const updateCity = {...state.data[idx], ...action.payload}
            return {
                ...state,
                loading: false,
                data: [
                    ...state.data.slice(0, idx),
                    updateCity,
                    ...state.data.slice(idx + 1)
               ],
            };
        case SEARCH_CITYWEATHER_REQUESTED:
            return { 
                ...state,
            };
        case SEARCH_CITYWEATHER_SUCCESS:
            let sortItems = [];
            action.payload.forEach((item) => {
                let a = !!state.resultSearch.find(({id}) => id === item.id);
                if (!a) {
                    sortItems.push(item);
                };
            })
            return {
                ...state,
                resultSearch: [
                    ...state.resultSearch,
                    ...sortItems                    
                ]
            };
        case SEARCHCLEAR_CITYWEATHER_SUCCESS:
            return {
                ...state,
                resultSearch: [...state.resultSearch.slice(0, 0)]
            };
        case DELETE_CITYWEATHER_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case DELETE_CITYWEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...state.data.filter(({ id }) => id !== action.payload)]
            };
        case CITYWEATHER_FAILED:
            return { 
                ...state,
                loading: false, 
                error: action.message
            };

        default:
            return state;
    }
}