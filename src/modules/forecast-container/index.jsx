import React from 'react';
import { Skeleton, Row, Col } from 'antd';
import { ForecastSmall, ForecastBig } from '@/components/forecast';
import PropsType from 'prop-types';
import styled from 'styled-components';

const ForecastContainer = ({ temperatures, loading, title }) => {
  return (
    <ForecastWrapper>
      <Row>
        {temperatures.map((temperature, index) => {
          const {
            id,
            min_temp: min,
            max_temp: max,
            the_temp: theTemp,
            applicable_date: day,
          } = temperature;

          if (index > 4) {
            return null;
          }

          if (index === 0) {
            return (
              <Col xl={8} lg={8} md={16} sm={24} xs={24} key={id}>
                <Skeleton loading={loading}>
                  <ForecastBig
                    title={title}
                    day={day}
                    theTemp={theTemp}
                    maxTemp={max}
                    minTemp={min}
                  />
                </Skeleton>
              </Col>
            );
          }

          const special = index % 2 !== 0;
          return (
            <Col xl={4} lg={4} md={8} sm={12} xs={12} key={id}>
              <Skeleton loading={loading}>
                <ForecastSmall day={day} theTemp={theTemp} maxTemp={max} minTemp={min} special={special} />
              </Skeleton>
            </Col>
          );
        })}
      </Row>
    </ForecastWrapper>
  );
};

ForecastContainer.propTypes = {
  temperatures: PropsType.array,
  loading: PropsType.bool,
  title: PropsType.string,
};

export default ForecastContainer;

const ForecastWrapper = styled.div`
  background: #323544;
  border-radius: 10px;
`;
