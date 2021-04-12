import { SET_PHOTOS_ERROR, GET_PHOTOS, SET_PHOTOS } from './../actionTypes/photos';

export const photoReducer = (state, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        loading: true
      };
      case SET_PHOTOS:
        return {
          ...state,
          loading: false,
          photos: [...action.payload.photos],
          query: action.payload.query
        };
        case SET_PHOTOS_ERROR:
          return {
            ...state,
            loading: false,
            error: action.payload
          };
    default:
      return state
  }

}