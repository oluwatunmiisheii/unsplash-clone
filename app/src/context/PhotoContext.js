import React, { createContext, useReducer } from 'react';
import { photoReducer } from '../store/reducer/PhotoReducer';

export const PhotoContext = createContext()

const PhotoContextProvider = ({ children }) => {
  const initialState = {
    loading: true,
    photos: [],
    error: null,
    query: null
  }

  const [state, dispatch] = useReducer(photoReducer, initialState)
  
  return (
    <PhotoContext.Provider value={{ state, dispatch }}>
      {children}
    </PhotoContext.Provider>
  )
}

export default PhotoContextProvider