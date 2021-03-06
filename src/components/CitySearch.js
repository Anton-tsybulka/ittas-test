import React from 'react';
import { Select } from 'antd';

const { Option } = Select;



const CitySearch = ({ search, resultSearch }) => {
  const renderResultSearch = resultSearch.map(({id, name}) => (
    <Option key={id} value={name}>{name}</Option>
  ));
  
  const onChange = (value) => {
    
  };
  
  const onBlur = () => {
    console.log('blur');
  }
  
  const onFocus = () => {
    console.log('focus');
  }
  
  const onSearch = (val) => {
    if (val.length >= 3) {
      search(val);
    };
  }
    return (
        <Select
    showSearch
    style={{ width: 600, margin: '2em' }}
    placeholder='Выберите город'
    optionFilterProp='children'
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    {renderResultSearch}    
  </Select>
    );
}

export default CitySearch;