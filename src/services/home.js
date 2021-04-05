import request from '@/utils/request';

export async function getWeather(params) {
  return request('/api/', {
    method: 'GET',
    params,
  });
}

export async function getTemperature(params) {
  return request('/api/', {
    method: 'GET',
    params,
  });
}
