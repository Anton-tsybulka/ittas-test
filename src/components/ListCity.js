import React from 'react';
import { List, Card, Button } from 'antd';


const ListCity = ({ cityWeather, handleDelete, handleUpdate }) => {
    const data = new Date();
    return (
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
            renderItem={({main, name, wind, id}) => (
                <List.Item key={id}>
                    <Card 
                    title={`Город: ${name}`}
                    actions={[
                        <Button 
                            type='primary' 
                            size='small'
                            onClick={() => handleDelete(id)}>Удалить</Button>,
                        <Button 
                            type='primary' 
                            size='small'
                            onClick={() => handleUpdate(name)}>Обновить</Button>
                    ]}>
                        <p>Температура: {main.temp}*C</p>
                        <p>Влажность: {main.humidity}%</p>
                        <p>Атмосферное давление: {main.pressure}</p>
                        <p>Сила и напрвление ветра: {wind.speed}М/С - {wind.deg}</p>
                        <p>Последнее обновление данных: {data.toString()}</p>
                    </Card>
                </List.Item>
            )}
        />
    );
}

export default ListCity;