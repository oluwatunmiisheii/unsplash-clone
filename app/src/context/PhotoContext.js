import React, { createContext, useReducer } from 'react';
import { photoReducer } from '../store/reducer/PhotoReducer';

export const PhotoContext = createContext()

const PhotoContextProvider = ({ children }) => {
  const initialState = {
    loading: true,
    photos: [],
    error: null
  }

  const [state, dispatch] = useReducer(photoReducer, initialState)
  
  return (
    <PhotoContextProvider.Provider value={{ state, dispatch }}>
      {children}
    </PhotoContextProvider.Provider>
  )
}
export default PhotoContextProvider