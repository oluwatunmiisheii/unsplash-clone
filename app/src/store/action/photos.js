import { SET_PHOTOS_ERROR, GET_PHOTOS, SET_PHOTOS } from './../actionTypes/photos';
import { searchPhotos } from './../../services/search';

const searchRequest = (_) => {
  return {
    type: GET_PHOTOS
  }
}

const searchRequestSuccessResponse = (payload) => {
  return {
    type: SET_PHOTOS,
    payload
  }
}

const searchRequestErrorResponse = (payload) => {
  return {
    type: SET_PHOTOS_ERROR,
    payload
  }
}

export const getPhotosAsync = async (dispatch, query) => {
  dispatch(searchRequest)
  try {
    dispatch(GET_PHOTOS)
    const apiResponse = searchPhotos(query)
    dispatch(searchRequestSuccessResponse(apiResponse))
  } catch (getPhotosAsyncError) {
    dispatch(searchRequestErrorResponse(error.response.data.message) || 'Something went wrong')
    throw new Error(error.response.data.message || 'something went wrong')
  }
}