import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCityWeather, deleteCity, updateCity } from './redux/actions/cityWeatherActions';
import CitySearch from './components/CitySearch';
import ListCity from './components/ListCity';

function App() {
  const cityWeather = useSelector((state) => state.cityWeather.data);
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

  return (
    <>
      <CitySearch />
      <ListCity 
        cityWeather={cityWeather}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate} />
    </>
  );
}

export default App;
