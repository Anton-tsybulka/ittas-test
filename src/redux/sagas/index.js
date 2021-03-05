import { all } from 'redux-saga/effects';
import { itemCityWeatherSaga } from './cityWeatherSaga';

export default function* rootSaga() {
   yield all([
      itemCityWeatherSaga()
   ]);
}