import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

const CitySearch = () => {
    return (
        <Select
    showSearch
    style={{ width: 600, margin: '2em' }}
    placeholder="Select a city"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="Minsk">Минск</Option>
    <Option value="London">Лондон</Option>
    <Option value="Berlin">Берлин</Option>
  </Select>
    );
}

export default CitySearch;