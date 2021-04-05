import { getWeather, getTemperature } from '@/services/home';
import get from 'lodash/get';

const UserModel = {
  namespace: 'home',
  state: {
    cities: [],
    temperatures: [],
  },
  effects: {
    *fetchCities({ payload }, { call, put }) {
      const response = yield call(getWeather, payload);
      yield put({
        type: 'save',
        payload: {
          cities: response || [],
        },
      });
    },
    *fetchTemperature({ payload }, { call, put }) {
      const response = yield call(getTemperature, payload);
      const { consolidated_weather: temperatures, ...res } = response;
      yield put({
        type: 'save',
        payload: {
          temperatures,
          ...res,
        },
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...(payload || {}) };
    },
  },
};
export default UserModel;
