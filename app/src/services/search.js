import apiClient from './axios';

export const searchPhotos = (query) => {
  return apiClient.get(`/?query=${query}`)
}