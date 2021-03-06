import { all } from 'redux-saga/effects';
import { itemCityWeatherSaga, updateCitySaga, searchCitySaga, deleteCitySaga } from './cityWeatherSaga';

export default function* rootSaga() {
   yield all([
      itemCityWeatherSaga(),
      updateCitySaga(),
      searchCitySaga(),
      deleteCitySaga()
   ]);
}