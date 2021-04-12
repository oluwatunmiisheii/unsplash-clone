import React from 'react';
import NotFoundImage from "../../assets/not-found.svg";
import styles from "./NoContent.module.scss";

const NoContent = ({ query }) => {
  return ( 
    <div className={styles["not-content__wrapper"]}>
      <img src={NotFoundImage} height="300" width="400" alt="not found" />
      <h3 className={styles['no-content__title']}>
        No results for <span><strong>{ query }</strong></span>, kindly try another query
      </h3>
    </div>
  );
}
 
export default NoContent;