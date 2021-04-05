import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { getLocale } from 'umi';
import { Row, Col } from 'antd';
import { ForecastHeader, ForecastDay, Degree } from './forecast-small';

const ForecastBig = (props) => {
  const { day, theTemp, maxTemp, minTemp, title } = props;
  return (
    <div className="today forecast">
      <ForecastHeader>
        <Row justify={'space-between'}>
          <Col><ForecastDay><ForecastDay>{moment(day).locale(getLocale()).format('dddd')}</ForecastDay></ForecastDay></Col>
          <Col>
            <ForecastDay>{moment(day).locale(getLocale()).format('DD MMM')}</ForecastDay>
          </Col>
        </Row>
      </ForecastHeader>
      <ForecastContent>
        <LocationTitle>{title}</LocationTitle>
        <Row align={'middle'}>
          <Degree fontSize={'90px'} lineHeight={'135px'} styles={{ marginRight: 30 }}>
            {Math.ceil(theTemp)}<sup>o</sup>C
          </Degree>
          <div className="forecast-icon">
            <img src="https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/icons/icon-1.svg" alt="" width="90" />
          </div>
        </Row>
        <span>
          <img src="images/icon-umberella.png" alt="" />
          20%
        </span>
        <span>
          <img src="images/icon-wind.png" alt="" />
          18km/h
        </span>
        <span>
          <img src="images/icon-compass.png" alt="" />
          East
        </span>
      </ForecastContent>
    </div>
  );
};

export default ForecastBig;

const ForecastContent = styled.div`
  padding: 30px 20px;
  text-align: left;
`;

const LocationTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #bfc1c8;
`;
