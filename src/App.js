import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCityWeather, cityDelete, cityUpdate, citySearch, cityAdd, resultSearchClear } from './redux/actions/cityWeatherActions';
import { CitySearch, ListCity, MaxMinShow } from './components';

const App = () => {
  const { data: cityWeather, resultSearch } = useSelector((state) => state.cityWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCityWeather()); 
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(cityDelete(id));
  };

  const handleUpdate = (city) => {
    const element = [];
    element.push(city)
    dispatch(cityUpdate(element));
  };

  const handleSearch = (city) => {
    dispatch(citySearch(city));
  };

  const handleAdd = (city) => {
    dispatch(cityAdd(city));
  };

  const handleClear = () => {
    dispatch(resultSearchClear());
  };

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <CitySearch
          handleAdd={handleAdd}
          handleSearch={handleSearch}
          handleClear={handleClear}
          resultSearch={resultSearch} />
        <MaxMinShow cityWeather={cityWeather} />
      </div>      
      <ListCity 
        cityWeather={cityWeather}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate} />
    </>
  );
}

export default App;
