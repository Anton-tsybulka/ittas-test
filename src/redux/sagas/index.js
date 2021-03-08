import { all } from 'redux-saga/effects';
import { itemCityWeatherSaga, addCitySaga, updateCitySaga, searchCitySaga, deleteCitySaga, clearSearchSaga } from './cityWeatherSaga';

export default function* rootSaga() {
   yield all([
      itemCityWeatherSaga(),
      clearSearchSaga(),
      addCitySaga(),
      updateCitySaga(),
      searchCitySaga(),
      deleteCitySaga()
   ]);
}