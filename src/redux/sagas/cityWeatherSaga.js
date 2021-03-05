import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Minsk&units=metric&appid=784081e6b015cdcdacd31e6d9bf22fb8';

const getCityWeather = () =>
   axios
      .get(apiUrl)
      .then((result) => result.data)
      .catch((error) => {
         throw error;
      });

const updateCity = (city) =>
   axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=784081e6b015cdcdacd31e6d9bf22fb8`)
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

function* fetchUpdateCity(action) {
   try {
      const city = yield call(() => updateCity(action.payload));
      yield put({ type: 'UPDATE_CITYWEATHER_SUCCESS', payload: city });
   } catch (error) {
      yield put({ type: 'CITYWEATHER_FAILED', message: error.message });
   }
}

function* fetchDeleteCity(action) {
   try {
      yield put({ type: 'DELETE_CITYWEATHER_SUCCESS', payload: action.payload });
   } catch (error) {
      yield put({ type: 'CITYWEATHER_FAILED', message: error.message });
   }
}

function* itemCityWeatherSaga() {
   yield takeEvery('GET_CITYWEATHER_REQUESTED', fetchCityWeather);
}

function* updateCitySaga() {
   yield takeEvery('UPDATE_CITYWEATHER_REQUESTED', fetchUpdateCity);
}

function* deleteCitySaga() {
   yield takeEvery('DELETE_CITYWEATHER_REQUESTED', fetchDeleteCity);
}

export { itemCityWeatherSaga, updateCitySaga, deleteCitySaga };

/* &lang=ru */