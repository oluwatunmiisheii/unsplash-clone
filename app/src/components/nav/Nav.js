import React from 'react';
import styles from './Nav.module.scss';

const Nav = () => {
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  return ( 
    <header className={styles["header"]}>
      <nav className={styles["main-nav"]}>
        <div className={styles["nav-content__left"]}>
          <div className={styles["nav-hero"]}>
            <h5>PhotoSearch</h5>
          </div>
        </div>
        <div className={styles["nav-content__right"]}>
          {weekday[new Date().getDay()] }, {new Date().getFullYear()}
        </div>
      </nav>
    </header>
   );
}
 
export default Nav;