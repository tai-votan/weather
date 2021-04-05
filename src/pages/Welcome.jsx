import React, { useEffect, useState, useCallback } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useIntl, FormattedMessage, connect, SelectLang } from 'umi';
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';
import ForecastContainer from '@/modules/forecast-container';

const { Option } = Select;

const Welcome = (props) => {
  const {
    dispatch,
    loading,
    home: { cities = [], temperatures = [], title },
  } = props;
  const [cityId, setCityId] = useState(1252431);
  const [value, setValue] = useState(null);
  const { formatMessage } = useIntl();

  const fetchCities = ({ query }) => {
    if (!query) {
      return;
    }

    dispatch({
      type: 'home/fetchCities',
      payload: {
        query,
        path: 'location/search',
      },
    });
  };

  const fetchTemperature = ({ id }) => {
    dispatch({
      type: 'home/fetchTemperature',
      payload: {
        id,
        path: 'location',
      },
    });
  };

  useEffect(() => fetchTemperature({ id: cityId }), [cityId]);

  const debounceSearch = useCallback(
    debounce((nextValue) => fetchCities({ query: nextValue }), 1000),
    [],
  );

  const handleSearch = (query) => {
    debounceSearch(query);
  };

  const handleChange = (newValue) => {
    setCityId(newValue);
    setValue(newValue);

    dispatch({
      type: 'home/fetchTemperature',
      payload: {
        id: newValue,
        path: 'location',
      },
    });
  };

  return (
    <PageContainer>
      <SelectLang />
      <Select
        allowClear
        showSearch
        value={value}
        placeholder={formatMessage({
          id: 'search.city',
        })}
        style={{
          width: 300,
        }}
        defaultActiveFirstOption={false}
        filterOption={false}
        onSearch={handleSearch}
        onChange={handleChange}
        notFoundContent={loading['home/fetchCities'] ? <Spin size="small" /> : null}
      >
        {cities.map(({ woeid: id, title: cityName }) => (
          <Option key={id} value={id}>
            {cityName}
          </Option>
        ))}
      </Select>
      <ForecastContainer
        title={title}
        temperatures={temperatures}
        loading={loading['home/fetchTemperature']}
      />
    </PageContainer>
  );
};

export default connect((state) => {
  const { home, loading } = state;
  return {
    home,
    loading: loading.effects,
  };
})(Welcome);
