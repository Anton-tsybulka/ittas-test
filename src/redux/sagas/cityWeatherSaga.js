import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Minsk&units=metric&appid=784081e6b015cdcdacd31e6d9bf22fb8';

const getCityWeather = () =>
   axios
      .get(apiUrl)
      .then((result) => result.data)
      .then((result) => {
         localStorage.setItem('Minsk', JSON.stringify(result))
         return JSON.parse(localStorage.getItem('Minsk'));
      })
      .catch((error) => {
         throw error;
      });

const updateCity = (city) =>
   axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=784081e6b015cdcdacd31e6d9bf22fb8`)
      .then((result) => result.data)
      .then((result) => {
         localStorage.setItem('Minsk', JSON.stringify(result))
         return JSON.parse(localStorage.getItem('Minsk'));
      })
      .catch((error) => {
         throw error;
      });

const citySearch = (value) => {

   const arrSearch = []
   let result

   for(let key in localStorage) {
      if (!localStorage.hasOwnProperty(key)) {
        continue;
      }

      result = key && key.toLowerCase().slice(0, value.length) === value.toLowerCase();
      if (result & (value.length <= key.length)) {
         let item = JSON.parse(localStorage.getItem(key));
         arrSearch.push(item);
      };
    };

    return arrSearch;
};

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

function* fetchSearchCity(action) {
   try {
      const city = yield call(() => citySearch(action.payload));
      yield put({ type: 'SEARCH_CITY_SUCCESS', payload: city });
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

function* searchCitySaga() {
   yield takeEvery('SEARCH_CITY_REQUESTED', fetchSearchCity);
}

function* deleteCitySaga() {
   yield takeEvery('DELETE_CITYWEATHER_REQUESTED', fetchDeleteCity);
}

export { itemCityWeatherSaga, updateCitySaga, searchCitySaga , deleteCitySaga };

/* &lang=ru */