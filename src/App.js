import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { List, Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCityWeather } from './redux/actions/cityWeatherActions';
import CitySearch from './components/CitySearch';

function App() {
  const cityWeather = useSelector((state) => state.cityWeather.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCityWeather());
  }, [dispatch]);

  return (
    <>
      <CitySearch />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={cityWeather}
        renderItem={({main, name, wind}) => (
          <List.Item key={name}>
            <Card 
              title={`Город: ${name}`}
              actions={[
                <Button type='primary' size='small'>Удалить</Button>,
                <Button type='primary' size='small'>Обновить</Button>
              ]}>
                <p>Температура: {main.temp}*C</p>
                <p>Влажность: {main.humidity}%</p>
                <p>Атмосферное давление: {main.pressure}</p>
                <p>Сила и напрвление ветра: {wind.speed}М/С - {wind.deg}</p>
                <p>Последнее обновление данных: ...</p>
            </Card>
          </List.Item>
        )}
      />
    </>
  );
}

export default App;
