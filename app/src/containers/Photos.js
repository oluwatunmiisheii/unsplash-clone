import React, { useContext, useEffect, useState } from 'react'
import { PhotoContext } from './../context/PhotoContext';
import { searchPhotosAsync } from './../store/action/photos';
import PhotoCard from './../components/photoCard/PhotoCard';
import styles from './Photos.module.scss';
import NoContent from './../components/noContent/NoContent';

const PhotoList = () => {
  const { dispatch, state } = useContext(PhotoContext)
  const [defaultSearchQuery] = useState('nigeria')

  const searchForPhotos = async (_) => {
    await searchPhotosAsync(dispatch, defaultSearchQuery)
  }

  useEffect((_) => {
    searchForPhotos()
  }, [])
  
  if(state.loading) {
    return (
      <div className="container">
        <div className={styles["photos-grid"]}>Loading</div>
      </div>
    )
  }

  return ( 
    <>
      {!state.error && (
        state.photos.length > 0 ? (
          <div className="container">
            <div className={styles["photos-grid__wrapper"]}>
              <h5 className={styles["title"]}>Showing results for <span><strong>{state.query}</strong></span></h5>
              <div className={styles["photos-grid"]}>
                {state.photos.map(photo => (
                  <PhotoCard photo={photo} key={photo.id} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <NoContent query={state.query} />
          </div>
        )
      )}
    </>
  );
}
 
export default PhotoList;