import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCityWeather, cityDelete, cityUpdate, citySearch, cityAdd } from './redux/actions/cityWeatherActions';
import CitySearch from './components/CitySearch';
import ListCity from './components/ListCity';

function App() {
  const { data: cityWeather, resultSearch } = useSelector((state) => state.cityWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCityWeather());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(cityDelete(id));
  };

  const handleUpdate = (id) => {
    dispatch(cityUpdate(id));
  };

  const handleSearch = (city) => {
    dispatch(citySearch(city));
  };

  const handleAdd = (city) => {
    dispatch(cityAdd(city));
  };

  return (
    <>
      <CitySearch
        handleAdd={handleAdd}
        handleSearch={handleSearch}
        resultSearch={resultSearch} />
      <ListCity 
        cityWeather={cityWeather}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate} />
    </>
  );
}

export default App;
