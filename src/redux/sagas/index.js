import { all } from 'redux-saga/effects';
import { itemCityWeatherSaga, updateCitySaga, deleteCitySaga } from './cityWeatherSaga';

export default function* rootSaga() {
   yield all([
      itemCityWeatherSaga(),
      updateCitySaga(),
      deleteCitySaga()
   ]);
}