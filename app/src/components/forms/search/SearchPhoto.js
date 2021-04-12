import React, { useState, useContext } from 'react';
import styles from './SearchPhoto.module.scss';
import { searchPhotosAsync } from './../../../store/action/photos';
import { PhotoContext } from './../../../context/PhotoContext';


const formData = {
  query: ""
}

const SearchPhoto = () => {
  const [searchQuery, setSeachQuery] = useState(formData);
  const [isSearching, setIsSearching] = useState(false)
  const { dispatch } = useContext(PhotoContext)

  const updateSearchQueryField = ({ target }) => {
    setSeachQuery({...searchQuery, [target.name]: target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!searchQuery.query.length) {
      return
    }
    setIsSearching(true)
    await searchPhotosAsync(dispatch, searchQuery.query)
    setIsSearching(false)
    setSeachQuery(formData)
  }

  return ( 
    <form className={styles["search-form"]} onSubmit={handleSubmit}>
      <div className={styles["search-form__input-wrapper"]}>
        <input 
          className={styles["search-form__input"]}
          type="search"
          name="query"
          value= {searchQuery.query}
          onChange={(e) => updateSearchQueryField(e)}
        />
      </div>
      <button 
        className={styles["search-form__button"]} 
        type="submit"
        disabled={!searchQuery.query.length || isSearching}
      >
        Search
      </button>
    </form>
  );
}
 
export default SearchPhoto;