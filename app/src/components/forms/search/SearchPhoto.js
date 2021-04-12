import React from 'react';
import styles from './SearchPhoto.module.scss';

const SearchPhoto = () => {
  return ( 
    <form className={styles["search-form"]}>
      <div className={styles["search-form__input-wrapper"]}>
        <input 
          className={styles["search-form__input"]}
          type="search"
          name="search"
        />
      </div>
      <button className={styles["search-form__button"]} type="submit">Search</button>
    </form>
  );
}
 
export default SearchPhoto;