/*import styles from './SearchPopup.module.css';

export default function SearchPopup() {
  return (
    <div className="search-popup">
      <div className={styles.popupInner}>
        <div className="upper-box clearfix">
          <figure className="logo-box pull-left">
            <a href="#"><img src="/assets/img/logo.png" alt="MBS Pharmas" /></a>
          </figure>
          <div className="close-search pull-right"><span className="far fa-times"></span></div>
        </div>
        <div className="overlay-layer"></div>
        <div className="auto-container">
          <div className={styles.searchForm}>
            <form method="post" action="#">
              <div className="form-group">
                <fieldset>
                  <input 
                    type="search" 
                    className={styles.searchInput} 
                    name="search-input" 
                    placeholder="Type your keyword and hit" 
                    required
                  />
                  <button type="submit" className={styles.searchButton}>
                    <i className="far fa-search"></i>
                  </button>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
*//*'use client';

import styles from './SearchPopup.module.css';

export default function SearchPopup() {
  return (
    <div id="search-popup" className="search-popup">
      <div className={styles.popupInner}>
        <div className="upper-box clearfix">
          <figure className="logo-box pull-left">
            <a href="#"><img src="/img/logo.png" alt="MBS Pharmas" /></a>
          </figure>
          <div className="close-search pull-right"><span className="far fa-times"></span></div>
        </div>
        <div className="overlay-layer"></div>
        <div className="auto-container">
          <div className={styles.searchForm}>
            <form method="post" action="#">
              <div className="form-group">
                <fieldset>
                  <input 
                    type="search" 
                    className={styles.searchInput} 
                    name="search-input" 
                    placeholder="Type your keyword and hit" 
                    required
                  />
                  <button type="submit" className={styles.searchButton}>
                    <i className="far fa-search"></i>
                  </button>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
*/

'use client'
import React, { useState } from 'react';
import styles from './SearchPopup.module.css'; // Import the CSS Module
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS

const SearchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearchPopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchInput = e.target['search-input'].value;
    console.log('Search keyword:', searchInput);
  };

  return (
    <>
      <div className={`${styles.boxed_wrapper} ${isOpen ? styles.popupOpen : ''}`}>
        <div
          id="search-popup"
          className={`${styles.searchPopup} ${isOpen ? styles.open : ''}`}
        >
          <div className={styles.popupInner}>
            <div className={styles.upperBox}>
              <figure className={styles.logoBox}>
                <a href="#">
                  <img src="/assets/img/logo.png" alt="Logo" />
                </a>
              </figure>
              <div
                className={styles.closeSearch}
                onClick={toggleSearchPopup}
              >
                <span className="far fa-times"></span>
              </div>
            </div>
            <div className={styles.overlayLayer}></div>
            <div className={styles.autoContainer}>
              <div className={styles.searchForm}>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <fieldset>
                      <input
                        type="search"
                        className={styles.formControl}
                        name="search-input"
                        placeholder="Type your keyword and hit"
                        required
                      />
                      <button type="submit">
                        <i className="far fa-search"></i>
                      </button>
                    </fieldset>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Button to open the search popup */}
      <button onClick={toggleSearchPopup}>Open Search</button>
    </>
  );
};

export default SearchPopup;
