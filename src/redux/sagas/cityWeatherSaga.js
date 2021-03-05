import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=ru&units=metric&appid=784081e6b015cdcdacd31e6d9bf22fb8';

const getCityWeather = () =>
   axios
      .get(apiUrl)
      .then((result) => result.data)
      .catch((error) => {
         throw error;
      });

function* fetchCityWeather() {
   try {
      const cityWeather = yield call(getCityWeather);
      yield put({ type: 'GET_CITYWEATHER_SUCCESS', payload: cityWeather });
   } catch (error) {
      yield put({ type: 'CITYWEATHER_FAILED', message: error.message });
   }
}

function* itemCityWeatherSaga() {
   yield takeEvery('GET_CITYWEATHER_REQUESTED', fetchCityWeather);
}

export { itemCityWeatherSaga };