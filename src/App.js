import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCityWeather, deleteCity, updateCity, citySearch } from './redux/actions/cityWeatherActions';
import CitySearch from './components/CitySearch';
import ListCity from './components/ListCity';

function App() {
  const { data: cityWeather, resultSearch } = useSelector((state) => state.cityWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCityWeather());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCity(id));
  };

  const handleUpdate = (city) => {
    dispatch(updateCity(city));
  };

  const search = (value) => {
    dispatch(citySearch(value));
  };

  return (
    <>
      <CitySearch
        search={search}
        resultSearch={resultSearch} />
      <ListCity 
        cityWeather={cityWeather}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate} />
    </>
  );
}

export default App;
