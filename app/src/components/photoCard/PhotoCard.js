import React from 'react';
import styles from './PhotoCard.module.scss';

const PhotoCard = ({ photo }) => {
  return ( 
    <div className={styles["photo-card__wrapper"]}>
      <img src={photo.urls.small} className={styles["photo-card__image"]} />
      <div className={styles["photo-card__details"]}>
        <img className={styles["user-image"]} src={photo.user.profile_image.medium} alt={photo.user.username} />
        <p className={styles["user-name"]}>{photo.user.name}</p>
      </div>
    </div>
  );
}
 
export default PhotoCard;