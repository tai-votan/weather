import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { getLocale } from 'umi';


const ForecastSmall = (props) => {
  const { day, theTemp, maxTemp, minTemp, special } = props;

  return (
    <Forecast special={special}>
      <ForecastHeader>
        <ForecastDay>{moment(day).locale(getLocale()).format('dddd')}</ForecastDay>
      </ForecastHeader>
      <ForecastContent>
        <ForecastIcon>
          <img
            src="https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/icons/icon-3.svg"
            alt=""
            width="48"
          />
        </ForecastIcon>
        <Degree>
          {Math.ceil(theTemp)}
          <sup>o</sup>C
        </Degree>
        <small>
          18<sup>o</sup>
        </small>
      </ForecastContent>
    </Forecast>
  );
};

export default ForecastSmall;

const Forecast = styled.div`
  background-color: ${({ special }) => special ? '#262936' : 'transparent'};
  height: 100%;
`;

export const ForecastDay = styled.div`
  text-transform: capitalize;
`;

export const ForecastHeader = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
  font-weight: 400;
  color: #bfc1c8;
`;

const ForecastContent = styled.div`
  padding: 50px 20px 10px;
  text-align: center;
`;

const ForecastIcon = styled.div`
  margin-bottom: 20px;
`;

export const Degree = styled.div`
  font-size: ${({ fontSize }) => fontSize || "24px"};
  line-height: ${({ lineHeight }) => lineHeight || '36px'};
  color: white;
  font-weight: 700;
  ${({ styles }) => styles};
`;
