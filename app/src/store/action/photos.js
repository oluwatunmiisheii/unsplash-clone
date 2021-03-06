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

export const searchPhotosAsync = async (dispatch, query) => {
  dispatch(searchRequest)
  try {
    dispatch(GET_PHOTOS)
    const {data} = await searchPhotos(query)
    dispatch(searchRequestSuccessResponse({photos: data.results, query: query}))
  } catch (_) {
    dispatch(searchRequestErrorResponse('Something went wrong'))
  }
}