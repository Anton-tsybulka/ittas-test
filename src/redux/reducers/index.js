import { combineReducers } from 'redux';
import cityWeatherReducer from './cityWeatherReducer';

const rootReducer = combineReducers({
   cityWeather: cityWeatherReducer
});

export default rootReducer;