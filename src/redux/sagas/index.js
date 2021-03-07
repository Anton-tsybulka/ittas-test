import { all } from 'redux-saga/effects';
import { itemCityWeatherSaga, addCitySaga, updateCitySaga, searchCitySaga, deleteCitySaga } from './cityWeatherSaga';

export default function* rootSaga() {
   yield all([
      itemCityWeatherSaga(),
      addCitySaga(),
      updateCitySaga(),
      searchCitySaga(),
      deleteCitySaga()
   ]);
}