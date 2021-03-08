import React from 'react';
import { Select } from 'antd';

const { Option } = Select;



const CitySearch = ({ handleSearch, resultSearch, handleAdd }) => {
  const renderResultSearch = resultSearch.map(({id, name}) => (
    <Option key={id} value={name}>{name}</Option>
  ));
  
  const onChange = (city) => {
    handleAdd(city);
  };

  const onSearch = (val) => {    
    if (val.length >= 3) {
      handleSearch(val);
    };
  }
    return (
      <Select
        showSearch
        allowClear
        style={{ width: 600, margin: '2em' }}
        placeholder='Выберите город'
        optionFilterProp='children'
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }>
    {renderResultSearch}    
  </Select>
    );
}

export default CitySearch;