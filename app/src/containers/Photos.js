import React, { useContext, useEffect } from 'react'
import { PhotoContext } from './../context/PhotoContext';
import { searchPhotosAsync } from './../store/action/photos';
import PhotoCard from './../components/photoCard/PhotoCard';
import styles from './Photos.module.scss';

const PhotoList = () => {
  const {dispatch, state} = useContext(PhotoContext)

  
  const searchForPhotos = async (_) => {
    await searchPhotosAsync(dispatch, 'lagos')
  }

  useEffect((_) => {
    searchForPhotos()
  }, [])
  
  if(state.loading) {
    return (
      <div className="container">
        <div className={styles["photos-grid"]}></div>
      </div>
    )
  }

  return ( 
    <>
      {!state.error && (
        state.photos.length > 0 ? (
          <div className="container">
            <div className={styles["photos-grid"]}>
              {state.photos.map(photo => (
                <PhotoCard photo={photo} key={photo.id} />
              ))}
            </div>
          </div>
        ) : 'no photos'
      )}
    </>
  );
}
 
export default PhotoList;